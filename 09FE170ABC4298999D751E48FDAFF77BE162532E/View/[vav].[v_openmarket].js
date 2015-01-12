SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[vav].[v_openmarket]'))
EXEC dbo.sp_executesql @statement = N'

CREATE VIEW [vav].[v_openmarket]
AS
SELECT     CONVERT(varchar(32), Ric) ric, issueDate trade_dt, issueVolume volume, issueRate last, issueYield yield, matDate maturity_dt, CASE WHEN RIGHT(rtrim(Ric), 8) 
                      = ''RRP=PBOC'' THEN ''1'' ELSE ''2'' END tradetype, 0 term, CONVERT(varchar(32), Ric) asset_id,
                          (SELECT     english_name
                            FROM          vav.Localization
                            WHERE      table_name = ''RepoTerm'' AND table_cd = vomr.Ric) term_en,
                          (SELECT     chinese_name
                            FROM          vav.Localization
                            WHERE      table_name = ''RepoTerm'' AND table_cd = vomr.Ric) term_cn, 
                      CASE WHEN Ric = ''CN1DRP=PBOC'' THEN 1 WHEN Ric = ''CN1DRRP=PBOC'' THEN 1 WHEN Ric = ''CN7DRP=PBOC'' THEN 2 WHEN Ric = ''CN7DRRP=PBOC'' THEN 2 WHEN
                       Ric = ''CN14DRP=PBOC'' THEN 3 WHEN Ric = ''CN14DRRP=PBOC'' THEN 3 WHEN Ric = ''CN21DRP=PBOC'' THEN 4 WHEN Ric = ''CN21DRRP=PBOC'' THEN 4 WHEN Ric
                       = ''CN1MRP=PBOC'' THEN 5 WHEN Ric = ''CN1MRRP=PBOC'' THEN 5 WHEN Ric = ''CN3MRP=PBOC'' THEN 6 WHEN Ric = ''CN3MRRP=PBOC'' THEN 6 WHEN Ric = ''CN6MRP=PBOC''
                       THEN 7 WHEN Ric = ''CN6MRRP=PBOC'' THEN 7 END term_order
FROM         vav.OpenMarketOperation vomr
UNION ALL
SELECT     CONVERT(varchar(32), id_number) ric, orig_iss_dt trade_dt, orig_amt_iss / 100000 volume, orig_iss_px last, orig_yld_maturity yield, maturity_dt, ''0'' tradetype, 
                      term_to_maturity term, CONVERT(varchar(32), asset_id) asset_id, 
                      CASE WHEN term_to_maturity < 40 THEN ''1M'' WHEN term_to_maturity < 100 THEN ''3M'' WHEN term_to_maturity < 192 THEN ''6M'' WHEN term_to_maturity < 375 THEN
                       ''1Y'' ELSE ''3Y'' END term_en, 
                      CASE WHEN term_to_maturity < 40 THEN N''1月'' WHEN term_to_maturity < 100 THEN N''3月'' WHEN term_to_maturity < 192 THEN N''6月'' WHEN term_to_maturity < 375
                       THEN N''1年'' ELSE N''3年'' END term_cn, 
                      CASE WHEN term_to_maturity < 40 THEN 1 WHEN term_to_maturity < 100 THEN 2 WHEN term_to_maturity < 192 THEN 3 WHEN term_to_maturity < 375 THEN 4 ELSE
                       5 END term_order
FROM         vav.v_asset
WHERE     cdc_asset_class_cd = ''cbb''


' 
GO
IF NOT EXISTS (SELECT * FROM ::fn_listextendedproperty(N'MS_DiagramPane1' , N'SCHEMA',N'vav', N'VIEW',N'v_openmarket', NULL,NULL))
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[15] 4[4] 2[63] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'vav', @level1type=N'VIEW',@level1name=N'v_openmarket'
GO
IF NOT EXISTS (SELECT * FROM ::fn_listextendedproperty(N'MS_DiagramPaneCount' , N'SCHEMA',N'vav', N'VIEW',N'v_openmarket', NULL,NULL))
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'vav', @level1type=N'VIEW',@level1name=N'v_openmarket'
GO
