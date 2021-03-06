﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[ProvinceMapping]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[ProvinceMapping](
	[Alias] [nvarchar](50) NULL,
	[ISO] [nvarchar](50) NULL,
	[Province_CN] [nvarchar](50) NULL,
	[Province_EN] [nvarchar](50) NULL,
	[Abbreviation] [nvarchar](50) NULL,
	[Capital] [nvarchar](50) NULL,
	[ProvinceOrder] [int] NULL
) ON [PRIMARY]
END
GO
