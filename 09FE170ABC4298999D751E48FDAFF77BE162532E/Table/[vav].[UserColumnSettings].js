SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[UserColumnSettings]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[UserColumnSettings](
	[UserID] [nvarchar](50) NOT NULL,
	[ReportID] [int] NOT NULL,
	[SettingName] [nvarchar](50) NOT NULL,
	[ColumnList] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_vav.UserColumnSettings] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC,
	[ReportID] ASC,
	[SettingName] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
