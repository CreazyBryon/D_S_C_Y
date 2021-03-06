﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[QueryCondititon]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[QueryCondititon](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[itemID] [int] NOT NULL,
	[direction] [int] NOT NULL,
	[displayName_CN] [nvarchar](max) NULL,
	[displayName_EN] [nvarchar](max) NULL,
	[isValid] [int] NOT NULL,
	[relationColumn] [nvarchar](max) NULL,
	[queryOrder] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
