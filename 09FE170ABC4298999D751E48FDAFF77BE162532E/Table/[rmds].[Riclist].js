﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[rmds].[Riclist]') AND type in (N'U'))
BEGIN
CREATE TABLE [rmds].[Riclist](
	[RicListId] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[RIC] [char](20) NOT NULL,
	[Rictype] [char](20) NULL,
	[Ricdesc] [nvarchar](40) NULL,
	[Chain] [char](20) NULL,
	[ProdPermission] [int] NULL,
	[Updfrequency] [float] NULL,
	[Job] [float] NULL,
 CONSTRAINT [RicList_PK] PRIMARY KEY CLUSTERED 
(
	[RicListId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
