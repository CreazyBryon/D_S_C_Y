﻿IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'zcx')
EXEC sys.sp_executesql N'CREATE SCHEMA [zcx] AUTHORIZATION [dbo]'

GO
