SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.coupon_type_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.coupon_type_cds](
	[coupon_type_cd] [char](4) NOT NULL,
	[coupon_type_sdescr] [varchar](20) NULL,
	[coupon_type_descr] [varchar](40) NULL,
	[float_fl] [char](1) NULL,
PRIMARY KEY CLUSTERED 
(
	[coupon_type_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
