﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[FundamentalFieldMapping]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[FundamentalFieldMapping](
	[id] [int] NOT NULL,
	[field_name] [varchar](50) NOT NULL,
	[fundamenatal_type] [varchar](50) NOT NULL,
	[mapping_name] [varchar](50) NOT NULL,
	[english_name] [varchar](100) NOT NULL,
	[chinese_name] [nvarchar](100) NOT NULL,
	[field_index] [int] NULL,
	[parent_id] [int] NULL,
	[is_parent] [int] NULL,
	[indent_level] [int] NULL
) ON [PRIMARY]
END
GO
