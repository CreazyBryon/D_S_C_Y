﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.rating_src_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.rating_src_cds](
	[rating_src_cd] [char](3) NULL,
	[rating_src_descr] [varchar](100) NULL,
	[rating_type_cd] [char](3) NULL,
	[rating_agency_cd] [char](3) NULL,
	[active_fl] [char](1) NULL
) ON [PRIMARY]
END
GO
