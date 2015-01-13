﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[CoalFilter]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[CoalFilter](
	[ID] [int] NOT NULL,
	[ReportID] [int] NOT NULL,
	[FilerSQL] [nvarchar](max) NULL,
	[IsPrimary] [bit] NOT NULL,
	[DefaultArg] [nvarchar](max) NULL,
	[Name_CN] [nvarchar](100) NULL,
	[Name_EN] [nvarchar](100) NULL,
	[FieldName] [nvarchar](100) NULL,
	[FilerSQL_EN] [nvarchar](max) NULL,
 CONSTRAINT [PK_CoalFilter] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_CoalFilter_IsPrimary]') AND type = 'D')
BEGIN
ALTER TABLE [cne].[CoalFilter] ADD  CONSTRAINT [DF_CoalFilter_IsPrimary]  DEFAULT ((1)) FOR [IsPrimary]
END

GO
