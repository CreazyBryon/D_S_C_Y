﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[GetGDTTabNodes]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE proc [cne].[GetGDTTabNodes]

  as 
  select [reportID],[itemID],[tabName_cn],[tabName_en] , viewModelName1, viewModelName2,[tableName1],[tableFilter1],[tableName2],[tableFilter2], viewName1, viewName2 ,[Legend]
  from [cne].[ItemDefinition] 
  where [isValid]=1  
  order by [tabOrder] asc' 
END
GO
