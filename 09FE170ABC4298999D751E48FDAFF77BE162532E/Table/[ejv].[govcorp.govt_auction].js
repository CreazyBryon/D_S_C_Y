﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.govt_auction]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.govt_auction](
	[announce_dt] [datetime] NOT NULL,
	[assetId] [char](16) NOT NULL,
	[auction_dt] [datetime] NOT NULL,
	[avg_be_yld] [float] NULL,
	[avg_disc_yld] [float] NULL,
	[avg_px] [float] NULL,
	[bid_received] [float] NULL,
	[bid_to_cover_ratio] [float] NULL,
	[bridge_symbol] [varchar](30) NULL,
	[cash_mgmt_bill_fl] [char](1) NULL,
	[ctl_bank_allot_amt] [float] NULL,
	[directbidder_bid_accepted] [float] NULL,
	[directbidder_bid_received] [float] NULL,
	[dutch_auction_fl] [char](1) NULL,
	[foreign_bid_accepted] [float] NULL,
	[foreign_bid_received] [float] NULL,
	[govt_symbol] [varchar](20) NULL,
	[high_be_yld] [float] NULL,
	[high_disc_yld] [float] NULL,
	[high_px] [float] NULL,
	[indirectbidder_bid_accepted] [float] NULL,
	[indirectbidder_bid_received] [float] NULL,
	[issue_dt] [datetime] NULL,
	[low_be_yld] [float] NULL,
	[low_disc_yld] [float] NULL,
	[low_px] [float] NULL,
	[noncompetitive] [float] NULL,
	[noncompetitive_bid_received] [float] NULL,
	[other_bid_accepted] [float] NULL,
	[other_bid_received] [float] NULL,
	[primarydealer_bid_accepted] [float] NULL,
	[primarydealer_bid_received] [float] NULL,
	[total_accepted] [float] NULL,
	[total_applied_for] [float] NULL,
	[total_comp_bid_accepted] [float] NULL,
	[total_comp_bid_received] [float] NULL,
	[wi_id] [char](16) NOT NULL,
	[wi_type_cd] [char](3) NULL
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_govcorp.govt_auction_cash_mgmt_bill_fl]') AND type = 'D')
BEGIN
ALTER TABLE [ejv].[govcorp.govt_auction] ADD  CONSTRAINT [DF_govcorp.govt_auction_cash_mgmt_bill_fl]  DEFAULT ('n') FOR [cash_mgmt_bill_fl]
END

GO
