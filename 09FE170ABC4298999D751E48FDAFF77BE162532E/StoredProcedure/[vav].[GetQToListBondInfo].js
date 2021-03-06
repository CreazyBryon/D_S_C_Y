﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetQToListBondInfo]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'
CREATE PROCEDURE [vav].[GetQToListBondInfo] (
	@BondClass varchar(500)=''all'',
	@CouponClass varchar(30)=''all'',
	@Option varchar(10)=''all'',
	@Culture varchar(10)=''zh-CN'',
	@ColumnList varchar(4000)='''' 
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	DECLARE @sqlCommand varchar(4000)
	DECLARE @tableName varchar(50)
	DECLARE @filter1 varchar(500)
	DECLARE @filter2 varchar(100)
	DECLARE @filter3 varchar(100)
	DECLARE @replicator varchar(20)
	
	SET @filter1 = ''''
	SET @filter2 = ''''
	SET @filter3 = ''''
	SET @replicator = ''''
		
	IF @Culture = ''zh-CN''
		SET @tableName = ''[vav].[v_bond_enhance_cn]''
	ELSE
		SET @tableName = ''[vav].[v_bond_enhance_en]''
		
	IF (CHARINDEX(''[DayToList]'', @ColumnList) > 0)
		SET @replicator = ''[DayToList]''
	ELSE
		SET @replicator = ''DayToList''
	
	SET @sqlCommand =  ''SELECT '' + [vav].[ColumnPreprocess](@ColumnList) + REPLACE(@columnList, @replicator, ''DATEDIFF(day, GETDATE(), ListingDate) AS [DayToList]'') + '' FROM '' + @tableName + '' AS b WHERE ((b.SecClassCd != ''''DSUM'''' AND b.SecClassCd != ''''FORM'''') OR b.SecClassCd IS NULL) AND b.IssueDate <= ''''''+ convert(varchar, GETDATE(), 121) 
						+ '''''' AND b.ListingDate >= '''''' + convert(varchar, GETDATE(), 121) + ''''''''
	
	IF (@BondClass != ''all'' OR @CouponClass != ''all'' OR @Option != ''all'')
	BEGIN
		
		SET @sqlCommand += '' AND''

		IF @BondClass != ''all''
			SET @filter1 = '' b.BondClassCd IN '' + @BondClass

		IF @CouponClass != ''all''
		BEGIN
			IF @filter1 = ''''
				SET @filter2 = '' b.CouponClassCd='''''' + @CouponClass + ''''''''
			ELSE
				SET @filter2 = '' AND b.CouponClassCd='''''' + @CouponClass + ''''''''
		END
		
		IF @Option != ''all''
		BEGIN
			IF @filter2 = '''' AND @filter1 = ''''
				SET @filter3 = '' b.[Option]='''''' + @Option + ''''''''
			ELSE
				SET @filter3 = '' AND b.[Option]='''''' + @Option + ''''''''
		END
	END
	
	SET @sqlCommand += @filter1 + @filter2 + @filter3 + '' Order by b.ListingDate ASC, b.IssueDate DESC, b.OrigDatedDate DESC''
						
	PRINT @sqlCommand
	EXEC (@sqlCommand)
END

' 
END
GO
