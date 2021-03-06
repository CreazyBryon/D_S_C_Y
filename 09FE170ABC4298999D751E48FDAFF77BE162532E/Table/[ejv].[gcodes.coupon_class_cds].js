﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.coupon_class_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.coupon_class_cds](
	[coupon_class_cd] [char](4) NOT NULL,
	[coupon_class_sdescr] [varchar](20) NULL,
	[coupon_class_descr] [varchar](40) NULL,
PRIMARY KEY CLUSTERED 
(
	[coupon_class_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
