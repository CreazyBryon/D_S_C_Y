SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.underwriter_xref]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.underwriter_xref](
	[assetId] [char](16) NOT NULL,
	[num_of_shrs] [int] NULL,
	[undwrt_amt] [float] NULL,
	[undwrt_dt] [datetime] NOT NULL,
	[undwrt_id] [char](16) NOT NULL,
	[undwrt_ranking_cd] [char](2) NOT NULL
) ON [PRIMARY]
END
GO
