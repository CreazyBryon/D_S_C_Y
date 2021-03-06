﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[BondDepositoryBalanceBYBond]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[BondDepositoryBalanceBYBond](
	[date] [datetime] NOT NULL,
	[id] [int] NOT NULL,
	[end_month] [float] NULL,
	[increase_month] [float] NULL,
	[increase_year] [float] NULL,
	[end_last_year] [float] NULL,
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
