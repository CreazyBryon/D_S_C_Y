SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetBondRatingHist]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'-- =============================================
-- Author:		<qingwei.li>
-- Create date: <2013.5.9>
-- Description:	<2013.5.9>
-- =============================================
CREATE PROCEDURE [vav].[GetBondRatingHist] (
	@BondCode varchar(30)=''''
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	DECLARE @MatureDate DATETIME = ''1900-01-01''
	
	SELECT @MatureDate = MAX(MaturityDate) FROM vav.BondInfoCn WHERE code = @BondCode;
	
	SELECT 
	matureInfo.BOND_ID,
	matureInfo.BOND_CODE, 
	matureInfo.ACTU_END_DATE, 
	histInfo.RATE_WRIT_DATE AS RATE_DATE,
	
	(CASE histInfo.RATE_TYPE_PAR 
		WHEN 1 THEN N''长期''
		WHEN 2 THEN N''短期''
		ELSE N''其它''
	 END) AS RATE_TYPE, 
	
	(CASE histInfo.RATE_CLS_PAR
		WHEN 1 THEN N''首次评级''
		WHEN 2 THEN N''跟踪评级''
		ELSE N''其它''
	 END) AS RATE_CLS,
	 
	 org.ORG_CHI_NAME AS RATE_ORG,
	 histInfo.BOND_CRED_LEVEL AS RATE,
	 
	 (CASE histInfo.RATE_PROS_PAR
		WHEN 1 THEN N''正面''
		WHEN 2 THEN N''稳定''
		WHEN 2 THEN N''观望''
		WHEN 2 THEN N''负面''
		ELSE N''其它''
	 END) AS RATE_PROS,
	 rateReport.RATE_TITLE,
	 histInfo.RATE_ID
	FROM 
	(SELECT 
			i.* 
			FROM 
			(
				SELECT RowNumber = ROW_NUMBER() OVER (PARTITION BY t.BOND_CODE ORDER BY t.ACTU_END_DATE DESC),
				t.* 
				FROM (
					SELECT a.BOND_ID, a.BOND_CODE, b.ACTU_END_DATE FROM zcx.BOND_BASIC_INFO a JOIN zcx.BOND_RATE_INFO b ON a.BOND_ID = b.BOND_ID
					WHERE a.ISVALID = 1 AND b.ISVALID = 1
				) t
			) i 
			WHERE i.RowNumber = 1) matureInfo
	JOIN zcx.RATE_FINA_HIS histInfo ON matureInfo.BOND_Id = histInfo.BOND_ID AND histInfo.ISVALID = 1
	LEFT JOIN zcx.PUB_ORG_INFO org ON histInfo.ORG_UNI_CODE = org.ORG_UNI_CODE AND org.ISVALID = 1
	LEFT JOIN zcx.RATE_REP rateReport ON histInfo.RATE_ID = rateReport.RATE_ID AND rateReport.ISVALID = 1
	WHERE matureInfo.BOND_CODE = @BondCode AND matureInfo.ACTU_END_DATE = @MatureDate
END
' 
END
GO
