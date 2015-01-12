SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[Setting]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[Setting](
	[id] [int] NOT NULL,
	[setting_key] [varchar](50) NULL,
	[setting_value] [nvarchar](100) NULL
) ON [PRIMARY]
END
GO
