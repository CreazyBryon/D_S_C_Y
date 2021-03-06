﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[ColumnPreprocess]') AND type in (N'FN', N'IF', N'TF', N'FS', N'FT'))
BEGIN
execute dbo.sp_executesql @statement = N'CREATE FUNCTION [vav].[ColumnPreprocess](@columnList varchar(2000)) 
	returns varchar(30)
begin 
	declare @result varchar(30);
	
	set @result = ''''; 
	
	if (CHARINDEX(''Code'', @columnList) = 0)
		set @result = ''Code''
	
	if (CHARINDEX(''Ric'', @columnList) = 0)
	begin
		if (@result = '''')
			set @result = ''Ric''
		else 
			set @result += '',Ric''	
	end
	
	if (CHARINDEX(''AssetId'', @columnList) = 0)
	begin
		if (@result = '''')
			set @result = ''AssetId''
		else 
			set @result += '',AssetId''	
	end
	
	if (CHARINDEX(''BondName'', @columnList) = 0)
	begin
		if (@result = '''')
			set @result = ''BondName''
		else 
			set @result += '',BondName''	
	end
	
	if (@result != '''')
		set @result += '',''
	
	return @result;
end
' 
END

GO
