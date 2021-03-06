﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.document]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.document](
	[doc_id] [char](16) NOT NULL,
	[doc_fmt_cd] [char](3) NULL,
	[doc_repository_cd] [char](2) NOT NULL,
	[doc_type_cd] [char](6) NOT NULL,
	[eff_dt] [datetime] NULL,
	[end_dt] [datetime] NULL,
	[parent_doc_id] [char](16) NULL,
	[repository_docid] [varchar](30) NOT NULL,
	[doc_size] [int] NULL
) ON [PRIMARY]
END
GO
