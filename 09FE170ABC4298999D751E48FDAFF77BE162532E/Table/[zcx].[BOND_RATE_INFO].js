﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[zcx].[BOND_RATE_INFO]') AND type in (N'U'))
BEGIN
CREATE TABLE [zcx].[BOND_RATE_INFO](
	[ID] [bigint] NOT NULL,
	[ISVALID] [int] NULL,
	[CCXEID] [datetime] NULL,
	[BOND_ID] [bigint] NULL,
	[RATE_TYPE_PAR] [int] NULL,
	[IS_SEGM_PAR] [int] NULL,
	[INTE_PAY_CLS_PAR] [int] NULL,
	[INTE_PAY_FREQ] [int] NULL,
	[INTE_CALCU_CLS_PAR] [int] NULL,
	[REPAY_CLS_PAY_PAR] [int] NULL,
	[SIMP_COMP_INTE_PAR] [int] NULL,
	[INTE_START_DATE] [nvarchar](19) NULL,
	[ACTU_END_DATE] [nvarchar](19) NULL,
	[THEO_END_DATE] [nvarchar](19) NULL,
	[YEAR_PAY_DATE] [nvarchar](40) NULL,
	[FIR_PAY_DATE] [nvarchar](19) NULL,
	[ISS_COUP_RATE] [decimal](7, 4) NULL,
	[BASE_RATE_PAR] [int] NULL,
	[INIT_BASE_RATE_DATE] [nvarchar](19) NULL,
	[BASE_RATE] [decimal](7, 4) NULL,
	[BAS_SPR] [decimal](7, 4) NULL,
	[OPT_EXTRA_SPR] [decimal](7, 4) NULL,
	[EXTRA_SPR_SEQ_NUM] [int] NULL,
	[RATE_CEIL] [decimal](7, 4) NULL,
	[RATE_FLOOR] [decimal](7, 4) NULL,
	[IS_INTE_COMP_PAR] [int] NULL,
	[COMP_RATE] [decimal](7, 4) NULL,
	[YTM_INTE_COMP] [decimal](7, 4) NULL,
	[REF_YIELD] [decimal](9, 4) NULL,
	[YEAR_PAY_MATU] [nvarchar](300) NULL,
	[MATU_PAY_DATE] [nvarchar](19) NULL,
	[EXER_PAY_DATE] [nvarchar](400) NULL,
	[PAY_FEE_RATE] [decimal](18, 4) NULL,
	[PAY_CLS_DES] [nvarchar](2000) NULL,
	[PAY_MATU] [nvarchar](300) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF__BOND_RATE__CCXEI__7B663F43]') AND type = 'D')
BEGIN
ALTER TABLE [zcx].[BOND_RATE_INFO] ADD  DEFAULT (getdate()) FOR [CCXEID]
END

GO
