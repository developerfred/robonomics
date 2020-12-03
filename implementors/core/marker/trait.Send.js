(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl Send for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Send for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Send for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for DepositBase","synthetic":true,"types":[]},{"text":"impl Send for DepositFactor","synthetic":true,"types":[]},{"text":"impl Send for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Send for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Send for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Send for EpochDuration","synthetic":true,"types":[]},{"text":"impl Send for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Send for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Send for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Send for MaxLocks","synthetic":true,"types":[]},{"text":"impl Send for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Send for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Send for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Send for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Send for WeightToFee","synthetic":true,"types":[]},{"text":"impl Send for SessionKeys","synthetic":true,"types":[]},{"text":"impl Send for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Send for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Send for BondingDuration","synthetic":true,"types":[]},{"text":"impl Send for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl Send for RewardCurve","synthetic":true,"types":[]},{"text":"impl Send for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl Send for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl Send for MaxIterations","synthetic":true,"types":[]},{"text":"impl Send for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl Send for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl Send for WindowSize","synthetic":true,"types":[]},{"text":"impl Send for ReportLatency","synthetic":true,"types":[]},{"text":"impl Send for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Send for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Send for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Send for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Send for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Send for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Send for SessionDuration","synthetic":true,"types":[]},{"text":"impl Send for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Send for Runtime","synthetic":true,"types":[]},{"text":"impl !Send for Origin","synthetic":true,"types":[]},{"text":"impl Send for PalletInfo","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for OriginCaller","synthetic":true,"types":[]},{"text":"impl Send for Call","synthetic":true,"types":[]},{"text":"impl Send for STAKE_HOLDERS","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Send for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["node_cli"] = [{"text":"impl Send for Cli","synthetic":true,"types":[]},{"text":"impl Send for RunCmd","synthetic":true,"types":[]},{"text":"impl Send for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl Send for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl Send for Subcommand","synthetic":true,"types":[]},{"text":"impl Send for Extensions","synthetic":true,"types":[]},{"text":"impl Send for RobonomicsFamily","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; Send for LightDeps&lt;C, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Send for GrandpaDeps&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Send for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Moment, Record&gt; Send for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameter&gt; Send for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; Send for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Index: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Liability: Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Send for OpenMarket&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; Send for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for AppProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for PureIPFS","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; Send for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Send for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Call: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Send for IoCmd","synthetic":true,"types":[]},{"text":"impl Send for SinkCmd","synthetic":true,"types":[]},{"text":"impl Send for SourceCmd","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl Send for SessionKeys","synthetic":true,"types":[]},{"text":"impl Send for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Send for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Send for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for DepositBase","synthetic":true,"types":[]},{"text":"impl Send for DepositFactor","synthetic":true,"types":[]},{"text":"impl Send for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Send for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Send for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Send for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Send for TransferFee","synthetic":true,"types":[]},{"text":"impl Send for CreationFee","synthetic":true,"types":[]},{"text":"impl Send for MaxLocks","synthetic":true,"types":[]},{"text":"impl Send for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Send for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Send for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Send for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Send for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Send for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Send for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Send for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Send for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Send for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Send for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Send for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Send for ProposalBond","synthetic":true,"types":[]},{"text":"impl Send for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Send for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Send for Burn","synthetic":true,"types":[]},{"text":"impl Send for TipCountdown","synthetic":true,"types":[]},{"text":"impl Send for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Send for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Send for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Send for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Send for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Send for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Send for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Send for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Send for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Send for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Send for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Send for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Send for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Send for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Send for VotingBond","synthetic":true,"types":[]},{"text":"impl Send for TermDuration","synthetic":true,"types":[]},{"text":"impl Send for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Send for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Send for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Send for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Send for WeightLimit","synthetic":true,"types":[]},{"text":"impl Send for PointsLimit","synthetic":true,"types":[]},{"text":"impl Send for Runtime","synthetic":true,"types":[]},{"text":"impl !Send for Origin","synthetic":true,"types":[]},{"text":"impl Send for PalletInfo","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for OriginCaller","synthetic":true,"types":[]},{"text":"impl Send for Call","synthetic":true,"types":[]},{"text":"impl Send for STAKE_HOLDERS","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Send for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl Send for PubSub","synthetic":true,"types":[]},{"text":"impl Send for Robonomics","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for EreaseCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for DatalogStore&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl Send for DealWithFees","synthetic":true,"types":[]},{"text":"impl Send for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Send for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Send for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for DepositBase","synthetic":true,"types":[]},{"text":"impl Send for DepositFactor","synthetic":true,"types":[]},{"text":"impl Send for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Send for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Send for EpochDuration","synthetic":true,"types":[]},{"text":"impl Send for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Send for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Send for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Send for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Send for TransferFee","synthetic":true,"types":[]},{"text":"impl Send for CreationFee","synthetic":true,"types":[]},{"text":"impl Send for MaxLocks","synthetic":true,"types":[]},{"text":"impl Send for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Send for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Send for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Send for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Send for SessionKeys","synthetic":true,"types":[]},{"text":"impl Send for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Send for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Send for BondingDuration","synthetic":true,"types":[]},{"text":"impl Send for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl Send for RewardCurve","synthetic":true,"types":[]},{"text":"impl Send for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl Send for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl Send for MaxIterations","synthetic":true,"types":[]},{"text":"impl Send for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl Send for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl Send for WindowSize","synthetic":true,"types":[]},{"text":"impl Send for ReportLatency","synthetic":true,"types":[]},{"text":"impl Send for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Send for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Send for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Send for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Send for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Send for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Send for SessionDuration","synthetic":true,"types":[]},{"text":"impl Send for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Send for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Send for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Send for ProposalBond","synthetic":true,"types":[]},{"text":"impl Send for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Send for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Send for Burn","synthetic":true,"types":[]},{"text":"impl Send for TipCountdown","synthetic":true,"types":[]},{"text":"impl Send for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Send for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Send for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Send for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Send for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Send for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Send for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Send for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Send for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Send for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Send for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Send for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Send for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Send for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Send for VotingBond","synthetic":true,"types":[]},{"text":"impl Send for TermDuration","synthetic":true,"types":[]},{"text":"impl Send for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Send for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Send for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Send for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Send for WeightLimit","synthetic":true,"types":[]},{"text":"impl Send for PointsLimit","synthetic":true,"types":[]},{"text":"impl Send for Runtime","synthetic":true,"types":[]},{"text":"impl !Send for Origin","synthetic":true,"types":[]},{"text":"impl Send for PalletInfo","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for OriginCaller","synthetic":true,"types":[]},{"text":"impl Send for Call","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Send for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Send for Author&lt;P, Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; Send for FullChain&lt;Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; Send for FullState&lt;BE, Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; Send for System&lt;B, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as Block&gt;::Hash: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as Block&gt;::Header: Header,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;B as Block&gt;::Header as Header&gt;::Number: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Send for Bool","synthetic":true,"types":[]},{"text":"impl Send for Time","synthetic":true,"types":[]},{"text":"impl Send for UInt64","synthetic":true,"types":[]},{"text":"impl Send for String","synthetic":true,"types":[]},{"text":"impl Send for BlockHash","synthetic":true,"types":[]},{"text":"impl Send for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Send for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl Send for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl Send for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl Send for StateCallReq","synthetic":true,"types":[]},{"text":"impl Send for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl Send for StorageHashReq","synthetic":true,"types":[]},{"text":"impl Send for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Send for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl Send for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl Send for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl Send for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl Send for StorageHashRes","synthetic":true,"types":[]},{"text":"impl Send for GetBlockRes","synthetic":true,"types":[]},{"text":"impl Send for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl Send for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl Send for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl Send for ExHash","synthetic":true,"types":[]},{"text":"impl Send for StateCallRes","synthetic":true,"types":[]},{"text":"impl Send for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Send for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl Send for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl Send for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl Send for StorageKey","synthetic":true,"types":[]},{"text":"impl Send for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl Send for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl Send for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl Send for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl Send for GetBlockReq","synthetic":true,"types":[]},{"text":"impl Send for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl Send for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Send for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl Send for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl Send for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl Send for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl Send for SystemHealth","synthetic":true,"types":[]},{"text":"impl Send for StateCall","synthetic":true,"types":[]},{"text":"impl Send for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl Send for StorageQuery","synthetic":true,"types":[]},{"text":"impl Send for GetBlock","synthetic":true,"types":[]},{"text":"impl Send for GetBestHead","synthetic":true,"types":[]},{"text":"impl Send for GetBlockHash","synthetic":true,"types":[]},{"text":"impl Send for StorageSize","synthetic":true,"types":[]},{"text":"impl Send for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl Send for StorageHash","synthetic":true,"types":[]},{"text":"impl Send for StorageKeys","synthetic":true,"types":[]},{"text":"impl Send for TriggerRes","synthetic":true,"types":[]},{"text":"impl Send for TriggerReq","synthetic":true,"types":[]},{"text":"impl Send for Trigger","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()