IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = N'cne')
EXEC sys.sp_executesql N'CREATE SCHEMA [cne] AUTHORIZATION [dbo]'

GO
