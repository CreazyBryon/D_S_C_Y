﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.rating]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.rating](
	[assetId] [char](16) NOT NULL,
	[id_type] [char](1) NULL,
	[rating_src_cd] [char](3) NOT NULL,
	[outlook_cd] [varchar](15) NULL,
	[outlook_eff_dt] [datetime] NULL,
	[preliminary_fl] [char](1) NULL,
	[prev_rating_cd] [varchar](30) NULL,
	[prev_rating_dt] [datetime] NULL,
	[rating_cd] [varchar](30) NULL,
	[rating_eff_dt] [datetime] NULL,
	[rating_endorsement] [varchar](32) NULL,
	[rating_suffix_cd] [varchar](32) NULL,
	[unsolicited_fl] [char](1) NULL,
	[verified_dt] [datetime] NULL,
	[watch_cd] [varchar](15) NULL,
	[watch_eff_dt] [datetime] NULL
) ON [PRIMARY]
END
GO
