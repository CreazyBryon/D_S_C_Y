﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[SMM_StockInfoCN]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[SMM_StockInfoCN](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[vendor_id] [int] NULL,
	[product] [nvarchar](100) NULL,
	[quantity] [numeric](18, 2) NULL,
	[unit] [nvarchar](10) NULL,
	[region] [nvarchar](50) NULL,
	[comment] [nvarchar](200) NULL,
	[data_date] [date] NULL,
	[update_date] [date] NULL,
 CONSTRAINT [PK_SMM_StockInfoCN] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_SMM_StockInfoCN_vendor_id]') AND type = 'D')
BEGIN
ALTER TABLE [cne].[SMM_StockInfoCN] ADD  CONSTRAINT [DF_SMM_StockInfoCN_vendor_id]  DEFAULT ((3)) FOR [vendor_id]
END

GO
