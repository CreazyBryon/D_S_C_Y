﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[RATE_ORG_CRED_HIS]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[RATE_ORG_CRED_HIS](
	[ID] [bigint] NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[COM_UNI_CODE] [bigint] NULL,
	[ORG_UNI_CODE] [bigint] NULL,
	[RATE_WRIT_DATE] [nvarchar](19) NULL,
	[RATE_PUBL_DATE] [nvarchar](19) NULL,
	[COM_TYPE_PAR] [int] NULL,
	[RATE_TYPE_PAR] [int] NULL,
	[RATE_CLS_PAR] [int] NULL,
	[ISS_CRED_LEVEL] [nvarchar](60) NULL,
	[ISS_CRED_LEVEL_PAR] [int] NULL,
	[ISS_CRED_LEVEL_EXP] [nvarchar](2000) NULL,
	[RATE_PROS_PAR] [int] NULL,
	[RATE_POINT] [nvarchar](3000) NULL,
	[CCE_ADVT] [nvarchar](4000) NULL,
	[RATE_ID] [bigint] NULL,
	[IS_NEW_RATE] [int] NULL
) ON [PRIMARY]
END
GO
