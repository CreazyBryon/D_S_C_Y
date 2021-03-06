﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetTypeOrder]') AND type in (N'FN', N'IF', N'TF', N'FS', N'FT'))
BEGIN
execute dbo.sp_executesql @statement = N'
create FUNCTION [vav].[GetTypeOrder](@value nvarchar(200)) 
	returns int
begin 
	declare @result int;
	
	select @result = table_cd from vav.TypeOrder where english_name = @value
	
	return @result;
end

' 
END

GO
