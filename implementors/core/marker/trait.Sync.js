(function() {var implementors = {};
implementors["ipci_runtime"] = [{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for DepositBase","synthetic":true,"types":[]},{"text":"impl Sync for DepositFactor","synthetic":true,"types":[]},{"text":"impl Sync for MaxSignatories","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Sync for EpochDuration","synthetic":true,"types":[]},{"text":"impl Sync for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Sync for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Sync for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Sync for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Sync for WeightToFee","synthetic":true,"types":[]},{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Sync for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Sync for BondingDuration","synthetic":true,"types":[]},{"text":"impl Sync for SlashDeferDuration","synthetic":true,"types":[]},{"text":"impl Sync for RewardCurve","synthetic":true,"types":[]},{"text":"impl Sync for MaxNominatorRewardedPerValidator","synthetic":true,"types":[]},{"text":"impl Sync for ElectionLookahead","synthetic":true,"types":[]},{"text":"impl Sync for MaxIterations","synthetic":true,"types":[]},{"text":"impl Sync for MinSolutionScoreBump","synthetic":true,"types":[]},{"text":"impl Sync for OffchainSolutionWeightLimit","synthetic":true,"types":[]},{"text":"impl Sync for WindowSize","synthetic":true,"types":[]},{"text":"impl Sync for ReportLatency","synthetic":true,"types":[]},{"text":"impl Sync for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Sync for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Sync for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Sync for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Sync for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Sync for SessionDuration","synthetic":true,"types":[]},{"text":"impl Sync for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Sync for StakingUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Sync for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for STAKE_HOLDERS","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["node_cli"] = [{"text":"impl Sync for Cli","synthetic":true,"types":[]},{"text":"impl Sync for RunCmd","synthetic":true,"types":[]},{"text":"impl Sync for Subcommand","synthetic":true,"types":[]},{"text":"impl Sync for Extensions","synthetic":true,"types":[]},{"text":"impl Sync for RobonomicsFamily","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; Sync for LightDeps&lt;C, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Sync for GrandpaDeps&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Sync for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Moment, Record&gt; Sync for RawEvent&lt;AccountId, Moment, Record&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Record: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog_xcm"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_digital_twin"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameter&gt; Sync for RawEvent&lt;AccountId, Parameter&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameter: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch_xcm"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; Sync for RawEvent&lt;AccountId, LiabilityIndex, TechnicalParam, EconomicalParam, TechnicalReport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;EconomicalParam: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;LiabilityIndex: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalParam: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;TechnicalReport: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Index: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Liability: Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Sync for OpenMarket&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; Sync for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for AppProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for PureIPFS","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Call: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Sync for IoCmd","synthetic":true,"types":[]},{"text":"impl Sync for SinkCmd","synthetic":true,"types":[]},{"text":"impl Sync for SourceCmd","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Sync for Error","synthetic":true,"types":[]}];
implementors["robonomics_parachain_runtime"] = [{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Sync for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Sync for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Sync for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Sync for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Sync for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Sync for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Sync for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBond","synthetic":true,"types":[]},{"text":"impl Sync for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Sync for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Sync for Burn","synthetic":true,"types":[]},{"text":"impl Sync for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Sync for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Sync for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Sync for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Sync for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Sync for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Sync for TipCountdown","synthetic":true,"types":[]},{"text":"impl Sync for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Sync for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Sync for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Sync for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Sync for VotingBondBase","synthetic":true,"types":[]},{"text":"impl Sync for VotingBondFactor","synthetic":true,"types":[]},{"text":"impl Sync for TermDuration","synthetic":true,"types":[]},{"text":"impl Sync for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Sync for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Sync for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Sync for RococoLocation","synthetic":true,"types":[]},{"text":"impl Sync for RococoNetwork","synthetic":true,"types":[]},{"text":"impl Sync for RelayChainOrigin","synthetic":true,"types":[]},{"text":"impl Sync for Ancestry","synthetic":true,"types":[]},{"text":"impl Sync for XcmConfig","synthetic":true,"types":[]},{"text":"impl Sync for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Sync for WeightLimit","synthetic":true,"types":[]},{"text":"impl Sync for PointsLimit","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for STAKE_HOLDERS","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl Sync for PubSub","synthetic":true,"types":[]},{"text":"impl Sync for Robonomics","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for EreaseCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for DatalogStore&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_runtime"] = [{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Sync for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Sync for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Sync for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for EpochDuration","synthetic":true,"types":[]},{"text":"impl Sync for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Sync for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Sync for WeightLimit","synthetic":true,"types":[]},{"text":"impl Sync for PointsLimit","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Sync for Author&lt;P, Client&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; Sync for FullChain&lt;Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; Sync for FullState&lt;BE, Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; Sync for System&lt;B, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as Block&gt;::Hash: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as Block&gt;::Header: Header,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;B as Block&gt;::Header as Header&gt;::Number: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Sync for StorageHashRes","synthetic":true,"types":[]},{"text":"impl Sync for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl Sync for StorageHashReq","synthetic":true,"types":[]},{"text":"impl Sync for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl Sync for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl Sync for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl Sync for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl Sync for ExHash","synthetic":true,"types":[]},{"text":"impl Sync for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl Sync for StateCallRes","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockRes","synthetic":true,"types":[]},{"text":"impl Sync for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl Sync for StateCallReq","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl Sync for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl Sync for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl Sync for StorageKey","synthetic":true,"types":[]},{"text":"impl Sync for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl Sync for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Sync for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl Sync for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl Sync for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl Sync for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Sync for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl Sync for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl Sync for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockReq","synthetic":true,"types":[]},{"text":"impl Sync for BlockHash","synthetic":true,"types":[]},{"text":"impl Sync for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Sync for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl Sync for StorageSize","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl Sync for StorageHash","synthetic":true,"types":[]},{"text":"impl Sync for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl Sync for SystemHealth","synthetic":true,"types":[]},{"text":"impl Sync for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl Sync for StateCall","synthetic":true,"types":[]},{"text":"impl Sync for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl Sync for StorageQuery","synthetic":true,"types":[]},{"text":"impl Sync for GetBestHead","synthetic":true,"types":[]},{"text":"impl Sync for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl Sync for GetBlockHash","synthetic":true,"types":[]},{"text":"impl Sync for GetBlock","synthetic":true,"types":[]},{"text":"impl Sync for StorageKeys","synthetic":true,"types":[]},{"text":"impl Sync for Bool","synthetic":true,"types":[]},{"text":"impl Sync for UInt64","synthetic":true,"types":[]},{"text":"impl Sync for String","synthetic":true,"types":[]},{"text":"impl Sync for Time","synthetic":true,"types":[]},{"text":"impl Sync for TriggerRes","synthetic":true,"types":[]},{"text":"impl Sync for TriggerReq","synthetic":true,"types":[]},{"text":"impl Sync for Trigger","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()