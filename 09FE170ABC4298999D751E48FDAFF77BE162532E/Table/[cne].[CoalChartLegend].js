﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[CoalChartLegend]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[CoalChartLegend](
	[ReportID] [int] NOT NULL,
	[ChartSQL] [nvarchar](max) NOT NULL,
	[Unit] [nvarchar](50) NOT NULL,
	[Legend] [nvarchar](100) NOT NULL,
	[ChartYLabel_CN] [nvarchar](100) NULL,
	[ChartYLabel_EN] [nvarchar](100) NULL,
	[ChartTitle_CN] [nvarchar](100) NULL,
	[ChartTitle_EN] [nvarchar](100) NULL,
 CONSTRAINT [PK_CoalChartLegend_1] PRIMARY KEY CLUSTERED 
(
	[ReportID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
