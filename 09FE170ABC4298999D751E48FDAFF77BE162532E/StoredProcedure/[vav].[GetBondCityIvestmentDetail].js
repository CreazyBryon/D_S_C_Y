﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetBondCityIvestmentDetail]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'


-- =============================================
-- Author:		<qingwei.li>
-- Create date: <2013.5.9>
-- Description:	<2013.5.9>
-- =============================================
CREATE PROCEDURE [vav].[GetBondCityIvestmentDetail] (
	@ProvinceValue nvarchar(30)=N''北京'',
	@StartDate datetime=''1900-01-01'', 
	@EndDate datetime=''1900-01-01'',
	@ColumnList nvarchar(max)='''',
	@CiBondFlag nvarchar(30)=''Y'',
	@IssOrMatFlag nvarchar(30)=''Y'', --get issued bond by default
	@Culture nvarchar(30)=''zh-CN''
	
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	DECLARE @sqlCommand nvarchar(max)
	DECLARE @replicator nvarchar(20)
	DECLARE @tableName nvarchar(30)
	
	IF @Culture = ''zh-CN''
		SET @tableName = ''vav.v_bond_enhance_cn''
	ELSE
		SET @tableName = ''vav.v_bond_enhance_en''
	
	IF (CHARINDEX(''[DayToList]'', @ColumnList) > 0)
		SET @replicator = ''[DayToList]''
	ELSE
		SET @replicator = ''DayToList''
		
	SET @sqlCommand =  ''SELECT '' + [vav].[ColumnPreprocess](@ColumnList) 
						+ REPLACE(@columnList, @replicator, ''DATEDIFF(day, GETDATE(), ListingDate) AS [DayToList]'') 
						+ '' FROM '' + @tableName + '' b '';
	if(isnull(@ProvinceValue,'''')='''')
	begin
		SET @sqlCommand = @sqlCommand + '' WHERE isnull(b.ProvinceOfIssuer,'''''''') <> '''''''' '' ;	 
	end
	else
	begin
		SET @sqlCommand = @sqlCommand + '' WHERE b.ProvinceOfIssuer = N'''''' + @ProvinceValue + '''''' '' ;	
	end
					
	IF @CiBondFlag = ''Y''
		SET @sqlCommand += '' AND b.CiBondFlag = ''''Y'''''' 
	ELSE
		SET @sqlCommand += '' AND b.BondClassCd = ''''MUN''''''
	
	IF @IssOrMatFlag = ''Y''
		SET @sqlCommand += '' AND b.IssueDate >= '''''' + CONVERT(varchar, @StartDate, 121) + '''''''' + '' AND b.IssueDate <= '''''' + CONVERT(varchar, @EndDate, 121) + ''''''''
	ELSE
		SET @sqlCommand += '' AND b.MaturityDate >= '''''' + CONVERT(varchar, @StartDate, 121) + '''''''' + '' AND b.MaturityDate <= '''''' + CONVERT(varchar, @EndDate, 121) + ''''''''
	
	SET @sqlCommand += '' AND b.ProvinceOrder IS NOT NULL''
	SET @sqlCommand += '' Order By b.IssueDate Desc''

	PRINT @sqlCommand
	EXEC (@sqlCommand)
END


' 
END
GO
