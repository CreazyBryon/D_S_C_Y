﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[ReportExtraHeaderDefinition]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[ReportExtraHeaderDefinition](
	[report_id] [int] NOT NULL,
	[extra_header_text_cn] [nvarchar](50) NOT NULL,
	[extra_header_text_en] [nvarchar](50) NOT NULL,
	[extra_header_column_span] [int] NOT NULL,
	[extra_header_level] [int] NOT NULL
) ON [PRIMARY]
END
GO
