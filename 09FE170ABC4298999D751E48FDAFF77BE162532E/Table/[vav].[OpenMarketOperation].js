﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[OpenMarketOperation]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[OpenMarketOperation](
	[RIC] [varchar](30) NOT NULL,
	[shortName] [varchar](30) NULL,
	[issueDate] [datetime] NULL,
	[matDate] [datetime] NULL,
	[issueRate] [float] NULL,
	[issueVolume] [float] NULL,
	[issueYield] [float] NULL,
	[tuenoverVolume] [float] NULL,
	[CreDate] [datetime] NULL,
	[LastModifyDate] [datetime] NULL,
	[ProdPermission] [int] NULL,
	[OpenMarketOperationId] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL
) ON [PRIMARY]
END
GO
