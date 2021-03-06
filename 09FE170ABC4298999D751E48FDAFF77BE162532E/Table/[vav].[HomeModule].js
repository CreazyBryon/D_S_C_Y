﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[HomeModule]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[HomeModule](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NameCn] [nvarchar](200) NULL,
	[NameEn] [nvarchar](200) NULL,
	[IsMain] [bit] NULL,
	[IsValid] [bit] NULL,
	[DisplayOrder] [float] NULL,
 CONSTRAINT [PK_vav.Module] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM ::fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'vav', N'TABLE',N'HomeModule', N'COLUMN',N'IsMain'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'display module in the main section when is true' , @level0type=N'SCHEMA',@level0name=N'vav', @level1type=N'TABLE',@level1name=N'HomeModule', @level2type=N'COLUMN',@level2name=N'IsMain'
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_vav.Module_Main]') AND type = 'D')
BEGIN
ALTER TABLE [vav].[HomeModule] ADD  CONSTRAINT [DF_vav.Module_Main]  DEFAULT ((1)) FOR [IsMain]
END

GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_vav.Module_IsValid]') AND type = 'D')
BEGIN
ALTER TABLE [vav].[HomeModule] ADD  CONSTRAINT [DF_vav.Module_IsValid]  DEFAULT ((1)) FOR [IsValid]
END

GO
