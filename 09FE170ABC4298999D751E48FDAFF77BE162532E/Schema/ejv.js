﻿IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'ejv')
EXEC sys.sp_executesql N'CREATE SCHEMA [ejv] AUTHORIZATION [dbo]'

GO
