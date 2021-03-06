﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.party]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.party](
	[partyId] [char](32) NOT NULL,
	[active_fl] [char](1) NULL,
	[bankruptcy_fl] [char](1) NULL,
	[com_stock_cd] [varchar](20) NULL,
	[cur_form15_dt] [datetime] NULL,
	[cur_immed_parent_id] [char](16) NULL,
	[cur_ultimate_parent_id] [char](16) NULL,
	[dbs_cid] [char](6) NULL,
	[doc_report_entity_id] [char](16) NULL,
	[eusd_gov_rel_fl] [char](1) NULL,
	[financials_filed_fl] [char](1) NULL,
	[fiscal_yr_end] [char](5) NULL,
	[form15_fl] [char](1) NULL,
	[ibs_issuer_nm] [int] NULL,
	[indu_sector_cd] [varchar](8) NULL,
	[indu_subsector_cd] [char](4) NULL,
	[issuer_orgid] [varchar](10) NULL,
	[legal_counsel_id] [char](16) NULL,
	[mdy_issuer_rating_cd] [char](30) NULL,
	[mdy_issuer_rating_dt] [datetime] NULL,
	[mdy_issuer_watch_cd] [char](3) NULL,
	[mdy_issuer_watch_dt] [datetime] NULL,
	[orig_immed_parent_id] [char](16) NULL,
	[orig_ultimate_parent_id] [char](16) NULL,
	[party_address] [varchar](100) NULL,
	[party_bridge_symbol] [varchar](30) NULL,
	[party_city] [varchar](60) NULL,
	[party_cntry_cd] [char](2) NULL,
	[party_cntry_incorp_cd] [char](2) NULL,
	[party_general_alias_name] [varchar](255) NULL,
	[party_last_chg_dt] [datetime] NULL,
	[party_legal_name] [varchar](255) NULL,
	[party_long_name] [varchar](110) NULL,
	[party_native_long_name] [varchar](255) NULL,
	[party_native_short_name] [varchar](40) NULL,
	[party_phone_number] [varchar](20) NULL,
	[party_region] [varchar](80) NULL,
	[party_rtr_ticker] [varchar](6) NULL,
	[party_setup_dt] [datetime] NULL,
	[party_short_name] [varchar](40) NULL,
	[party_state_incorp] [varchar](80) NULL,
	[party_ticker] [varchar](15) NULL,
	[party_url] [varchar](100) NULL,
	[party_validated_dt] [datetime] NULL,
	[party_yr_incorp] [int] NULL,
	[party_zipcode] [varchar](10) NULL,
	[primary_naic_cd] [char](6) NULL,
	[primary_sic_cd] [char](4) NULL,
	[private_co_fl] [char](1) NULL,
	[sovr_class_cd] [char](4) NULL,
	[sp_indu_cd] [char](4) NULL,
	[sp_issuer_short_rating_cd] [char](30) NULL,
	[sp_issuer_short_rating_dt] [datetime] NULL,
	[sp_issuer_long_rating_cd] [char](30) NULL,
	[sp_issuer_long_rating_dt] [datetime] NULL,
	[sp_issuer_watch_cd] [char](3) NULL,
	[sp_issuer_watch_dt] [datetime] NULL,
	[stockval_nm] [int] NULL,
	[tax_struct_type_cd] [int] NULL,
	[oa_org_permid] [char](22) NULL,
PRIMARY KEY CLUSTERED 
(
	[partyId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
