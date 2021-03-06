﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[ChineseBondName]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[ChineseBondName](
	[assetId] [varchar](32) NOT NULL,
	[chinese_bond_name] [nvarchar](60) NULL,
PRIMARY KEY CLUSTERED 
(
	[assetId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
