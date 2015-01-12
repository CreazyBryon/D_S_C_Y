SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.cntry_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.cntry_cds](
	[cntry_cd ] [nvarchar](255) NULL,
	[country_name] [nvarchar](255) NULL,
	[iso_scntry_cd] [nvarchar](255) NULL,
	[iso_lcntry_cd] [nvarchar](255) NULL,
	[iso_cntry_descr] [nvarchar](255) NULL,
	[iso_cntry_numeric] [float] NULL,
	[global_region_cd] [nvarchar](255) NULL,
	[active_fl] [nvarchar](255) NULL,
	[permid] [float] NULL,
	[cntry_id] [nvarchar](255) NULL
) ON [PRIMARY]
END
GO
