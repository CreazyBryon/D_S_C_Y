﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetNewIssuedBondInfo]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'-- =============================================
-- Author:		<qingwei.li>
-- Create date: <2013.5.9>
-- Description:	<2013.5.9>
-- =============================================
CREATE PROCEDURE [vav].[GetNewIssuedBondInfo] (
	@BondClass varchar(500)=''all'',
	@CouponClass varchar(30)=''all'',
	@Option varchar(10)=''all'',
	@BondRating varchar(10)=''all'',
	@BondeCode varchar(30)='''',
	@StartDate datetime=''1900-01-01'', 
	@EndDate datetime=''1900-01-01'',
	@Culture varchar(10)=''zh-CN'',
	@ColumnList varchar(4000)='''',
	@IsMD varchar(10)=''all'',
	@OthClass varchar(30)=''all'',
	@BondMarket varchar(30)=''all'',
	@BondTrustee varchar(30)=''all''	 
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	DECLARE @sqlCommand varchar(4000)
	DECLARE @tableName varchar(50)
	DECLARE @filter varchar(2000)
	DECLARE @replicator varchar(20)
	
	SET @filter = ''''

		
	IF (CHARINDEX(''[DayToList]'', @ColumnList) > 0)
		SET @replicator = ''[DayToList]''
	ELSE
		SET @replicator = ''DayToList''
		
	IF @Culture = ''zh-CN''
		SET @tableName = ''[vav].[v_bond_enhance_cn]''
	ELSE
		SET @tableName = ''[vav].[v_bond_enhance_en]''
		
	IF @BondeCode != ''''
	BEGIN
		SET @sqlCommand = ''SELECT '' + [vav].[ColumnPreprocess](@ColumnList) + REPLACE(@columnList, @replicator, ''DATEDIFF(day, GETDATE(), ListingDate) AS [DayToList]'') + '' From '' + @tableName
						+ '' AS b WHERE CHARINDEX('''''' + @BondeCode +  '''''', b.CodeList) != 0 ''
	END
	ELSE
	BEGIN
		SET @sqlCommand =  ''SELECT '' + [vav].[ColumnPreprocess](@ColumnList) + REPLACE(@columnList, @replicator, ''DATEDIFF(day, GETDATE(), ListingDate) AS [DayToList]'') + '' FROM '' + @tableName 
						+ '' AS b WHERE ((b.SecClassCd != ''''DSUM'''' AND b.SecClassCd != ''''FORM'''') OR b.SecClassCd IS NULL) AND b.IssueDate >= '''''' + CONVERT(varchar, @StartDate, 121) + ''''''''
						+ '' AND b.IssueDate <= '''''' + CONVERT(varchar, @EndDate, 121) + ''''''''
	
		IF (@BondClass != ''all'' OR @CouponClass != ''all'' OR @Option != ''all''OR @IsMD != ''all'' 
				OR @OthClass != ''all'' OR @BondMarket != ''all'' OR @BondTrustee != ''all'' OR @BondRating != ''all'')
		BEGIN
			
			SET @sqlCommand += '' AND''
			
			IF @BondClass != ''all''
				SET @filter = '' b.BondClassCd IN '' + @BondClass

			IF @CouponClass != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END 
							+ ''   b.CouponClassCd='''''' + @CouponClass + ''''''''
			
			IF @Option != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END 
							+ ''   b.[Option]='''''' + @Option + ''''''''
							
			IF @IsMD != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END 
							+ ''   b.CIBondFlag='''''' + @IsMD + ''''''''
			
			IF @OthClass != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END 
							+ ''   b.OthBondTypeCd='''''' + @OthClass + ''''''''

			IF @BondRating != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END
							+ ''   b.RatingCd='''''' + @BondRating + ''''''''
																	
			IF @BondMarket != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END 
							+ ''   b.ExchangeCode like ''''%'' + @BondMarket + ''%''''''
			
			IF @BondTrustee != ''all''
				SET @filter += CASE @filter WHEN '''' THEN '''' ELSE '' AND '' END 
							+ ''   b.TrusteeCode like ''''%'' + @BondTrustee + ''%''''''						
		END
		
		SET @sqlCommand += @filter + '' Order By b.IssueDate Desc, b.OrigDatedDate DESC''
	END
	
	PRINT @sqlCommand
	EXEC (@sqlCommand)
END

' 
END
GO
