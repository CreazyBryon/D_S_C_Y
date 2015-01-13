﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[PUB_ORG_INFO]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[PUB_ORG_INFO](
	[ID] [bigint] NOT NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[ORG_UNI_CODE] [bigint] NULL,
	[ORG_CHI_NAME] [nvarchar](200) NULL,
	[CHI_SHORT_NAME] [nvarchar](200) NULL,
	[ORG_ENG_NAME] [nvarchar](200) NULL,
	[ENG_SHORT_NAME] [nvarchar](50) NULL,
	[CHI_SPE_SHORT_NAME] [nvarchar](50) NULL,
	[REG_CAP] [decimal](24, 4) NULL,
	[CURY_TYPE_PAR] [int] NULL,
	[REG_ADDR] [nvarchar](240) NULL,
	[AREA_UNI_CODE] [bigint] NULL,
	[OFFI_ADDR] [nvarchar](240) NULL,
	[POST_CODE] [nvarchar](10) NULL,
	[COM_WEB] [nvarchar](60) NULL,
	[LEG_PER] [nvarchar](80) NULL,
	[GEN_MAN] [nvarchar](40) NULL,
	[ORG_CON_PER] [nvarchar](80) NULL,
	[ORG_TEL] [nvarchar](60) NULL,
	[ORG_FAX] [nvarchar](60) NULL,
	[ORG_MAIL_ADDR] [nvarchar](200) NULL,
	[ORG_EST_DATE] [nvarchar](10) NULL,
	[CUS_CON_TEL] [nvarchar](60) NULL,
	[ORG_STA_PAR] [int] NULL,
	[IC_REG_CODE] [nvarchar](60) NULL,
	[NAT_TAX_REG_CODE] [nvarchar](50) NULL,
	[LOC_TAX_REG_CODE] [nvarchar](50) NULL,
	[ORG_CLA_BIG_PAR] [bigint] NULL,
	[ORG_CLA_MID_PAR] [bigint] NULL,
	[ORG_CLA_SMA_PAR] [bigint] NULL,
	[ORG_ORGA_FORM_PAR] [int] NULL,
	[ORG_ABBR] [nvarchar](3000) NULL,
	[ORG_MAIN_BUSI] [ntext] NULL,
	[ORG_SID_BUSI] [ntext] NULL,
	[DIS_DATE] [nvarchar](19) NULL,
	[DIS_REAS] [nvarchar](3000) NULL,
	[ORG_LIST_PAR] [int] NULL,
	[IF_ISS_BOND] [int] NULL,
	[LIST_MKT] [int] NULL,
	[PARE_COM_CODE] [bigint] NULL,
	[TOP_ORG_CODE] [bigint] NULL,
	[HIGH_LEVEL_ORG_CODE] [bigint] NULL,
	[HIE_CODE] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__PUB_ORG_I__CCXEI__002AF460]') AND type = 'D')
BEGIN
ALTER TABLE [zcx].[PUB_ORG_INFO] ADD  DEFAULT (getdate()) FOR [CCXEID]
END

GO
