﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[HomeAnnouncement]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[HomeAnnouncement](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ContentEn] [nvarchar](max) NOT NULL,
	[ContentCn] [nvarchar](max) NOT NULL,
	[IsValid] [bit] NOT NULL,
 CONSTRAINT [PK_HomeAnnouncement] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_HomeAnnouncement_IsValid]') AND type = 'D')
BEGIN
ALTER TABLE [vav].[HomeAnnouncement] ADD  CONSTRAINT [DF_HomeAnnouncement_IsValid]  DEFAULT ((1)) FOR [IsValid]
END

GO
