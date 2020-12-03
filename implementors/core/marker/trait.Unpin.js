(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl Unpin for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Unpin for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for DepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for DepositFactor","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Unpin for EpochDuration","synthetic":true,"types":[]},{"text":"impl Unpin for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Unpin for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxLocks","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Unpin for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Unpin for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Unpin for WeightToFee","synthetic":true,"types":[]},{"text":"impl Unpin for SessionKeys","synthetic":true,"types":[]},{"text":"impl Unpin for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Unpin for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Unpin for BondingDuration","synthetic":true,"types":[]},{"text":"impl Unpin for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl Unpin for RewardCurve","synthetic":true,"types":[]},{"text":"impl Unpin for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl Unpin for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl Unpin for MaxIterations","synthetic":true,"types":[]},{"text":"impl Unpin for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl Unpin for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl Unpin for WindowSize","synthetic":true,"types":[]},{"text":"impl Unpin for ReportLatency","synthetic":true,"types":[]},{"text":"impl Unpin for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Unpin for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Unpin for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Unpin for SessionDuration","synthetic":true,"types":[]},{"text":"impl Unpin for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Unpin for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Unpin for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Unpin for Runtime","synthetic":true,"types":[]},{"text":"impl Unpin for Origin","synthetic":true,"types":[]},{"text":"impl Unpin for PalletInfo","synthetic":true,"types":[]},{"text":"impl Unpin for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; Unpin for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing: Hasher + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Header: Header,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as CallApiAt&lt;Block&gt;&gt;::StateBackend as Backend&lt;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing&gt;&gt;::Transaction: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for OriginCaller","synthetic":true,"types":[]},{"text":"impl Unpin for Call","synthetic":true,"types":[]},{"text":"impl Unpin for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["node_cli"] = [{"text":"impl Unpin for Cli","synthetic":true,"types":[]},{"text":"impl Unpin for RunCmd","synthetic":true,"types":[]},{"text":"impl Unpin for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl Unpin for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl Unpin for Subcommand","synthetic":true,"types":[]},{"text":"impl Unpin for Extensions","synthetic":true,"types":[]},{"text":"impl Unpin for RobonomicsFamily","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; Unpin for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Unpin for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Unpin for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; Unpin for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Moment, Record&gt; Unpin for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; Unpin for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameter&gt; Unpin for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T&gt; Unpin for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; Unpin for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Index: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Liability: Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Unpin for OpenMarket&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; Unpin for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for AppProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PureIPFS","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; Unpin for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Unpin for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Unpin for IoCmd","synthetic":true,"types":[]},{"text":"impl Unpin for SinkCmd","synthetic":true,"types":[]},{"text":"impl Unpin for SourceCmd","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl Unpin for SessionKeys","synthetic":true,"types":[]},{"text":"impl Unpin for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Unpin for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for DepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for DepositFactor","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for TransferFee","synthetic":true,"types":[]},{"text":"impl Unpin for CreationFee","synthetic":true,"types":[]},{"text":"impl Unpin for MaxLocks","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Unpin for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Unpin for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Unpin for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Unpin for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Unpin for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Unpin for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalBond","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Unpin for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for Burn","synthetic":true,"types":[]},{"text":"impl Unpin for TipCountdown","synthetic":true,"types":[]},{"text":"impl Unpin for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Unpin for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Unpin for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Unpin for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Unpin for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Unpin for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Unpin for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Unpin for VotingBond","synthetic":true,"types":[]},{"text":"impl Unpin for TermDuration","synthetic":true,"types":[]},{"text":"impl Unpin for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Unpin for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Unpin for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Unpin for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Unpin for WeightLimit","synthetic":true,"types":[]},{"text":"impl Unpin for PointsLimit","synthetic":true,"types":[]},{"text":"impl Unpin for Runtime","synthetic":true,"types":[]},{"text":"impl Unpin for Origin","synthetic":true,"types":[]},{"text":"impl Unpin for PalletInfo","synthetic":true,"types":[]},{"text":"impl Unpin for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; Unpin for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing: Hasher + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Header: Header,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as CallApiAt&lt;Block&gt;&gt;::StateBackend as Backend&lt;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing&gt;&gt;::Transaction: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for OriginCaller","synthetic":true,"types":[]},{"text":"impl Unpin for Call","synthetic":true,"types":[]},{"text":"impl Unpin for STAKE_HOLDERS","synthetic":true,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for Message","synthetic":true,"types":[]},{"text":"impl Unpin for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl Unpin for PubSub","synthetic":true,"types":[]},{"text":"impl Unpin for Robonomics","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for EreaseCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for DatalogStore&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl Unpin for DealWithFees","synthetic":true,"types":[]},{"text":"impl Unpin for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Unpin for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for DepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for DepositFactor","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for EpochDuration","synthetic":true,"types":[]},{"text":"impl Unpin for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Unpin for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Unpin for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for TransferFee","synthetic":true,"types":[]},{"text":"impl Unpin for CreationFee","synthetic":true,"types":[]},{"text":"impl Unpin for MaxLocks","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Unpin for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Unpin for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Unpin for SessionKeys","synthetic":true,"types":[]},{"text":"impl Unpin for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Unpin for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Unpin for BondingDuration","synthetic":true,"types":[]},{"text":"impl Unpin for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl Unpin for RewardCurve","synthetic":true,"types":[]},{"text":"impl Unpin for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl Unpin for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl Unpin for MaxIterations","synthetic":true,"types":[]},{"text":"impl Unpin for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl Unpin for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl Unpin for WindowSize","synthetic":true,"types":[]},{"text":"impl Unpin for ReportLatency","synthetic":true,"types":[]},{"text":"impl Unpin for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Unpin for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Unpin for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Unpin for SessionDuration","synthetic":true,"types":[]},{"text":"impl Unpin for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Unpin for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Unpin for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Unpin for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalBond","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Unpin for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for Burn","synthetic":true,"types":[]},{"text":"impl Unpin for TipCountdown","synthetic":true,"types":[]},{"text":"impl Unpin for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Unpin for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Unpin for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Unpin for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Unpin for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Unpin for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Unpin for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Unpin for VotingBond","synthetic":true,"types":[]},{"text":"impl Unpin for TermDuration","synthetic":true,"types":[]},{"text":"impl Unpin for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Unpin for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Unpin for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Unpin for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Unpin for WeightLimit","synthetic":true,"types":[]},{"text":"impl Unpin for PointsLimit","synthetic":true,"types":[]},{"text":"impl Unpin for Runtime","synthetic":true,"types":[]},{"text":"impl Unpin for Origin","synthetic":true,"types":[]},{"text":"impl Unpin for PalletInfo","synthetic":true,"types":[]},{"text":"impl Unpin for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; Unpin for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing: Hasher + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Header: Header,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as CallApiAt&lt;Block&gt;&gt;::StateBackend as Backend&lt;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing&gt;&gt;::Transaction: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for OriginCaller","synthetic":true,"types":[]},{"text":"impl Unpin for Call","synthetic":true,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Unpin for Author&lt;P, Client&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; Unpin for FullChain&lt;Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; Unpin for FullState&lt;BE, Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; Unpin for System&lt;B, H&gt;","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Unpin for Bool","synthetic":true,"types":[]},{"text":"impl Unpin for Time","synthetic":true,"types":[]},{"text":"impl Unpin for UInt64","synthetic":true,"types":[]},{"text":"impl Unpin for String","synthetic":true,"types":[]},{"text":"impl Unpin for BlockHash","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl Unpin for StateCallReq","synthetic":true,"types":[]},{"text":"impl Unpin for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageHashReq","synthetic":true,"types":[]},{"text":"impl Unpin for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageHashRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl Unpin for ExHash","synthetic":true,"types":[]},{"text":"impl Unpin for StateCallRes","synthetic":true,"types":[]},{"text":"impl Unpin for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKey","synthetic":true,"types":[]},{"text":"impl Unpin for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Unpin for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl Unpin for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl Unpin for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealth","synthetic":true,"types":[]},{"text":"impl Unpin for StateCall","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl Unpin for StorageQuery","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlock","synthetic":true,"types":[]},{"text":"impl Unpin for GetBestHead","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHash","synthetic":true,"types":[]},{"text":"impl Unpin for StorageSize","synthetic":true,"types":[]},{"text":"impl Unpin for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl Unpin for StorageHash","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKeys","synthetic":true,"types":[]},{"text":"impl Unpin for TriggerRes","synthetic":true,"types":[]},{"text":"impl Unpin for TriggerReq","synthetic":true,"types":[]},{"text":"impl Unpin for Trigger","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()