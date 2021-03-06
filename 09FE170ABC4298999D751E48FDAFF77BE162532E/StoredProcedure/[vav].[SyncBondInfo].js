﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[SyncBondInfo]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [vav].[SyncBondInfo]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
				
    select c.[asset_id],d.[Code],d.[ShortName],a.[assetId] into #SyncBondsCn  
    from ejv.[govcorp.asset] as a 
    join [ejv].[govcorp.asset_ident]as b on a.[assetId]=b.[assetId]   
    join [ejv].[govcorp.alt_ident]as c on b.id_number=c.[alt_id] 
    join [vav].[BondInfoCn] as d on d.[AssetId]=c.[asset_id] 
    where a.asset_status_cd=''FNG'' 
    and a.assetId in (select distinct assetId from [vav].[BondInfoCn] where Code is null)
    and b.id_cd=''DBS''

	update [vav].[BondInfoCn]
	set [Code] = y.[Code],
		[ShortName] = y.[ShortName]
	from #SyncBondsCn as y where [vav].[BondInfoCn].[AssetId]=y.[assetId]
	
    select c.[asset_id],d.[Code],d.[ShortName],a.[assetId] into #SyncBondsEn 
    from ejv.[govcorp.asset] as a 
    join [ejv].[govcorp.asset_ident]as b on a.[assetId]=b.[assetId]   
    join [ejv].[govcorp.alt_ident]as c on b.id_number=c.[alt_id] 
    join [vav].[BondInfoEn] as d on d.[AssetId]=c.[asset_id] 
    where asset_status_cd=''FNG'' 
    and a.assetId in (select distinct assetId from [vav].[BondInfoEn] where Code is null)
    and id_cd=''DBS''
   
	update [vav].[BondInfoEn]
	set [Code] = y.[Code],
		[ShortName] = y.[ShortName]
	from #SyncBondsEn as y where [vav].[BondInfoEn].[AssetId]=y.[assetId]

    drop table #SyncBondsCn;
    drop table #SyncBondsEn;
    
END


' 
END
GO
