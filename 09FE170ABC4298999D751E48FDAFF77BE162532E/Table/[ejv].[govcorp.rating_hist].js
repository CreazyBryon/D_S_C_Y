SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.rating_hist]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.rating_hist](
	[assetId] [char](16) NOT NULL,
	[id_type] [char](1) NULL,
	[rating_eff_dt] [datetime] NOT NULL,
	[rating_src_cd] [char](3) NOT NULL,
	[preliminary_fl] [char](1) NULL,
	[rating_cd] [varchar](30) NULL,
	[rating_endorsement] [varchar](32) NULL,
	[rating_suffix_cd] [varchar](32) NULL,
	[src_info_cd] [char](1) NULL,
	[unsolicited_fl] [char](1) NULL,
	[verified_dt] [datetime] NULL
) ON [PRIMARY]
END
GO
