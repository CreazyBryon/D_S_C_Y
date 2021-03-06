﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.cdc_asset_class_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.cdc_asset_class_cds](
	[cdc_asset_class_cd] [varchar](3) NOT NULL,
	[cdc_asset_class_descr] [varchar](40) NULL,
PRIMARY KEY CLUSTERED 
(
	[cdc_asset_class_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
