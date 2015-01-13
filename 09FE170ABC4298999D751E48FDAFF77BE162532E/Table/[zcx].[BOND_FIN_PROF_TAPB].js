﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[BOND_FIN_PROF_TAPB]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[BOND_FIN_PROF_TAPB](
	[ID] [bigint] NOT NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[COM_UNI_CODE] [bigint] NULL,
	[START_DATE] [nvarchar](19) NULL,
	[END_DATE] [nvarchar](19) NULL,
	[SHEET_MARK_PAR] [int] NULL,
	[SHEET_ATTR_PAR] [int] NULL,
	[PF_01] [decimal](20, 4) NULL,
	[PF_02] [decimal](20, 4) NULL,
	[PF_03] [decimal](20, 4) NULL,
	[PF_0301] [decimal](20, 4) NULL,
	[PF_0302] [decimal](20, 4) NULL,
	[PF_04] [decimal](20, 4) NULL,
	[PF_0401] [decimal](20, 4) NULL,
	[PF_0402] [decimal](20, 4) NULL,
	[PF_0403] [decimal](20, 4) NULL,
	[PF_0404] [decimal](20, 4) NULL,
	[PF_0405] [decimal](20, 4) NULL,
	[PF_05] [decimal](20, 4) NULL,
	[PF_06] [decimal](20, 4) NULL,
	[PF_0601] [decimal](20, 4) NULL,
	[PF_07] [decimal](20, 4) NULL,
	[PF_08] [decimal](20, 4) NULL,
	[PF_09] [decimal](20, 4) NULL,
	[PF_10] [decimal](20, 4) NULL,
	[PF_11] [decimal](20, 4) NULL,
	[PF_12] [decimal](20, 4) NULL,
	[PF_13] [decimal](20, 4) NULL,
	[PF_14] [decimal](20, 4) NULL,
	[PF_15] [decimal](20, 4) NULL,
	[PF_16] [decimal](20, 4) NULL,
	[PF_17] [decimal](20, 4) NULL,
	[PF_18] [decimal](20, 4) NULL,
	[PF_19] [decimal](20, 4) NULL,
	[PF_20] [decimal](20, 4) NULL,
	[PF_21] [decimal](20, 4) NULL,
	[PF_22] [decimal](20, 4) NULL,
	[PF_23] [decimal](20, 4) NULL,
	[PF_24] [decimal](20, 4) NULL,
	[PF_25] [decimal](20, 4) NULL,
	[PF_26] [decimal](20, 4) NULL,
	[PF_27] [decimal](20, 4) NULL,
	[PF_28] [decimal](20, 4) NULL,
	[PF_29] [decimal](20, 4) NULL,
	[PF_30] [decimal](20, 4) NULL,
	[PF_31] [decimal](20, 4) NULL,
	[PF_3101] [decimal](20, 4) NULL,
	[PF_32] [decimal](20, 4) NULL,
	[PF_33] [decimal](20, 4) NULL,
	[PF_34] [decimal](20, 4) NULL,
	[PF_35] [decimal](20, 4) NULL,
	[PF_3501] [decimal](20, 4) NULL,
	[PF_36] [decimal](20, 4) NULL,
	[PF_37] [decimal](20, 4) NULL,
	[PF_38] [decimal](20, 4) NULL,
	[PF_39] [decimal](20, 4) NULL,
	[PF_40] [decimal](20, 4) NULL,
	[PF_41] [decimal](20, 4) NULL,
	[PF_42] [decimal](20, 4) NULL,
	[PF_43] [decimal](20, 4) NULL,
	[PF_44] [decimal](20, 4) NULL,
	[PF_45] [decimal](20, 4) NULL,
	[PF_46] [decimal](20, 4) NULL,
	[PF_47] [decimal](20, 4) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__BOND_FIN___CCXEI__7889D298]') AND type = 'D')
BEGIN
ALTER TABLE [zcx].[BOND_FIN_PROF_TAPB] ADD  DEFAULT (getdate()) FOR [CCXEID]
END

GO
