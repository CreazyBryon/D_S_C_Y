SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[gcodes.rating_agency_cds]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[gcodes.rating_agency_cds](
	[rating_agency_cd] [char](3) NOT NULL,
	[rating_agency_descr] [varchar](100) NULL,
	[rating_agency_url] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[rating_agency_cd] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
