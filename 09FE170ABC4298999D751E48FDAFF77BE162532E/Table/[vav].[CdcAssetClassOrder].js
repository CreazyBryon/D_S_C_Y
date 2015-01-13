﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[CdcAssetClassOrder]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[CdcAssetClassOrder](
	[id] [int] NOT NULL,
	[cdc_asset_class_cd] [char](3) NOT NULL
) ON [PRIMARY]
END
GO
