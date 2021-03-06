﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[VendorInfo]') AND type in (N'U'))
BEGIN
CREATE TABLE [cne].[VendorInfo](
	[id] [int] NOT NULL,
	[vendor_name_cn] [nvarchar](50) NULL,
	[vendor_name_en] [nvarchar](50) NULL,
	[web_address] [nvarchar](50) NULL,
	[address] [nvarchar](50) NULL,
	[contact] [nvarchar](20) NULL,
	[telephone] [nvarchar](20) NULL,
 CONSTRAINT [PK_VendorInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
