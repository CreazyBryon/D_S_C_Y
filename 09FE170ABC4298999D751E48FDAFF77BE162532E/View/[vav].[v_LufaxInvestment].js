﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[vav].[v_LufaxInvestment]'))
EXEC dbo.sp_executesql @statement = N'





CREATE VIEW [vav].[v_LufaxInvestment]
AS

WITH MaxCreateDate(MaxDate) AS
(
    SELECT MAX(CreateDate) FROM vav.LufaxProduct AS MaxDate
)

SELECT     
ChannelID, 
CategoryID,
cate.Category AS CategoryName,
ProductName, 
ProductType, 
DOMAIN, 

MinPeriod, 
MaxPeriod, 
PeriodUnit, 
peri.Unit AS UnitName,

(CASE WHEN PeriodUnit = 2
	  THEN CASE WHEN MaxPeriod <= 3 THEN ''LT3M''
				   WHEN MinPeriod >= 3 AND MaxPeriod <= 6 THEN ''3MT6M''
				   WHEN MinPeriod >= 6 AND MaxPeriod <= 12 THEN ''6MT1Y''
				   WHEN MinPeriod >= 12 AND MaxPeriod <= 36 THEN ''1YT3Y''
				   WHEN MinPeriod >=36 THEN ''GT3Y''
				   ELSE ''OTH''
			  END
	 WHEN PeriodUnit = 1
	  THEN CASE WHEN MaxPeriod <= 3 * 30 THEN ''LT3M''
			   WHEN MinPeriod >= 3 * 30 AND MaxPeriod <= 6 * 30 THEN ''3MT6M''
			   WHEN MinPeriod >= 6 * 30 AND MaxPeriod <= 12 * 30 THEN ''6MT1Y''
			   WHEN MinPeriod >= 12 * 30 AND MaxPeriod <= 36 * 30 THEN ''1YT3Y''
			   WHEN MinPeriod >= 36 * 30 THEN ''GT3Y''
			   ELSE ''OTH''
		  END
	 WHEN PeriodUnit = 3
	  THEN CASE WHEN MaxPeriod <= 0.25 THEN ''LT3M''
			   WHEN MinPeriod >= 0.25 AND MaxPeriod <= 0.5 THEN ''3MT6M''
			   WHEN MinPeriod >= 0.5 AND MaxPeriod <= 1 THEN ''6MT1Y''
			   WHEN MinPeriod >= 1 AND MaxPeriod <= 3 THEN ''1YT3Y''
			   WHEN MinPeriod >= 3 THEN ''GT3Y''
			   ELSE ''OTH''
		  END
	 ELSE ''OTH''
 END 
) AS TermCode,

(CASE WHEN MinPeriod = MaxPeriod THEN CONVERT(NVARCHAR(10), CAST(MinPeriod AS FLOAT))
	  ELSE CONVERT(NVARCHAR(10), CAST(MinPeriod AS FLOAT)) + ''-'' + CONVERT(NVARCHAR(10), CAST(MaxPeriod AS FLOAT))
 END 
) AS Term,

(CASE WHEN MaxCapitalAmount <= 1000 THEN ''10M''
	  WHEN MinCapitalAmount >= 1000 AND MaxCapitalAmount <= 5000 THEN ''10MTO50M''
	  WHEN MinCapitalAmount >= 5000 AND MaxCapitalAmount <= 10000 THEN ''50MTO100M''
	  WHEN MinCapitalAmount >= 10000 THEN ''GT100M''
	  ELSE ''OTH''
  END 
) AS AmountCode,

(CASE WHEN MinCapitalAmount = MaxCapitalAmount THEN REPLACE(CONVERT(NVARCHAR(20), CAST(MinCapitalAmount AS MONEY), 1), ''.00'', '''')
	  ELSE REPLACE(CONVERT(NVARCHAR(20), CAST(MinCapitalAmount AS MONEY), 1), ''.00'', '''') + ''-'' + REPLACE(CONVERT(NVARCHAR(20), CAST(MaxCapitalAmount AS MONEY), 1), ''.00'', '''')
 END 
) AS Amount,

(CASE WHEN MaxExpectedRate <= 5 THEN ''LT5P''
	  WHEN MinExpectedRate >= 5 AND MaxExpectedRate <= 8 THEN ''5PT8P''
	  WHEN MinExpectedRate >= 8 AND MaxExpectedRate <= 10 THEN ''8PT10P''
	  WHEN MinExpectedRate >= 10 THEN ''GT10P''
	  ELSE N''OTH''
  END 
) AS YieldCode,

(CASE WHEN MinExpectedRate IS NULL AND MaxExpectedRate IS NULL THEN N''OTH''
	  WHEN MinExpectedRate = MaxExpectedRate THEN CONVERT(NVARCHAR(10), MinExpectedRate)
	  ELSE CONVERT(NVARCHAR(10), MinExpectedRate) + ''-'' + CONVERT(NVARCHAR(10), MaxExpectedRate)
 END 
) AS Yield,

MinCapitalAmount, 
MaxCapitalAmount,

MinCapitalCost, 
MaxCapitalCost, 
(CASE WHEN MinCapitalCost = MaxCapitalCost THEN REPLACE(CONVERT(NVARCHAR(20), CAST(MinCapitalCost AS MONEY), 1), ''.00'', '''')
	  ELSE REPLACE(CONVERT(NVARCHAR(20), CAST(MinCapitalCost AS MONEY), 1), ''.00'', '''') + ''-'' + REPLACE(CONVERT(NVARCHAR(20), CAST(MaxCapitalCost AS MONEY), 1), ''.00'', '''')
 END 
) AS CapitalCost,

MinExpectedRate, 
MaxExpectedRate, 
Minimal, 
Rating,

(CASE WHEN States = N''在售'' THEN ''InSale''
	  ELSE ''NoSale''
 END 
) AS StateCode,
States,
CreateDate,

(CASE WHEN DATEDIFF(day, CreateDate,  MaxDate) <= 7 THEN 1
	  ELSE 0
 END
) AS IsNew

FROM vav.LufaxProduct prod
CROSS APPLY MaxCreateDate
JOIN vav.LufaxCategory cate ON prod.CategoryID = cate.Id
JOIN vav.LufaxPeriod peri ON prod.PeriodUnit = peri.Id






' 
GO
