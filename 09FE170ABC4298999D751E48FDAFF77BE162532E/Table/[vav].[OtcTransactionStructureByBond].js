﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[OtcTransactionStructureByBond]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[OtcTransactionStructureByBond](
	[date] [datetime] NOT NULL,
	[id] [int] NOT NULL,
	[parvalue] [float] NULL,
	[buy] [float] NULL,
	[sell] [float] NULL,
	[transactions] [float] NULL,
	[parvalue_year] [float] NULL,
	[buy_year] [float] NULL,
	[sell_year] [float] NULL,
	[transactions_year] [float] NULL,
	[last_update] [datetime] NULL,
	[row_index] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[date] ASC,
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
