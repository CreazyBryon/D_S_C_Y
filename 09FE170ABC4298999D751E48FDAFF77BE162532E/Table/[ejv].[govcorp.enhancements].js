﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.enhancements]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.enhancements](
	[assetId] [char](16) NOT NULL,
	[enhance_eff_dt] [datetime] NOT NULL,
	[addl_credit_type_cd] [char](4) NULL,
	[crs_dft_guarantor_fl] [char](1) NULL,
	[default_events_guar_fl] [char](1) NULL,
	[enhance_end_dt] [datetime] NULL,
	[enhance_leg_nm] [int] NOT NULL,
	[escrow_fl] [char](1) NULL,
	[guarantor_id] [char](16) NULL,
	[guarantor_program_cd] [char](6) NULL,
	[guarantor_type_cd] [char](4) NULL,
	[int_collat_pct] [float] NULL,
	[int_collat_type_cd] [varchar](5) NULL,
	[loc_expire_dt] [datetime] NULL,
	[neg_pldg_guarantor_fl] [char](1) NULL,
	[othr_cov_guarantor_fl] [char](1) NULL,
	[prin_collat_pct] [float] NULL,
	[prin_collat_type_cd] [varchar](5) NULL,
	[insurance_fl] [char](1) NULL,
	[guarantee_cd] [varchar](3) NULL
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_enhancements_insurance_fl]') AND type = 'D')
BEGIN
ALTER TABLE [ejv].[govcorp.enhancements] ADD  CONSTRAINT [DF_enhancements_insurance_fl]  DEFAULT ('n') FOR [insurance_fl]
END

GO
