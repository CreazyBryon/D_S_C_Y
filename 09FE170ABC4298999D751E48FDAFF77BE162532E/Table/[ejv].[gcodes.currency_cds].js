﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.currency_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.currency_cds](
	[currency_cd] [char](3) NOT NULL,
	[currency_descr] [varchar](40) NULL,
	[iso_cur_cd] [char](3) NULL,
	[iso_cur_descr] [varchar](40) NULL,
	[iso_cur_numeric] [int] NULL,
	[active_fl] [char](1) NULL,
	[cur_cd] [char](3) NULL,
	[factor] [float] NULL,
	[permid] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[currency_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
