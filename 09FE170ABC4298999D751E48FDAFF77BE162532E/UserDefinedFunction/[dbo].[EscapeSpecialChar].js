﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[EscapeSpecialChar]') AND type in (N'FN', N'IF', N'TF', N'FS', N'FT'))
BEGIN
execute dbo.sp_executesql @statement = N'-- =============================================
-- Author:		qing wei
-- Create date: 2014.03.11
-- Description:	Replace special characters
-- =============================================
CREATE FUNCTION [dbo].[EscapeSpecialChar]
(
	@OriStr nvarchar(2000)
)
RETURNS nvarchar(2000)
AS
BEGIN

	DECLARE @Escaped NVARCHAR(2000) = REPLACE(@OriStr, ''['', ''[[]'');
	SET @Escaped = REPLACE(@Escaped, ''_'', ''[_]'');
	SET @Escaped = REPLACE(@Escaped, ''%'', ''[%]'');
	SET @Escaped = REPLACE(@Escaped, '''''''', '''''''''''');
	
	RETURN @Escaped

END
' 
END

GO
