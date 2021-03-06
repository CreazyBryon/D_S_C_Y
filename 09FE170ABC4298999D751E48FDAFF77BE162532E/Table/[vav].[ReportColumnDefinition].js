﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[ReportColumnDefinition]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[ReportColumnDefinition](
	[report_id] [int] NOT NULL,
	[column_name] [nvarchar](50) NOT NULL,
	[header_text_en] [nvarchar](50) NULL,
	[header_text_cn] [nvarchar](50) NULL,
	[display_format] [nvarchar](50) NULL,
	[column_type] [nvarchar](50) NULL,
	[is_sortable] [bit] NULL,
	[column_index] [int] NULL,
	[column_style] [nvarchar](200) NULL,
	[is_detail_column] [bit] NULL
) ON [PRIMARY]
END
GO
