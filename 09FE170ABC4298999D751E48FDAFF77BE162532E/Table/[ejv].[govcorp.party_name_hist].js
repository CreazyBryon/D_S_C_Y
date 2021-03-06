﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.party_name_hist]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.party_name_hist](
	[party_id] [char](32) NOT NULL,
	[hist_party_cntry_cd] [char](2) NULL,
	[hist_party_cntry_incorp_cd] [char](2) NULL,
	[name_eff_dt] [datetime] NOT NULL,
	[hist_general_alias_name] [varchar](255) NULL,
	[hist_legal_name] [varchar](255) NULL,
	[hist_long_name] [varchar](110) NULL,
	[hist_native_long_name] [varchar](255) NULL,
	[hist_native_short_name] [varchar](40) NULL,
	[hist_party_address] [varchar](100) NULL,
	[hist_party_city] [varchar](60) NULL,
	[hist_party_region] [varchar](80) NULL,
	[hist_party_rtr_ticker] [varchar](6) NULL,
	[hist_party_ticker] [varchar](15) NULL,
	[hist_party_zipcode] [varchar](10) NULL,
	[hist_phone_number] [varchar](20) NULL,
	[hist_short_name] [varchar](40) NULL,
	[hist_state_incorp] [varchar](80) NULL
) ON [PRIMARY]
END
GO
