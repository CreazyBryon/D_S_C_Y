SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[PUB_PAR]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[PUB_PAR](
	[ID] [bigint] NOT NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[PAR_SYS_CODE] [bigint] NULL,
	[PAR_SYS_NAME] [nvarchar](100) NULL,
	[PAR_CODE] [bigint] NULL,
	[PAR_NAME] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__PUB_PAR__CCXEID__011F1899]') AND type = 'D')
BEGIN
ALTER TABLE [zcx].[PUB_PAR] ADD  DEFAULT (getdate()) FOR [CCXEID]
END

GO
