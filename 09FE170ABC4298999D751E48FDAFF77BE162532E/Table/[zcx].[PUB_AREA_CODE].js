SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[PUB_AREA_CODE]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[PUB_AREA_CODE](
	[ID] [bigint] NOT NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[AREA_UNI_CODE] [bigint] NULL,
	[AREA_TYPE_PAR] [int] NULL,
	[ADMI_LEVE_PAR] [int] NULL,
	[NAT_CODE] [nvarchar](20) NULL,
	[ISO_CODE_TWO] [nvarchar](2) NULL,
	[ISO_CODE_THR] [nvarchar](3) NULL,
	[AREA_CHI_NAME] [nvarchar](100) NULL,
	[AREA_CHI_SHORT_NAME] [nvarchar](50) NULL,
	[AREA_ENG_NAME] [nvarchar](100) NULL,
	[AREA_ENG_SHORT_NAME] [nvarchar](50) NULL,
	[TIME_DIFF] [decimal](5, 2) NULL,
	[POST_CODE] [nvarchar](10) NULL,
	[AREA_CODE] [nvarchar](10) NULL,
	[START_DATE] [nvarchar](19) NULL,
	[IS_VALID] [int] NULL,
	[DIS_DATE] [nvarchar](19) NULL,
	[SUB_UNI_CODE] [bigint] NULL,
	[AREA_UNI_CODE1] [bigint] NULL,
	[AREA_NAME1] [nvarchar](100) NULL,
	[AREA_UNI_CODE2] [bigint] NULL,
	[AREA_NAME2] [nvarchar](100) NULL,
	[AREA_UNI_CODE3] [bigint] NULL,
	[AREA_NAME3] [nvarchar](100) NULL,
	[AREA_UNI_CODE4] [bigint] NULL,
	[AREA_NAME4] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__PUB_AREA___CCXEI__7E42ABEE]') AND type = 'D')
BEGIN
ALTER TABLE [zcx].[PUB_AREA_CODE] ADD  DEFAULT (getdate()) FOR [CCXEID]
END

GO
