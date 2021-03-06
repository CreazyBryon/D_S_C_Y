﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[vav].[v_bond_enhance_en]'))
EXEC dbo.sp_executesql @statement = N'











CREATE VIEW [vav].[v_bond_enhance_en]
AS
SELECT [AssetId]
      ,[Code]
      ,[Pyc]
      ,[Ric]
      ,[ShortName]
	  ,issDef.iss_dt AS IssueDate
	  ,issDef.iss_amt / 100000 AS IssueAmount
      ,[InterestRate]
      ,issDef.iss_px AS IssuePrice
      ,[IssueCountryCd]
      ,[IssueCountry]
      ,[Term]
      ,[BondTermCd]
      ,[BondTerm]
      ,[OrigTerm]
      ,[OrigAvgLife]
      ,[BondTermNumber]
      ,[Yield]
      ,[IsinNum]
      ,[DayCountCd]
      ,[OrigIssCurrCd]
      ,[Isfloat]
      ,[BondClassCd]
      ,[BondClassDescr]
      ,[Option]
      ,[OptionDescr]
      ,[CouponClassCd]
      ,[CouponClassDescr]
      ,[PayFrequencyCd]
      ,[PayFrequency]
      ,[AnnoucementDate]
      ,issDef.dated_dt AS OrigDatedDate
      ,[MaturityDate]
      ,CASE WHEN issDef.wi_type_cd = ''RPN'' THEN issDef.iss_dt ELSE bondEn.ListingDate END AS ListingDate
      ,CASE WHEN issDef.wi_type_cd = ''RPN'' THEN ''Additional Issuing'' ELSE '''' END AS IssueComment
      ,[FloatIndex]
      ,[FloatIndexDescr]
      ,[FloatOffset]
      ,[RatingCd]
      ,[RatingSrcCd]
      ,[RatingSrcDescr]
      ,[FirstDayClosingPrice]
      ,[FirstDayChange]
      ,[FirstDayVolume]
      ,[FirstDayTurnoverRate]
      ,[PartyRatingCd]
      ,[PartyRatingSrcCd]
      ,[PartyRatingSrcDescr]
      ,[Issuer]
      ,[BookManager]
      ,[LeadUnderWriter]
      ,[CoUnderWriter]
      ,[UnderWriterMember]
      ,[PayDate]
      ,[BondName]
      ,[StatusOnLiqCd]
      ,[StatusOnLiqDescr]
      ,[CodeList]
      ,[IssuerInduSectorCd]
      ,[IssuerInduSectorDescr]
      ,[IssuerInduSubSectorCd]
      ,[IssuerInduSubSectorDescr]
      ,[GuarantorName]
      ,[GuarantorInduSectorCd]
      ,[GuarantorInduSectorDescr]
      ,[EndDateOfIssue]
      ,[IssueTypeCd]
      ,[IssueTypeDescr]
      ,[AuctionType]
      ,[AuctionDate]
      ,[SeniorityCd]
      ,[SeniorityDescr]
      ,[CIBondFlag]
      ,[CIBondFlagDescr]
      ,[OthBondTypeCd]
      ,[OthBondTypeDescr]
      ,[TapIssueFlag]
      ,[TermEx]
      ,[ItermEx]
      ,[ProvinceOfIssuer]
      ,[GuarantorRating]
      ,[AuctionOject]
      ,[GuarantorItem]
      ,[UnderWriterType]
      ,[BidPrice]
      ,[BidRegion]
      ,[MultiPurchase]
      ,[FeeRate]
      ,[OnlinePosition]
      ,[OnlineCode]
      ,[Domicile]
      ,[DebtTypeCd]
      ,[DebtTypeDescr]
      ,[AssetTypeCd]
      ,[AssetTypeDescr]
      ,[PartyCntryIncorpCd]
      ,[PartyCntryIncorpDescr]
      ,[IssuerDomicile]
      ,[RatingInfoCd]
      ,[RatingInfo]
      ,[SecClassCd]
      ,[LastChangeDate]
      ,[BondRatingHist]
      ,[BondIssuerRating]
      ,[AmtIssTot] / 100000 as AmtIssTot
      ,ProvinceOrder
      ,ExchangeCode
      ,ExchangeName
      ,TrusteeCode
      ,TrusteeName
FROM vav.BondInfoEn AS bondEn
JOIN ejv.[govcorp.iss_def] AS issDef ON bondEn.AssetId = issDef.asset_id 

' 
GO
