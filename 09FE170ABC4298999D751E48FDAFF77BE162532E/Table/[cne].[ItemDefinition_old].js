﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[ItemDefinition_old]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[ItemDefinition_old](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[reportID] [int] NULL,
	[itemID] [int] NULL,
	[viewModelName1] [nvarchar](max) NULL,
	[viewModelName2] [nvarchar](max) NULL,
	[viewName1] [nvarchar](max) NULL,
	[viewName2] [nvarchar](max) NULL,
	[tableName1] [nvarchar](max) NULL,
	[tableFilter1] [nvarchar](255) NULL,
	[tableName2] [nvarchar](max) NULL,
	[tableFilter2] [nvarchar](255) NULL,
	[tabName_cn] [nvarchar](max) NULL,
	[tabName_en] [nvarchar](max) NULL,
	[chartSp1] [nvarchar](50) NULL,
	[chartSp2] [nvarchar](50) NULL,
	[tabOrder] [int] NULL,
	[isValid] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
