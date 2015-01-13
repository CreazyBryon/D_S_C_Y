﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.dbs_stat_on_liq_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.dbs_stat_on_liq_cds](
	[dbs_stat_on_liq_cd] [varchar](10) NULL,
	[dbs_stat_on_liq_descr] [varchar](50) NULL
) ON [PRIMARY]
END
GO
