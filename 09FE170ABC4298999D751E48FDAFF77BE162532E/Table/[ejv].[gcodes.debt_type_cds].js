﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.debt_type_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.debt_type_cds](
	[debt_type_cd] [varchar](8) NOT NULL,
	[short_descr] [varchar](20) NOT NULL,
	[debt_type_descr] [varchar](60) NOT NULL
) ON [PRIMARY]
END
GO
