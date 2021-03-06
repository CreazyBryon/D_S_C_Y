﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[ReportDefinition]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[ReportDefinition](
	[id] [int] NOT NULL,
	[view_name] [varchar](50) NOT NULL,
	[table_name] [varchar](50) NOT NULL,
	[viewmodel_name] [varchar](255) NOT NULL,
	[column_list] [varchar](4000) NULL,
	[english_name] [varchar](100) NULL,
	[chinese_name] [nvarchar](100) NULL,
	[report_type] [varchar](50) NULL,
 CONSTRAINT [PK_ReportDefinition] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
