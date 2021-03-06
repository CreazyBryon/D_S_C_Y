﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[ejv].[govcorp.party_rating]') AND type in (N'U'))
BEGIN
CREATE TABLE [ejv].[govcorp.party_rating](
	[partyId] [varchar](32) NOT NULL,
	[party_rating_src_cd] [char](3) NOT NULL,
	[party_rating_scope_cd] [char](1) NOT NULL,
	[party_outlook_cd] [varchar](15) NULL,
	[party_outlook_eff_dt] [datetime] NULL,
	[party_preliminary_fl] [char](1) NULL,
	[party_prev_rating_cd] [varchar](30) NULL,
	[party_prev_rating_dt] [datetime] NULL,
	[party_rating_cd] [varchar](30) NULL,
	[party_rating_eff_dt] [datetime] NULL,
	[party_unsolicited_fl] [char](1) NULL,
	[party_verified_dt] [datetime] NULL,
	[party_watch_cd] [varchar](15) NULL,
	[party_watch_eff_dt] [datetime] NULL
) ON [PRIMARY]
END
GO
