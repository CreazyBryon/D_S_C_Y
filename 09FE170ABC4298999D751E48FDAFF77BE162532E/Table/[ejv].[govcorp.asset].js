SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.asset]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.asset](
	[assetId] [char](16) NOT NULL,
	[amt_iss_public] [float] NULL,
	[amt_iss_tot] [float] NULL,
	[annuity_fl] [char](1) NULL,
	[asset_cf_corr_dt] [datetime] NULL,
	[asset_duplicate_cd] [varchar](5) NULL,
	[asset_info_src_cd] [char](3) NULL,
	[asset_last_chg_dt] [datetime] NULL,
	[asset_setup_dt] [datetime] NULL,
	[asset_status_cd] [char](3) NULL,
	[asset_subtype_cd] [char](4) NULL,
	[asset_templt_cd] [char](3) NULL,
	[asset_ticker] [varchar](15) NULL,
	[asset_type_cd] [char](4) NULL,
	[bank_qualified_fl] [char](1) NULL,
	[bankwatch_rating_cd] [char](4) NULL,
	[bankwatch_rating_dt] [datetime] NULL,
	[bridge_symbol] [varchar](30) NULL,
	[call_terms_fl] [char](1) NULL,
	[call_type_cd] [char](3) NULL,
	[capitalization_fl] [char](1) NULL,
	[clawback_type_cd] [char](1) NULL,
	[cntry_of_iss_cd] [char](2) NULL,
	[common_code_nm] [varchar](20) NULL,
	[convertible_fl] [char](1) NULL,
	[cpn_class_cd] [char](4) NULL,
	[cpn_type_cd] [char](4) NULL,
	[credit_sensitive_fl] [char](1) NULL,
	[cur_amt_out_dt] [datetime] NULL,
	[cur_amt_outsd] [float] NULL,
	[cur_int_leg_nm] [smallint] NULL,
	[cur_prin_curr_cd] [char](3) NULL,
	[cur_prin_leg_nm] [smallint] NULL,
	[currency_cd] [char](3) NULL,
	[current_cpn] [float] NULL,
	[cusip] [char](9) NULL,
	[day_count_cd] [smallint] NULL,
	[dbs_pid] [varchar](13) NULL,
	[dcs_type_cd] [char](2) NULL,
	[debt_svc_cd] [char](1) NULL,
	[debt_type_cd] [varchar](8) NULL,
	[defeased_fl] [char](1) NULL,
	[denom_incr] [float] NULL,
	[denom_type_cd] [char](3) NULL,
	[descr] [varchar](30) NULL,
	[descr_detail] [varchar](30) NULL,
	[distribution_src_cd] [char](4) NULL,
	[dom_settle_cal_cd] [char](3) NULL,
	[dom_settle_val] [int] NULL,
	[domin_rating_cd] [varchar](30) NULL,
	[domin_rating_dt] [datetime] NULL,
	[dp_rating_cd] [char](4) NULL,
	[dp_rating_dt] [datetime] NULL,
	[ds_subtype_cd] [varchar](10) NULL,
	[ds_type_cd] [varchar](10) NULL,
	[dual_cur_fl] [char](1) NULL,
	[emerging_market_fl] [char](1) NULL,
	[equity_clawback_fl] [char](1) NULL,
	[er_score] [int] NULL,
	[euroclear_nm] [varchar](20) NULL,
	[eusd_tax_fl] [char](1) NULL,
	[exch_listed_fl] [char](1) NULL,
	[exdiv_cal_cd] [char](3) NULL,
	[exdiv_val] [smallint] NULL,
	[exec_quote_fl] [char](1) NULL,
	[exp_maturity_dt] [datetime] NULL,
	[extend_terms_fl] [char](1) NULL,
	[fig_rule_cd] [char](1) NULL,
	[first_cpn_dt] [datetime] NULL,
	[first_reset_dt] [datetime] NULL,
	[fitch_ibca_rating_cd] [char](4) NULL,
	[fitch_ibca_rating_dt] [datetime] NULL,
	[fitch_rating_cd] [varchar](30) NULL,
	[fitch_rating_dt] [datetime] NULL,
	[float_formula] [varchar](255) NULL,
	[float_index] [varchar](20) NULL,
	[float_mult] [float] NULL,
	[float_offset] [float] NULL,
	[for_settle_val] [int] NULL,
	[full_bridge_symbol] [varchar](30) NULL,
	[fund_terms_fl] [char](1) NULL,
	[funged_fl] [char](1) NULL,
	[guarantee_fl] [char](1) NULL,
	[ibca_rating_cd] [char](4) NULL,
	[ibca_rating_dt] [datetime] NULL,
	[ibs_control_nm] [int] NULL,
	[id_type] [char](1) NULL,
	[inflation_protect_fl] [char](1) NULL,
	[int_idx_lnk_fl] [char](1) NULL,
	[isin_nm] [varchar](20) NULL,
	[isin_src_cd] [char](3) NULL,
	[issuerId] [char](16) NULL,
	[last_cpn_dt] [datetime] NULL,
	[last_reset_dt] [datetime] NULL,
	[latest_rating_cd] [varchar](30) NULL,
	[latest_rating_eff_dt] [datetime] NULL,
	[latest_rating_src_cd] [char](3) NULL,
	[lead_undwrt_cd] [varchar](8) NULL,
	[life_cap] [float] NULL,
	[life_floor] [float] NULL,
	[mandatory_tender_dt] [datetime] NULL,
	[maturity_dt] [datetime] NULL,
	[mdy_debt_class_cd] [char](3) NULL,
	[mdy_rating_cd] [varchar](30) NULL,
	[mdy_rating_dt] [datetime] NULL,
	[mdy_st_rtng_cd] [varchar](30) NULL,
	[mdy_st_rtng_dt] [datetime] NULL,
	[mdy_watch_cd] [char](3) NULL,
	[mdy_watch_dt] [datetime] NULL,
	[min_credit_rating_cd] [varchar](30) NULL,
	[min_denom] [float] NULL,
	[mtn_fl] [char](1) NULL,
	[mtn_shelf_id] [char](16) NULL,
	[multistep_flt_fl] [char](1) NULL,
	[native_yld_type_cd] [char](2) NULL,
	[next_call_dt] [datetime] NULL,
	[next_call_px] [float] NULL,
	[next_mand_tender_dt] [datetime] NULL,
	[next_pay_dt] [datetime] NULL,
	[next_put_dt] [datetime] NULL,
	[next_put_px] [float] NULL,
	[next_reset_dt] [datetime] NULL,
	[next_sink_amt] [float] NULL,
	[next_sink_dt] [datetime] NULL,
	[nsin_agn_cd] [char](3) NULL,
	[nsin_nm] [varchar](20) NULL,
	[oid_fl] [char](1) NULL,
	[orig_amt_iss] [float] NULL,
	[orig_dated_dt] [datetime] NULL,
	[orig_iss_dt] [datetime] NULL,
	[pay_cal_cd] [char](3) NULL,
	[pay_cal_val] [smallint] NULL,
	[pay_freq_cd] [smallint] NULL,
	[pay_in_part_fl] [char](1) NULL,
	[perpetual_fl] [char](1) NULL,
	[physical_form_cd] [char](3) NULL,
	[pik_csh_pmt_dt] [datetime] NULL,
	[pik_fl] [char](1) NULL,
	[pik_inkind_pmt_dt] [datetime] NULL,
	[poison_put_fl] [char](1) NULL,
	[preferred_ric] [varchar](30) NULL,
	[primary_quote_id] [varchar](16) NULL,
	[prin_idx_lnk_fl] [char](1) NULL,
	[private_place_fl] [char](1) NULL,
	[project_name] [varchar](50) NULL,
	[prosp_on_file_fl] [char](1) NULL,
	[prosp_suppl_dt] [datetime] NULL,
	[prosp_suppl_nm] [varchar](8) NULL,
	[prospectus_dt] [datetime] NULL,
	[put_terms_fl] [char](1) NULL,
	[rcs_class_cd] [char](4) NULL,
	[record_dt_cd] [char](3) NULL,
	[record_dt_val] [smallint] NULL,
	[redemption_val] [float] NULL,
	[refund_dt] [datetime] NULL,
	[rrps_ric] [varchar](30) NULL,
	[rtfi_us_elig_cd] [char](3) NULL,
	[rtr_ticker] [varchar](6) NULL,
	[sec_class_cd] [char](4) NULL,
	[secondary_insu_fl] [char](1) NULL,
	[secured_fl] [char](1) NULL,
	[series] [varchar](20) NULL,
	[settle_bus_ctr_cd] [char](4) NULL,
	[sovr_class_cd] [char](4) NULL,
	[sp_debt_class_cd] [varchar](10) NULL,
	[sp_rating_cd] [varchar](30) NULL,
	[sp_rating_dt] [datetime] NULL,
	[sp_st_rtng_cd] [varchar](30) NULL,
	[sp_st_rtng_dt] [datetime] NULL,
	[sp_watch_cd] [char](3) NULL,
	[sp_watch_dt] [datetime] NULL,
	[spec_put_fl] [char](1) NULL,
	[standard_yld_type_cd] [char](2) NULL,
	[status_eff_dt] [datetime] NULL,
	[status_of_document] [int] NULL,
	[stick_suppl_fl] [char](1) NULL,
	[strip_total] [float] NULL,
	[strippable_fl] [char](1) NULL,
	[tap_end_dt] [datetime] NULL,
	[tap_issue_fl] [char](1) NULL,
	[tax_call_fl] [char](1) NULL,
	[tax_status_cd] [char](1) NULL,
	[tot_prog_amt] [float] NULL,
	[trace_cd] [char](1) NULL,
	[trace_grade_cd] [char](1) NULL,
	[unit_cd] [char](3) NULL,
	[valoren_nm] [varchar](20) NULL,
	[warrants_fl] [char](1) NULL,
	[withholding_tax] [float] NULL,
	[wpk_nm] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[assetId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
