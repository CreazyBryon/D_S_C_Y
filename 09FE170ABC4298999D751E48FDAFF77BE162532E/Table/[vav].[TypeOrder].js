﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[TypeOrder]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[TypeOrder](
	[table_cd] [int] NOT NULL,
	[english_name] [varchar](100) NULL,
	[chinese_name] [nvarchar](100) NULL,
	[type] [int] NOT NULL
) ON [PRIMARY]
END
GO
