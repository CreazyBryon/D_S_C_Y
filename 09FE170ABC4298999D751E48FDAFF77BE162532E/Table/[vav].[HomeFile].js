﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[HomeFile]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[HomeFile](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FileData] [varbinary](max) NOT NULL,
	[FileType] [nvarchar](20) NULL,
 CONSTRAINT [PK_HomeFile] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
