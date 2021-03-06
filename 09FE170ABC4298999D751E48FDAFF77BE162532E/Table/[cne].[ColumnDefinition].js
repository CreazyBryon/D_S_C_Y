﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[ColumnDefinition]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[ColumnDefinition](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[itemID] [int] NULL,
	[direction] [int] NULL,
	[columnName_cn] [nvarchar](max) NULL,
	[columnName_en] [nvarchar](max) NULL,
	[header_cn] [nvarchar](max) NULL,
	[header_en] [nvarchar](max) NULL,
	[display_format] [nvarchar](max) NULL,
	[column_type] [nvarchar](max) NULL,
	[is_sort] [bit] NULL,
	[column_order] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__ColumnDef__direc__344A823B]') AND type = 'D')
BEGIN
ALTER TABLE [cne].[ColumnDefinition] ADD  DEFAULT ((0)) FOR [direction]
END

GO
