﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[NewListedBonds]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[NewListedBonds](
	[NewListedBondsId] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[RIC] [varchar](32) NOT NULL,
	[BondLocalId] [varchar](32) NULL,
	[BondLocalName] [nvarchar](100) NULL,
	[BondName] [nvarchar](100) NULL,
	[Market] [nvarchar](30) NULL,
	[currency] [varchar](20) NULL,
	[maturityDate] [datetime] NULL,
	[issueDate] [datetime] NULL,
	[issueAmount] [float] NULL,
	[issuePrice] [float] NULL,
	[valueDate] [datetime] NULL,
	[highPrice] [float] NULL,
	[lowPrice] [float] NULL,
	[closePrice] [float] NULL,
	[lastPrice] [float] NULL,
	[priceChange] [float] NULL,
	[yieldChange] [float] NULL,
	[accumulatedVolumn] [float] NULL,
	[CreDate] [datetime] NULL
) ON [PRIMARY]
END
GO
