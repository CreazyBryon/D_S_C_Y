﻿IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'scheduler')
EXEC sys.sp_executesql N'CREATE SCHEMA [scheduler] AUTHORIZATION [dbo]'

GO
