﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CashflowsInfo]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[CashflowsInfo](
	[BondID] [char](16) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[AnnualRate] [float] NULL,
	[CapitalPercent] [float] NOT NULL,
	[CapitalValue] [float] NOT NULL,
	[CouponPercentage] [float] NULL,
	[CouponValue] [float] NULL,
	[IsCoupon] [int] NOT NULL
) ON [PRIMARY]
END
GO
