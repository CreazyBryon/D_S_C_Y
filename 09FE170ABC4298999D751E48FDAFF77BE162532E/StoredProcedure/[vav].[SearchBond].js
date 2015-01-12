SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[SearchBond]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'
CREATE PROCEDURE [vav].[SearchBond]
	@key nvarchar(100),
	@isEnglishCulture bit = 1
AS

BEGIN
	DECLARE @query nvarchar(102) = ''''
	
	SET @key = dbo.EscapeSpecialChar(@key)
	SET @query = ''%'' + @key + ''%''
	SET NOCOUNT ON;
	
	IF @isEnglishCulture != 1
		SELECT TOP 20 Ric, RTRIM(Code) + '' | '' + RTRIM(ShortName) + '' | '' + RTRIM(Pyc) AS Name
		FROM vav.BondInfoCn
		WHERE (Code LIKE @query OR ShortName LIKE @query) AND NULLIF(Ric, '''') IS NOT NULL
		ORDER BY Code
	ELSE
		SELECT TOP 20 Ric, RTRIM(Code) + '' | '' + RTRIM(ShortName) + '' | '' + RTRIM(Pyc) AS Name
		FROM vav.BondInfoEn
		WHERE (Code LIKE @query OR ShortName LIKE @query) AND NULLIF(Ric, '''') IS NOT NULL
		ORDER BY Code
END



--3 alter bond_view_cn * en, to add pingying, bondratinghist, bondissuerrait




/****** Object:  View [vav].[v_bond_cn]    Script Date: 08/08/2014 15:10:24 ******/
SET ANSI_NULLS ON
' 
END
GO
