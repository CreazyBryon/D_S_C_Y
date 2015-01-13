﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[LufaxCategory]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[LufaxCategory](
	[Id] [int] NOT NULL,
	[Category] [nvarchar](30) NOT NULL
) ON [PRIMARY]
END
GO
