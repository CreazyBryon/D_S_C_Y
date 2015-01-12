SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[GetQueryCondition]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'

CREATE proc [cne].[GetQueryCondition] 
  as 
 select
id, itemID, direction, displayName_CN, displayName_EN, relationColumn
      from [cne].[QueryCondititon]
  where [isValid]=1 
  order by queryOrder asc

' 
END
GO
