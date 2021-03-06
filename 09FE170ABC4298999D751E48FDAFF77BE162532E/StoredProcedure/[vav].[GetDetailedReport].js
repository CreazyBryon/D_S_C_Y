﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetDetailedReport]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'


-- =============================================
-- Author:		<qingwei.li>
-- Create date: <2013.2.1>
-- Description:	<2013.2.1>
-- =============================================
CREATE PROCEDURE [vav].[GetDetailedReport] (
	@ReportId int,
	@StartDate datetime = ''1900-01-01'',
	@EndDate datetime = ''1900-01-01'',
	@rowName varchar(32) = ''1'',
	@Culture varchar(10) = ''zh-CN''
	--@rowName nvarchar(50) = ''''
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
		
    -- Insert statements for procedure here
	DECLARE @sqlCommand nvarchar(1500)
	DECLARE @columnList nvarchar(1000)
	DECLARE @tableName nvarchar(50)
	DECLARE @displayName nvarchar(50)
	

	SELECT @columnList = ''a.*''--ISNULL(column_list, ''a.*'') from [vav].[ReportDefinition] where id = @ReportId
	SELECT @tableName = table_name from [vav].[ReportDefinition] where id = @ReportId
	
	IF @Culture = ''zh-CN''
		SET @displayName = ''b.[chinese_name]''
	ELSE
		SET @displayName = ''b.[english_name]''
	
	SET @sqlCommand =  ''SELECT DISTINCT '' + @columnList + '','' + @displayName + '' as ''''chinese_name'''' FROM [vav].['' +  @tableName + ''] a ''
						+ ''join [vav].[Localization] b on convert(varchar(32), [id]) = b.[table_cd]''
						+ '' and b.[table_name] = '''''' + @tableName + '''''' where ''
	
	IF @StartDate != ''1900-01-01'' and @EndDate != ''1900-01-01''
	BEGIN					
		SET @sqlCommand += '' a.[date] between '''''' + convert(varchar, @StartDate, 121) + '''''' and '''''' +  convert(varchar, @EndDate, 121) + ''''''''
	END
	ELSE
	BEGIN
		SET @sqlCommand += '' a.[date] between (SELECT DATEADD(yy, DATEDIFF(yy,0,CURRENT_TIMESTAMP), 0)) and (SELECT DATEADD(dd,0,DATEADD(mm, DATEDIFF(mm,0,CURRENT_TIMESTAMP),0)))''
	END
	
	--SET @sqlCommand += '' and b.chinese_name = N'''''' + @rowName + ''''''''
	--Change to use table_cd since it''s more accurate, could use both if needed in future.
	SET @sqlCommand += '' and b.table_cd = '' + @rowName
	
	--PRINT @sqlCommand
	
	EXEC (@sqlCommand)
END

' 
END
GO
