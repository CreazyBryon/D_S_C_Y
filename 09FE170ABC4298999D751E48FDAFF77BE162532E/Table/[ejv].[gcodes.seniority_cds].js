﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.seniority_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.seniority_cds](
	[seniority_cd] [char](8) NOT NULL,
	[seniority_descr] [varchar](60) NULL,
	[seniority_rank] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[seniority_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
