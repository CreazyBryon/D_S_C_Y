﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[HomeItem]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[HomeItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NameCn] [nvarchar](200) NULL,
	[NameEn] [nvarchar](200) NULL,
	[ModuleID] [int] NULL,
	[Type] [varchar](50) NULL,
	[TypeValue] [nvarchar](200) NULL,
	[IsValid] [bit] NULL,
	[TypeParam] [nvarchar](200) NULL,
	[DisplayOrder] [float] NULL,
	[Mtime] [datetime] NULL,
 CONSTRAINT [PK_HomeItem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[vav].[FK_HomeItem_HomeModule]') AND parent_object_id = OBJECT_ID(N'[vav].[HomeItem]'))
ALTER TABLE [vav].[HomeItem]  WITH CHECK ADD  CONSTRAINT [FK_HomeItem_HomeModule] FOREIGN KEY([ModuleID])
REFERENCES [HomeModule] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[vav].[FK_HomeItem_HomeModule]') AND parent_object_id = OBJECT_ID(N'[vav].[HomeItem]'))
ALTER TABLE [vav].[HomeItem] CHECK CONSTRAINT [FK_HomeItem_HomeModule]
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_HomeItem_IsValid]') AND type = 'D')
BEGIN
ALTER TABLE [vav].[HomeItem] ADD  CONSTRAINT [DF_HomeItem_IsValid]  DEFAULT ((1)) FOR [IsValid]
END

GO
