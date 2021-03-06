﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[vav].[v_bondissuer]'))
EXEC dbo.sp_executesql @statement = N'



CREATE VIEW [vav].[v_bondissuer]
AS

SELECT DISTINCT
orgInfo.[ORG_UNI_CODE]
,[ORG_CHI_NAME]
,[CHI_SHORT_NAME]
,[ORG_ENG_NAME]
,orgInfo.[ENG_SHORT_NAME]
,orgInfo.CHI_SPE_SHORT_NAME
,''ISSUER'' AS DISP_TYPE
,''OpenReprot'' AS Open_Type
FROM zcx.BOND_ISSER_INFO bIssrInfo
JOIN zcx.BOND_BASIC_INFO bInfo ON bIssrInfo.BOND_UNI_CODE = bInfo.BOND_UNI_CODE
JOIN zcx.PUB_ORG_INFO orgInfo ON bIssrInfo.ORG_UNI_CODE = orgInfo.ORG_UNI_CODE
WHERE bInfo.ISVALID = 1 AND bIssrInfo.ISVALID = 1 AND orgInfo.ISVALID = 1 
AND (bInfo.SEC_MAR_PAR IN (1,2,3)) 
AND bInfo.BOND_CODE IS NOT NULL 
AND bIssrInfo.ORG_UNI_CODE IS NOT NULL



' 
GO
