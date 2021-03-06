﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[GetLufaxInvestmentDetail]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'


CREATE PROCEDURE [vav].[GetLufaxInvestmentDetail] (
	@ChannelID bigint=0
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	
	SELECT detail.* , prod.ProductName
	FROM vav.LufaxDetail detail
	JOIN vav.LufaxProduct prod ON detail.ChannelID = prod.ChannelID
	WHERE detail.ChannelID = @ChannelID
	order by ChannelID,OrderId
END

' 
END
GO
