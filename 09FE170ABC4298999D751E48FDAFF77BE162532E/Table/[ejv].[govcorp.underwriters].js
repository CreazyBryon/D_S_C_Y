﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.underwriters]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.underwriters](
	[undwrt_id] [char](16) NOT NULL,
	[undwrt_cd] [varchar](8) NULL,
	[undwrt_long_name] [varchar](100) NULL,
	[undwrt_orgid] [varchar](10) NULL,
	[undwrt_setup_dt] [datetime] NULL
) ON [PRIMARY]
END
GO
