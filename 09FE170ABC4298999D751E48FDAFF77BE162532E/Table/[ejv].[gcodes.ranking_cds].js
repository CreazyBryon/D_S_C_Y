SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.ranking_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.ranking_cds](
	[ranking_cd] [char](2) NOT NULL,
	[ranking_descr] [varchar](40) NOT NULL,
	[rank] [int] NOT NULL
) ON [PRIMARY]
END
GO
