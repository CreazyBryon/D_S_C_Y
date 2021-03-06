﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[sp_UpdateLufaxDetail]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'






-- =============================================
-- Author:		wss
-- Create date: 2014-10-20
-- Description:	将一个Table作为存储过程的参数实现数据同步更新
-- =============================================
CREATE PROCEDURE [vav].[sp_UpdateLufaxDetail]
	@dt LufaxDetailTT READONLY
AS
BEGIN

	Merge Into [vav].[LufaxDetail] T
	using (select m.[ChannelID],m.[Name],m.[VALUE],m.[OrderId] as OrderId 
	       from @dt m
	       inner join (select n.[ChannelID],n.[Name],max(n.[OrderId]) as [OrderId]
	                   from @dt n
	                   group by n.[ChannelID],n.[Name]
	                   ) x on m.[ChannelID]=x.[ChannelID] and m.[OrderId]=x.[OrderId]
	       ) S on T.[ChannelID]=S.[ChannelID] and T.[Name]=S.[Name] 
	When Matched  Then Update set T.[VALUE]=S.[VALUE] ,T.[CreateDate]=getdate()
	When Not Matched By Target Then Insert ([ChannelID],[Name],[VALUE],[CreateDate],[OrderId]) values (S.[ChannelID],S.[Name],S.[VALUE],getdate(),S.OrderId)
    ;
    --When Not Matched By Source Then --Delete;
END


' 
END
GO
