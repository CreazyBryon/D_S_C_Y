SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.indu_subsector_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.indu_subsector_cds](
	[indu_subsector_cd] [char](4) NOT NULL,
	[indu_sector_cd] [varchar](8) NOT NULL,
	[indu_subsector_descr] [varchar](40) NULL
) ON [PRIMARY]
END
GO
