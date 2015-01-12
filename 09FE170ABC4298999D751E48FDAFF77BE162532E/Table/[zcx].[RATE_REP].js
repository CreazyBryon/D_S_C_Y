SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[RATE_REP]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[RATE_REP](
	[ID] [bigint] NOT NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[RATE_ID] [bigint] NULL,
	[RATE_WRIT_DATE] [nvarchar](19) NULL,
	[RATE_PUBL_DATE] [nvarchar](19) NULL,
	[ORG_UNI_CODE] [bigint] NULL,
	[RESER_NAME] [nvarchar](150) NULL,
	[RATE_TITLE] [nvarchar](200) NULL,
	[RATE_TYPE_PAR] [int] NULL,
	[RATE_PAG] [int] NULL,
	[RATE_FILE_SIZE] [bigint] NULL,
	[RATE_FILE_TYPE_PAR] [int] NULL,
	[RATE_FILE_PATH] [nvarchar](255) NULL,
	[ATT_PATH_MD5] [nvarchar](32) NULL
) ON [PRIMARY]
END
GO
