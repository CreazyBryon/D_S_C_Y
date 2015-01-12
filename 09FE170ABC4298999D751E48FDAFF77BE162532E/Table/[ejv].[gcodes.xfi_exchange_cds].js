SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.xfi_exchange_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.xfi_exchange_cds](
	[xfi_exchange_cd] [char](3) NOT NULL,
	[xfi_exchange_name] [varchar](40) NULL
) ON [PRIMARY]
END
GO
