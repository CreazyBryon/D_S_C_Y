SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[MenuNodeLayout]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[MenuNodeLayout](
	[report_id] [int] NOT NULL,
	[node_id] [int] NOT NULL,
	[display_style] [varchar](10) NOT NULL
) ON [PRIMARY]
END
GO
