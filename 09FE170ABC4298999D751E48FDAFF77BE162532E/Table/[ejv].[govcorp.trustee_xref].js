﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.trustee_xref]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.trustee_xref](
	[asset_id] [char](16) NOT NULL,
	[branch_id] [char](16) NOT NULL,
	[trustee_ranking_cd] [int] NULL
) ON [PRIMARY]
END
GO
