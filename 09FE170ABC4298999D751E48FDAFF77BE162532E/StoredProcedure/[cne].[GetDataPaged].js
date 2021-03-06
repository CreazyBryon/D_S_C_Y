﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[cne].[GetDataPaged]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'-- Author:    wangshuaishuai

-- Email:　　  wangshuai0379@163.com

-- Create date: 2013-9-22

-- Description:   分页存储过程，根据传递的参数返回分页的结果

-- Parameters：

-- =============================================
CREATE PROCEDURE [cne].[GetDataPaged] 

@tblName   varchar(255),            -- 表名如：''xtest''
@strGetFields varchar(1000) = ''*'',  -- 需要返回的列如：''xname,xdemo''
@strOrder varchar(255)='''',          -- 排序的字段名如：''order by id desc''
@strWhere  varchar(1500) = '''',      -- 查询条件(注意:不要加where)如:''xname like ''''%222name%'''''' 
--@beginIndex int=1,                  --开始记录位置
@pageIndex  int = 1,                -- 页码如：2
@pageSize   int = 50,               -- 每页记录数如：20
@recordCount int output,            -- 记录总数
@doCount int=0  ,                   -- 非0则统计,为0则不统计(统计会影响效率)
@isExcelReport int=0                -- 非0则代表打印Excel报告，取消分页
AS

declare @strSQL varchar(5000)
declare @strCount nvarchar(1000)
--总记录条数
if(@doCount!=0)
begin
    if(@strWhere !='''')
    begin
        set @strCount=''set @num=(select count(1) from ''+ @tblName + '' where ''+@strWhere+'' )''
    end
    else
    begin
        set @strCount=''set @num=(select count(1) from ''+ @tblName + '' )''
    end
    EXECUTE sp_executesql @strCount ,N''@num INT output'',@RecordCount output
end

if @strWhere !=''''
begin
    set @strWhere='' where ''+@strWhere
end
set @strSQL=''SELECT ''+@strGetFields+'' FROM (SELECT ROW_NUMBER() OVER (order by ''+@strOrder+'') AS ROWID,''
set @strSQL=@strSQL+@strGetFields+'' FROM ''+@tblName+'' ''+@strWhere+'') AS sp''
--set @strSQL=@strSQL+'' WHERE ROWID BETWEEN ''+str(@beginIndex)+'' AND ''+str(@beginIndex+@PageSize)
if(@isExcelReport=0)
begin
    set @strSQL=@strSQL+'' WHERE ROWID BETWEEN ''+str((@PageIndex-1)*@PageSize+1)+'' AND ''+str(@PageIndex*@PageSize)
end
--print (@strSQL)
exec (@strSQL)

' 
END
GO
