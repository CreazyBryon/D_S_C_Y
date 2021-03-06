﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.doc_obj_xref_asset]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.doc_obj_xref_asset](
	[doc_id] [char](16) NOT NULL,
	[asset_id] [char](16) NOT NULL,
	[obj_type_cd] [char](4) NOT NULL,
	[primary_fl] [char](1) NULL
) ON [PRIMARY]
END
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[DF_govcorp.doc_obj_xref_asset_primary_fl]') AND type = 'D')
BEGIN
ALTER TABLE [ejv].[govcorp.doc_obj_xref_asset] ADD  CONSTRAINT [DF_govcorp.doc_obj_xref_asset_primary_fl]  DEFAULT ('n') FOR [primary_fl]
END

GO
