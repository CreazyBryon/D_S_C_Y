﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.asset_dbs_xref]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.asset_dbs_xref](
	[asset_id] [char](16) NOT NULL,
	[calendar_cd] [char](1) NULL,
	[capitalization_fl] [char](1) NULL,
	[clearing_code_fl] [char](1) NULL,
	[company_id] [char](6) NULL,
	[default_yield_type] [char](3) NULL,
	[holiday_cd] [char](3) NULL,
	[intx_fl] [char](1) NULL,
	[loan_type_cd] [char](3) NULL,
	[offer_type_cd] [char](1) NULL,
	[optional_identifier] [char](2) NULL,
	[send_to_dbs_fl] [char](1) NULL,
	[sia_exact] [char](1) NULL,
	[special_redemptions_fl] [char](1) NULL,
	[status_on_liquidation] [char](3) NULL,
	[issue_dt] [datetime] NULL,
	[current_cpn_nonannual] [float] NULL,
	[government_bond_type_cd] [varchar](6) NULL,
	[no_calc_note] [varchar](255) NULL,
	[org_issue_spread_underlying] [varchar](13) NULL
) ON [PRIMARY]
END
GO
