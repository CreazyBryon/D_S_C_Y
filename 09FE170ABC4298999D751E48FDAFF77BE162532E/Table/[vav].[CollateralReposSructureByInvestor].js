SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[CollateralReposSructureByInvestor]') AND type in (N'U'))
BEGIN
CREATE TABLE [vav].[CollateralReposSructureByInvestor](
	[date] [datetime] NOT NULL,
	[id] [int] NOT NULL,
	[repo_total] [float] NULL,
	[repo_total_year] [float] NULL,
	[reverserepo_total] [float] NULL,
	[reverserepo_total_year] [float] NULL,
	[repo_principal] [float] NULL,
	[repo_principal_year] [float] NULL,
	[reverserepo_principal] [float] NULL,
	[reverserepo_principal_year] [float] NULL,
	[repo_agent] [float] NULL,
	[repo_agent_year] [float] NULL,
	[reverserepo_agent] [float] NULL,
	[reverserepo_agent_year] [float] NULL,
	[last_update] [datetime] NULL,
	[row_index] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[date] ASC,
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
