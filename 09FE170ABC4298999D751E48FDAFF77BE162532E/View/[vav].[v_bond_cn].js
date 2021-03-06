﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[vav].[v_bond_cn]'))
EXEC dbo.sp_executesql @statement = N'



























CREATE VIEW [vav].[v_bond_cn]
AS

SELECT 
asset.assetId AS AssetId,
assIt1.id_number AS Code,
assIt2.id_number AS Pyc,
assRic.id_value AS Ric,

COALESCE(
NULLIF((SELECT  chinese_name
 FROM  vav.v_bondname 
 WHERE asset_Id = asset.assetId), ''''),
NULLIF(ejvBond.shortname, ''''),
NULLIF(newListBondInfo.BondLocalName, ''''),
 (SELECT TOP (1) id_number 
 FROM ejv.[govcorp.asset_ident] i 
 WHERE i.assetId = asset.assetId AND i.id_cd = ''PYC''
 ORDER BY i.id_eff_dt DESC)
) AS ShortName,
                       
issInfo.orig_issue_dt AS IssueDate,
(issInfo.orig_iss_amt / 100000) AS IssueAmount,
issInfo.orig_iss_cpn AS InterestRate,
issInfo.orig_iss_px AS IssuePrice,
asset.cntry_of_iss_cd AS IssueCountryCd,
(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''govcorp.asset'') AND 
       (table_cd = asset.cntry_of_iss_cd)
) AS IssueCountry,

(CASE WHEN issInfo.orig_avg_life >= 1 
		THEN CONVERT(nvarchar(32), issInfo.orig_avg_life) + N''年''
	  ELSE CONVERT(nvarchar(32), issInfo.term_to_maturity) + N''天''
 END) AS Term,

/*use english name as code*/
(SELECT english_name
 FROM vav.Localization
 WHERE (table_name = ''BondTerm'') AND 
       (table_cd = (
		CASE WHEN ROUND(issInfo.orig_avg_life, 0, 1) > 10 
				THEN 10 
			 WHEN ROUND(issInfo.orig_avg_life, 0, 1) <= 10
				THEN ROUND(issInfo.orig_avg_life, 0, 1)
			 WHEN issInfo.orig_avg_life IS NULL
				THEN CASE WHEN ROUND(issInfo.term_to_maturity/365, 0, 1) > 10
							THEN 10
						  WHEN ROUND(issInfo.term_to_maturity/365, 0, 1) <= 10
							THEN ROUND(issInfo.term_to_maturity/365, 0, 1)
						  WHEN issInfo.term_to_maturity IS NULL
							THEN 11
					 END
		END
))) AS BondTermCd,

(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''BondTerm'') AND 
       (table_cd = (
		CASE WHEN ROUND(issInfo.orig_avg_life, 0, 1) > 10 
				THEN 10 
			 WHEN ROUND(issInfo.orig_avg_life, 0, 1) <= 10
				THEN ROUND(issInfo.orig_avg_life, 0, 1)
			 WHEN issInfo.orig_avg_life IS NULL
				THEN CASE WHEN ROUND(issInfo.term_to_maturity/365, 0, 1) > 10
							THEN 10
						  WHEN ROUND(issInfo.term_to_maturity/365, 0, 1) <= 10
							THEN ROUND(issInfo.term_to_maturity/365, 0, 1)
						  WHEN issInfo.term_to_maturity IS NULL
							THEN 11
					 END
		END
))) AS BondTerm,

--the below 4 fileds for vav.v_bondview_full
(CASE WHEN issInfo.orig_avg_life >= 1 THEN issInfo.orig_avg_life 
	  ELSE issInfo.term_to_maturity 
 END) AS OrigTerm, 
issInfo.orig_avg_life AS OrigAvgLife,
(CASE WHEN ROUND(issInfo.orig_avg_life, 0, 1) > 10 THEN 10 
      ELSE ROUND(issInfo.orig_avg_life, 0, 1) 
 END) AS BondTermNumber,
(CASE WHEN rtrim(asset.cpn_class_cd) = ''DSC'' THEN issInfo.orig_yld_maturity 
	  ELSE asset.current_cpn 
 END) AS Yield,
 asset.isin_nm AS IsinNum,
 asset.day_count_cd AS DayCountCd,
issInfo.orig_iss_curr_cd AS OrigIssCurrCd,
(SELECT float_fl
 FROM ejv.[gcodes.coupon_type_cds] AS egctcd
 WHERE (coupon_type_cd = asset.cpn_type_cd)) AS Isfloat,
 
(CASE WHEN asset2.cdc_asset_class_cd = '''' THEN ''OTH''
	  WHEN asset2.cdc_asset_class_cd IS NULL THEN  ''OTH''
	  ELSE asset2.cdc_asset_class_cd
 END
) AS BondClassCd,
ISNULL((SELECT chinese_name
 FROM  vav.Localization
 WHERE (table_name = ''gcodes.cdc_asset_class_cds'') AND (table_cd = asset2.cdc_asset_class_cd)), N''其它'') AS BondClassDescr,

(CASE WHEN asset.put_terms_fl = ''y'' 
		THEN ''puttable''
	  WHEN asset.call_terms_fl = ''y''
		THEN ''callable''
	  ELSE ''none''
 END) AS [Option],
 
(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''option'') AND 
       (table_cd = (
		  CASE WHEN asset.put_terms_fl = ''y'' 
			THEN ''puttable''
		  WHEN asset.call_terms_fl = ''y''
			THEN ''callable''
		  ELSE ''none''
		 END))
 ) AS OptionDescr,
 
asset.cpn_class_cd AS CouponClassCd,
(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''gcodes.coupon_class_cds'') AND (table_cd = asset.cpn_class_cd)) AS CouponClassDescr,

CASE WHEN asset.pay_freq_cd IS NULL THEN 0 ELSE asset.pay_freq_cd END AS PayFrequencyCd,
(SELECT chinese_name
 FROM vav.Localization
 WHERE  (table_name = ''gcodes.freq_cds'') AND (table_cd =(CASE WHEN asset.pay_freq_cd IS NULL THEN 0 ELSE asset.pay_freq_cd END))) AS PayFrequency,

asset2.announcement_dt AS AnnoucementDate,
asset.orig_dated_dt AS OrigDatedDate,
asset.maturity_dt AS MaturityDate,
(SELECT TOP (1) listing_dt
 FROM ejv.[govcorp.asset_exchanges] AS assExchange
 WHERE (asset_id = asset.assetId) AND (listing_dt IS NOT NULL) AND (exch_cd IN(''CFS'', ''SHH'', ''SHZ''))
 ORDER BY exch_cd
) AS ListingDate,

asset.float_index AS FloatIndex,
(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''float_index'') AND (table_cd = asset.float_index)) AS FloatIndexDescr,
			
asset.float_offset AS FloatOffset,

rating.rating_cd AS RatingCd,
rating.rating_agency_cd AS RatingSrcCd,
(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''gcodes.rating_agency_cds'') AND (table_cd = rating.rating_agency_cd)) AS RatingSrcDescr,

newListBondInfo.lastPrice AS FirstDayClosingPrice,
100 * (newListBondInfo.lastPrice - issInfo.orig_iss_px) / NULLIF(issInfo.orig_iss_px, 0) AS FirstDayChange,
(newListBondInfo.accumulatedVolumn / 100000000) AS FirstDayVolume,
100 * (newListBondInfo.accumulatedVolumn / 1000) / NULLIF(issInfo.orig_iss_amt, 0) AS FirstDayTurnoverRate,

partyRating.rating_cd AS PartyRatingCd,
partyRating.rating_agency_cd AS PartyRatingSrcCd,
(SELECT chinese_name
 FROM vav.Localization
 WHERE (table_name = ''gcodes.rating_agency_cds'') AND (table_cd = partyRating.rating_agency_cd)) AS PartyRatingSrcDescr,
ISNULL(NULLIF(ejvBond.issuer_longname, ''''), issInfo.offer_registrant_name) AS Issuer,
ejvBond.bookmanager AS BookManager,
ejvBond.lead_undwrt AS LeadUnderWriter,
ejvBond.co_undwrt AS CoUnderWriter,
ejvBond.undwrt_member AS UnderWriterMember,
ejvBond.paydate AS PayDate,
ISNULL(NULLIF(ejvBond.longname, ''''),  asset.descr) AS BondName,

assDbsXref.status_on_liquidation AS StatusOnLiqCd,
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''gcodes.dbs_stat_on_liq_cds'') AND (table_cd = assDbsXref.status_on_liquidation)) AS StatusOnLiqDescr,
 
(SELECT (SELECT list = STUFF(
			(SELECT '','' + asi.id_number
			 FROM ejv.[govcorp.asset_ident] AS asi
			 WHERE asi.assetId = asset.assetId AND asi.id_cd IN(''CHN'',''SHZ'',''SHG'',''LOC'')
			 FOR XML PATH('''')) 
			 ,1 
			 ,1
			 , '''' ))) AS CodeList,

party.indu_sector_cd AS IssuerInduSectorCd,
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''gcodes.indu_sector_cds'') AND (table_cd = party.indu_sector_cd)) AS IssuerInduSectorDescr,
party.indu_subsector_cd AS IssuerInduSubSectorCd,
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''gcodes.indu_subsector_cds'') AND (table_cd = party.indu_subsector_cd)) AS IssuerInduSubSectorDescr,
 
assEnhance.party_short_name AS GuarantorName,
assEnhance.indu_sector_cd AS GuarantorInduSectorCd,
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''gcodes.indu_sector_cds'') AND (table_cd = assEnhance.indu_sector_cd)) AS GuarantorInduSectorDescr,

ejvBond.enddate_issue AS EndDateOfIssue,
issInfo.secoff_char AS IssueTypeCd,
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''gcodes.secoff_cds'') AND (table_cd = issInfo.secoff_char)) AS IssueTypeDescr,
 
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''BidType'') AND (table_cd = ejvBond.bid_type)) AS AuctionType,
 
assAuction.auction_dt AS AuctionDate,
assAuction.total_applied_for AS TotalAppliedFor,

asset2.seniority_cd AS SeniorityCd,
(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''gcodes.seniority_cds'') AND (table_cd = asset2.seniority_cd)) AS SeniorityDescr,

(CASE WHEN issInfo.use_of_proceeds = ''MD'' THEN ''Y''
	  ELSE ''N''
END) AS CIBondFlag,

(CASE WHEN issInfo.use_of_proceeds = ''MD'' THEN N''是''
	  ELSE N''否''
END) AS CIBondFlagDescr,

(CASE WHEN issInfo.instrument_type_cd=''CNCORP'' THEN ''CNCORP''
	  WHEN issInfo.instrument_type_cd=''CNENTERP'' THEN ''CNENTERP''
	  WHEN issInfo.instrument_type_cd=''CDBCRP'' THEN ''CDBCRP''
	  WHEN issInfo.instrument_type_cd=''CNSMEPPB'' THEN ''CNSMEPPB''
	  ELSE ''Oth''
END) AS OthBondTypeCd,

(CASE WHEN issInfo.instrument_type_cd=''CNCORP'' THEN N''公司债''
	  WHEN issInfo.instrument_type_cd=''CNENTERP'' THEN N''企业债''
	  WHEN issInfo.instrument_type_cd=''CDBCRP'' THEN N''同业存单''
	  WHEN issInfo.instrument_type_cd=''CNSMEPPB'' THEN N''私幕债''
	  ELSE N''其它''
END) AS OthBondTypeDescr,

(CASE WHEN asset.tap_issue_fl = ''n'' 
	  THEN N''否''
	  WHEN asset.tap_issue_fl = ''y''
	  THEN N''是'' 
END) AS TapIssueFlag,

ejvBond.term_ex AS TermEx,
ejvBond.item_ex AS ItermEx,
ejvBond.province_issuer AS ProvinceOfIssuer,
ejvBond.guarantor_rating AS GuarantorRating,

(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''BidObject'') AND (table_cd = ejvBond.bid_object)) AS AuctionOject,

ejvBond.guarantor_item AS GuarantorItem,

(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''UndwrType'') AND (table_cd = ejvBond.undwrt_type)) AS UnderWriterType,

ejvBond.bid_price AS BidPrice,
ejvBond.bid_region AS BidRegion,
(case when asset.sec_class_cd in (''DSUM'',''FORM'') then  assAuction.bid_to_cover_ratio
	else ejvBond.multiple_purchase end) AS MultiPurchase,

ejvBond.fee_rate AS FeeRate,
ejvBond.online_position AS OnlinePosition,
ejvBond.online_code AS OnlineCode,
ejvBond.domicile AS Domicile,

(CASE WHEN asset.debt_type_cd = ''CDBCRP''
	  THEN ''CDBCRP''
	  ELSE ''NCDBCRP''
END) AS DebtTypeCd,

(CASE WHEN asset.debt_type_cd = ''CDBCRP''
	  THEN N''存款证''
	  ELSE N''债券''
END) AS DebtTypeDescr,

(CASE WHEN asset.asset_type_cd = ''CORP''
	  THEN ''Cor''
	  WHEN asset.asset_type_cd = ''SOVR'' AND asset.sovr_class_cd = ''GOVT''
	  THEN ''Gov''
	  WHEN asset.asset_type_cd = ''SOVR'' AND asset.sovr_class_cd = ''AGNC''
	  THEN ''Agen''
	  ELSE ''OTH''
END) AS AssetTypeCd,

(CASE WHEN asset.asset_type_cd = ''CORP''
	  THEN N''公司债''
	  WHEN asset.asset_type_cd = ''SOVR'' AND asset.sovr_class_cd = ''GOVT''
	  THEN N''政府债''
	  WHEN asset.asset_type_cd = ''SOVR'' AND asset.sovr_class_cd = ''AGNC''
	  THEN N''机构债''
	  ELSE N''其它''
END) AS AssetTypeDescr,

(CASE WHEN country.cntry_cd IN (''CNA'', ''HK'', ''TAI'', ''JAP'', ''KOR'', ''USA'', ''GRM'', ''FRN'', ''UK'', ''LUX'')
      THEN country.cntry_cd
      WHEN country.cntry_cd NOT IN (''CNA'', ''HK'', ''TAI'', ''JAP'', ''KOR'') AND country.global_region_cd = ''A''
      THEN ''OTHASIA''
      WHEN country.global_region_cd = ''E''
      THEN ''OTHEURO''
      ELSE ''OTH''
END) AS PartyCntryIncorpCd,

(SELECT chinese_name
FROM vav.Localization
WHERE (table_name = ''country'') AND 
      (table_cd = (CASE WHEN country.cntry_cd IN (''CNA'', ''HK'', ''TAI'', ''JAP'', ''KOR'', ''USA'', ''GRM'', ''FRN'', ''UK'', ''LUX'')
      THEN country.cntry_cd
      WHEN country.cntry_cd NOT IN (''CNA'', ''HK'', ''TAI'', ''JAP'', ''KOR'') AND country.global_region_cd = ''A''
      THEN ''OTHASIA''
      WHEN country.global_region_cd = ''E''
      THEN ''OTHEURO''
      ELSE ''OTH''
END))) AS PartyCntryIncorpDescr,

ISNULL((SELECT chinese_name
FROM vav.Localization
WHERE table_name = ''country'' AND table_cd = country.cntry_cd), country.cntry_cd) AS IssuerDomicile,

(CASE WHEN asset.latest_rating_cd = '''' OR asset.latest_rating_cd is null
	  THEN ''N''
	  ELSE ''Y''
END) AS RatingInfoCd,

(CASE WHEN asset.latest_rating_cd = '''' OR asset.latest_rating_cd is null
	  THEN N''无评级''
	  ELSE N''有评级'' 
END) AS RatingInfo,

asset.sec_class_cd AS SecClassCd,
(CASE 
	WHEN asset.asset_last_chg_dt >= ISNULL(ejvBond.lastupdate, ''1900-01-01'') THEN
		CASE
			WHEN ISNULL(newListBondInfo.CreDate, ''1900-01-01'') >= asset.asset_last_chg_dt THEN newListBondInfo.CreDate
			ELSE asset.asset_last_chg_dt
		END 
	ELSE 
		CASE 
			WHEN ISNULL(newListBondInfo.CreDate, ''1900-01-01'') >= ISNULL(ejvBond.lastupdate, ''1900-01-01'') THEN newListBondInfo.CreDate
			ELSE ejvBond.lastupdate
		END
END) AS LastChangeDate,

assIt1.id_number AS BondRatingHist, --use bond code as the link for bond hist
assIt1.id_number AS BondIssuerRating, --
asset.amt_iss_tot AS AmtIssTot,
vav.ProvinceMapping.ProvinceOrder,

ISNULL(NULLIF((SELECT (SELECT list = STUFF(
			(SELECT '','' + exchange.exch_cd 
			 FROM ejv.[govcorp.asset_exchanges] AS exchange
			 WHERE exchange.asset_id = asset.assetId
			 FOR XML PATH('''')) 
			 ,1 
			 ,1
			 , '''' ))), ''''), N''OTH'') AS ExchangeCode,

ISNULL(NULLIF((SELECT (SELECT list = STUFF(
			(SELECT '','' + ( CASE exchange.exch_cd WHEN ''SHH'' THEN N''上海交易所'' WHEN ''SHZ'' THEN N''深圳交易所'' WHEN ''CFS'' THEN N''银行间'' ELSE N'''' END)
			 FROM ejv.[govcorp.asset_exchanges] AS exchange
			 WHERE exchange.asset_id = asset.assetId
			 FOR XML PATH('''')) 
			 ,1 
			 ,1
			 , '''' ))), ''''), N''其它'')  AS ExchangeName,
			 
ISNULL(NULLIF((SELECT (SELECT list = STUFF(
			(SELECT '','' + branch.branch_id
			 FROM ejv.[govcorp.branch] AS branch
			 LEFT JOIN ejv.[govcorp.trustee_xref] xref ON branch.branch_id = xref.branch_id
			 WHERE xref.asset_id = asset.assetId
			 FOR XML PATH('''')) 
			 ,1 
			 ,1
			 , '''' ))), ''''), N''OTH'')  AS TrusteeCode,

ISNULL(NULLIF((SELECT (SELECT list = STUFF(
			(SELECT '','' + ( CASE branch.branch_id WHEN ''00038600074336f7'' THEN N''中债登'' WHEN ''0003860028b56a72'' THEN N''中证登-上海'' WHEN ''0003860074798e06'' THEN N''中证登-深圳'' WHEN ''000405048503098a'' THEN N''上清所'' ELSE N'''' END)
			 FROM ejv.[govcorp.branch] AS branch
			 LEFT JOIN ejv.[govcorp.trustee_xref] xref ON branch.branch_id = xref.branch_id
			 WHERE xref.asset_id = asset.assetId
			 FOR XML PATH('''')) 
			 ,1 
			 ,1
			 , '''' ))), ''''), N''其它'')  AS TrusteeName

FROM ejv.[govcorp.asset] AS asset
LEFT JOIN ejv.[govcorp.asset2] AS asset2 ON asset.assetId = asset2.asset_id
LEFT JOIN ejv.[govcorp.asset_ident] AS assIt2 ON asset.assetId = assIt2.assetId AND assIt2.id_cd = ''PYC''
LEFT JOIN ejv.[EjvBond] AS ejvBond ON asset.assetId = ejvBond.asset_id
LEFT JOIN (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.assetId ORDER BY t.id_cd),t.* FROM ejv.[govcorp.asset_ident] t WHERE t.id_cd IN (''SHG'', ''SHZ'', ''SHC'', ''CHN'', ''LOC'')) i --User the latest rating agency cd
		   WHERE i.RowNumber = 1) AS assIt1 ON asset.assetId = assIt1.assetId
LEFT JOIN ejv.[govcorp.orig_iss_info] AS issInfo ON asset.assetId = issInfo.asset_id
LEFT JOIN (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.BondLocalId ORDER BY t.valueDate DESC),t.* FROM vav.[NewListedBonds] t) i 
		   WHERE i.RowNumber = 1) AS newListBondInfo ON assIt1.id_number = newListBondInfo.BondLocalId and asset.maturity_dt = newListBondInfo.maturityDate
LEFT JOIN (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.asset_id ORDER BY t.id_value DESC),t.* FROM ejv.[govcorp.asset_ric] t WHERE t.id_type_cd = ''RIC'' AND LEFT(t.id_value, 2) = ''CN'') i --Use the latest rating ric
		   WHERE i.RowNumber = 1) AS assRic ON asset.assetId = assRic.asset_id
LEFT JOIN (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.assetId ORDER BY t.rating_eff_dt DESC),t.* FROM [vav].[v_rating] t) i --Use the latest rating cd
		   WHERE i.RowNumber = 1) AS rating ON asset.assetId = rating.assetId
LEFT JOIN (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.partyid ORDER BY t.rating_eff_dt DESC),t.* FROM [vav].[v_party_rating] t) i --User the latest rating agency cd
		   WHERE i.RowNumber = 1) AS partyRating ON asset.issuerId = partyRating.partyId
LEFT JOIN ejv.[govcorp.asset_dbs_xref] assDbsXref ON asset.assetId = assDbsXref.asset_id
LEFT JOIN ejv.[govcorp.party] party ON asset.issuerId = party.partyId
LEFT JOIN (SELECT e.assetId, p.party_short_name, p.indu_sector_cd 
		   FROM (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.assetId ORDER BY t.enhance_eff_dt DESC),t.* FROM ejv.[govcorp.enhancements] t) i WHERE i.RowNumber = 1) AS e 
		   JOIN ejv.[govcorp.party] AS p ON e.guarantor_id = p.partyId
		  ) AS assEnhance ON asset.assetId = assEnhance.assetId
LEFT JOIN (SELECT i.* FROM (SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.assetId ORDER BY t.auction_dt DESC), t.* FROM ejv.[govcorp.govt_auction] t) i --User the latest auction
		   WHERE i.RowNumber = 1) AS assAuction ON asset.assetId = assAuction.assetId
JOIN ejv.[gcodes.cntry_cds] country on party.party_cntry_incorp_cd = country.iso_scntry_cd
LEFT JOIN vav.ProvinceMapping on ltrim(ejvBond.province_issuer) = Province_CN


' 
GO
