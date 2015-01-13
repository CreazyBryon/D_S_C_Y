﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.asset_ric]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.asset_ric](
	[quote_id] [varchar](32) NOT NULL,
	[asset_id] [char](16) NOT NULL,
	[id_type] [char](1) NULL,
	[active_fl] [char](1) NULL,
	[currency_cd] [char](3) NULL,
	[idn_contrib_cd] [char](5) NULL,
	[pe] [smallint] NULL,
	[price_src_cd] [char](3) NULL,
	[id_scope_id] [varchar](32) NULL,
	[id_type_cd] [char](3) NOT NULL,
	[id_value] [varchar](40) NOT NULL,
	[id_upper] [varchar](40) NULL,
	[obj_type_cd] [char](4) NULL,
	[current_fl] [char](1) NULL,
 CONSTRAINT [Asset_Ric_PK] PRIMARY KEY CLUSTERED 
(
	[quote_id] ASC,
	[id_value] ASC,
	[id_type_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
