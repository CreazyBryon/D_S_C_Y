﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[ChineseWeatherInfo]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[ChineseWeatherInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[province] [nvarchar](50) NULL,
	[air_temperature] [numeric](18, 2) NULL,
	[relative_humidity] [int] NULL,
	[precipitation] [numeric](18, 2) NULL,
	[wind_direction] [numeric](18, 2) NULL,
	[wind_force] [int] NULL,
	[end_date] [date] NULL,
	[last_update_date] [date] NULL,
 CONSTRAINT [PK_ChineseWeatherInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
