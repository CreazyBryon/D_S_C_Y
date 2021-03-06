﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetBondDepositoryBalance]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'-- =============================================
-- Author:		<qingwei.li>
-- Create date: <2013.5.9>
-- Description:	<2013.5.9>
-- =============================================
CREATE PROCEDURE [vav].[GetBondDepositoryBalance] (
	@Category nvarchar(30)=''Bond_Class'',
	@StartDate nvarchar(100)=''1900-01-01'', 
	@EndDate nvarchar(100)=''1900-01-01'',
	@Unit nvarchar(10) = ''100M''
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	DECLARE @sqlCommand nvarchar(max)
	DECLARE @filter nvarchar(200)
	DECLARE @groupBy nvarchar(200)
	DECLARE @selectCn nvarchar(200)
	DECLARE @selectEn nvarchar(200)
	DECLARE @selectKey nvarchar(200)
	DECLARE @selectIssPert nvarchar(400)
	DECLARE @selectAmtPert nvarchar(400)
	DECLARE @orderBy nvarchar(200)
	DECLARE @multiplier nvarchar(200)
	DECLARE @issueCountTotal int
	DECLARE @issueAmountTotal numeric(18,2)
	
	SET @filter = '' maturity_dt >= '''''' + @StartDate + '''''' AND orig_issue_dt <= '''''' + @EndDate + ''''''''
	SET @groupBy = '' cdc_asset_class_cd, cdc_asset_class_en, cdc_asset_class_cn ''
	SET @selectKey = '' cdc_asset_class_cd ''
	SET @selectCn = '' cdc_asset_class_cn ''  
	SET @selectEn = '' cdc_asset_class_en ''
	SET @selectIssPert = '' CAST(0 AS NUMERIC(18,2)) AS IssuesPercent, ''
	SET @selectAmtPert = '' CAST(0 AS NUMERIC(18,2)) AS IssuesAmountPercent, ''
	SET @multiplier = ''1''
	SET @issueCountTotal = 0
	SET @issueAmountTotal = 0
	
	SELECT @issueCountTotal = COUNT(DISTINCT assetid) FROM vav.v_bondview_full 
	WHERE orig_issue_dt >= @StartDate AND orig_issue_dt <= @EndDate
	
	SELECT @issueAmountTotal = SUM(orig_iss_amt) FROM vav.v_bondview_full 
	WHERE orig_issue_dt >= @StartDate AND orig_issue_dt <= @EndDate
	
	IF @issueCountTotal != 0
		SET @selectIssPert = 
		''CAST(CONVERT(NUMERIC(18,2), COUNT(DISTINCT CASE WHEN orig_issue_dt >= '''''' + @StartDate 
		+ '''''' AND orig_issue_dt <= '''''' + @EndDate + '''''' THEN assetId END)) / '' 
		+ Convert(nvarchar(20), @issueCountTotal) 
		+ '' * 100 AS NUMERIC(18,2)) AS IssuesPercent, ''
	
	IF @issueAmountTotal != 0
		SET @selectAmtPert = 
		''CAST(CONVERT(NUMERIC(18,2), SUM(CASE WHEN orig_issue_dt >= '''''' + @StartDate 
		+ '''''' AND orig_issue_dt <= '''''' + @EndDate + '''''' THEN orig_iss_amt ELSE 0 END)) / '' 
		+ Convert(nvarchar(40), @issueAmountTotal) 
		+ '' * 100 AS NUMERIC(18,2)) AS IssuesAmountPercent, ''
	
	IF @Unit = ''M''
		SET @multiplier = ''100'' 
	ELSE IF @Unit = ''10K''
		SET @multiplier = ''10000'' 
	ELSE IF @Unit = ''k''
		SET @multiplier = ''100000''
	
	IF @Category = ''Coupon Type''
	BEGIN
		SET @groupBy = '' coupon_class_en, coupon_class_cn ''
		SET @selectKey = '' coupon_class_en ''
		SET @selectEn = '' coupon_class_en ''
		SET @selectCn = '' coupon_class_cn ''
	END
	ELSE IF @Category = ''Option''
	BEGIN
		SET @groupBy = '' callorput_en, callorput_cn ''
		SET @selectKey = '' callorput_en ''
		SET @selectEn = '' callorput_en ''
		SET @selectCn = '' callorput_cn ''
	END
	ELSE IF @Category = ''Maturity_Term''
	BEGIN
		SET @groupBy = '' BondTerm_en, BondTerm_cn ''
		SET @selectKey = '' BondTerm_en ''
		SET @selectEn = '' BondTerm_en ''
		SET @selectCn = '' BondTerm_cn ''
	END
	
	SET @sqlCommand = 
	''SELECT '' + @selectKey + '' AS [Type], ''
	+ @selectCn + '' AS TypeCn, ''
	+ @selectEn + '' AS TypeEn, ''
	+ ''CAST((SUM(CASE WHEN orig_issue_dt < '''''' + @StartDate + '''''' AND maturity_dt >= '''''' + @StartDate + '''''' THEN orig_iss_amt ELSE 0 END) 
	    + SUM(CASE WHEN orig_issue_dt >= '''''' + @StartDate + '''''' AND orig_issue_dt <= '''''' + @EndDate + '''''' THEN orig_iss_amt ELSE 0 END) 
		- SUM(CASE WHEN maturity_dt >= '''''' + @StartDate + '''''' AND maturity_dt <= '''''' + @EndDate + '''''' THEN orig_iss_amt ELSE 0 END)) / 100000 * '' + @multiplier + '' AS NUMERIC(18,2)) AS EndBalance, ''
	+ ''CAST(SUM(CASE WHEN orig_issue_dt < '''''' + @StartDate + '''''' AND maturity_dt >= '''''' + @StartDate + '''''' THEN orig_iss_amt ELSE 0 END) / 100000 * '' + @multiplier + '' AS NUMERIC(18,2)) AS InitialBalance, ''
	+ ''COUNT(DISTINCT CASE WHEN orig_issue_dt >= '''''' + @StartDate + '''''' AND orig_issue_dt <= '''''' + @EndDate + '''''' THEN assetId END) AS Issues, ''
	+ @selectIssPert
	+ ''CAST(SUM(CASE WHEN orig_issue_dt >= '''''' + @StartDate + '''''' AND orig_issue_dt <= '''''' + @EndDate + '''''' THEN orig_iss_amt ELSE 0 END) / 100000 * '' + @multiplier + '' AS NUMERIC(18,2)) AS IssuesAmount, ''
	+ @selectAmtPert
	+ ''COUNT(DISTINCT CASE WHEN maturity_dt >= '''''' + @StartDate + '''''' AND maturity_dt <= '''''' + @EndDate+ '''''' THEN assetId END) AS MaturityBonds,''
	+ ''CAST(SUM(CASE WHEN maturity_dt >= '''''' + @StartDate + '''''' AND maturity_dt <= '''''' + @EndDate + '''''' THEN orig_iss_amt ELSE 0 END) /100000 * '' + @multiplier + '' AS NUMERIC(18,2)) AS MaturityAmount, ''
	+ ''vav.GetTypeOrder('' + @selectEn + '') AS [Order] ''
	
	+ '' FROM vav.v_bondview_full WHERE ''
	+ @filter
	+ '' GROUP BY ''
	+ @groupBy
	+ '' ORDER BY [Order]''
	
	PRINT @sqlCommand
	EXEC (@sqlCommand)
END
' 
END
GO
