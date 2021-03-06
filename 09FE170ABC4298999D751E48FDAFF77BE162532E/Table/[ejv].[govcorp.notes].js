﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.notes]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.notes](
	[assetId] [char](16) NOT NULL,
	[large_note] [text] NULL,
	[note] [varchar](255) NULL,
	[note_eff_dt] [datetime] NOT NULL,
	[note_type_cd] [char](5) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
