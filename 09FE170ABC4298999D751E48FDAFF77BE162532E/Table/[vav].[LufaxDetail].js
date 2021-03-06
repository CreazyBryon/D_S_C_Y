﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[LufaxDetail]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[LufaxDetail](
	[ChannelID] [bigint] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[VALUE] [nvarchar](max) NULL,
	[OrderId] [int] NULL,
	[CreateDate] [datetime] NULL
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__LufaxDeta__Creat__35FDC083]') AND type = 'D')
BEGIN
ALTER TABLE [vav].[LufaxDetail] ADD  DEFAULT (getdate()) FOR [CreateDate]
END

GO
