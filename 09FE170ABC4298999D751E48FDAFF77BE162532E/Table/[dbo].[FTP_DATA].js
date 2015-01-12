SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[FTP_DATA]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[FTP_DATA](
	[data] [varbinary](max) NOT NULL
) ON [PRIMARY]
END
GO
