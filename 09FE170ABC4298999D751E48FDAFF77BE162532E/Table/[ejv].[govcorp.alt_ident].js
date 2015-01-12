SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.alt_ident]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.alt_ident](
	[alt_cd] [char](2) NOT NULL,
	[alt_id] [char](15) NOT NULL,
	[asset_id] [char](16) NOT NULL
) ON [PRIMARY]
END
GO
