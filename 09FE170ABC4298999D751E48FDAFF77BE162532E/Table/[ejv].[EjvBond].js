SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[EjvBond]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[EjvBond](
	[asset_id] [char](16) NOT NULL,
	[shortname] [nvarchar](30) NULL,
	[longname] [nvarchar](60) NULL,
	[enddate_issue] [datetime2](7) NULL,
	[paydate] [datetime2](7) NULL,
	[float_index] [nvarchar](20) NULL,
	[spread] [nvarchar](50) NULL,
	[issuer_shortname] [nvarchar](30) NULL,
	[issuer_longname] [nvarchar](60) NULL,
	[province_issuer] [nvarchar](20) NULL,
	[guarantor] [nvarchar](40) NULL,
	[guarantor_rating] [nvarchar](10) NULL,
	[guarantor_item] [nvarchar](2000) NULL,
	[lead_undwrt] [nvarchar](max) NULL,
	[co_undwrt] [nvarchar](max) NULL,
	[undwrt_member] [nvarchar](max) NULL,
	[undwrt_type] [char](1) NULL,
	[term_ex] [nvarchar](10) NULL,
	[item_ex] [nvarchar](2000) NULL,
	[use_capital] [nvarchar](2000) NULL,
	[bid_object] [nvarchar](20) NULL,
	[bid_type] [char](1) NULL,
	[bookmanager] [nvarchar](40) NULL,
	[bid_price] [float] NULL,
	[bid_region] [nvarchar](20) NULL,
	[multiple_purchase] [float] NULL,
	[fee_rate] [float] NULL,
	[online_position] [float] NULL,
	[online_code] [nvarchar](15) NULL,
	[domicile] [nvarchar](60) NULL,
	[local_rating] [nvarchar](10) NULL,
	[status] [int] NULL,
	[lastupdate] [datetime2](7) NULL,
	[city] [nvarchar](60) NULL,
 CONSTRAINT [PK_bond] PRIMARY KEY CLUSTERED 
(
	[asset_id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
