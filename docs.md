Integrate Tempo Testnet
Tempo is fully compatible with the Ethereum Virtual Machine (EVM), targeting the Osaka EVM hard fork. So, everything you'd expect to work with Ethereum works on Tempo, with only a few exceptions which we detail on the EVM Differences page.
Looking for the faucet?
Click here to deposit testnet funds directly into your wallet.
Connect to the Network
Learn how to connect to the Tempo Testnet with your wallet or programmatically.
Explore Testnet Integrations
Integrate right away with the developer products you're already familiar with.
Wallet Developers
Support Tempo in your wallet and deliver an enhanced experience for your users.
Start Building
The guides below will help you get a sense for what is possible to do with Tempo. All of the guides below are fully-featured Tempo applications themselves, built with the Tempo SDKs.
Create & Use Accounts
Create and integrate Tempo accounts with domain-bound passkeys or EVM-compatible wallets
Make Payments
Send and receive stablecoin payments with flexible fee options and sponsorship capabilities
Issue Stablecoins
Create and manage your own stablecoin with built-in compliance features
Exchange Stablecoins
Trade between stablecoins on Tempo's enshrined decentralized exchange
Ready to build?
Check out the Tempo SDKs for language-specific clients to dive in yourself.
Go Deeper
The Tempo source code is fully open-source and available on GitHub.
If you're interested in learning more about how Tempo works under the hood, feel free to explore the codebase directly, run a node for yourself, or refer to the protocol specifications for a deeper understanding.
Run a Tempo Node
System requirements, installation and usage instructions for running a Tempo node.
Protocol Specifications
Technical specifications for tokens, fees, transactions, and protocol components.
We welcome contributions from the community to help improve and expand the project.
Connect to the Network
You can connect with the Tempo Testnet like you would with any other EVM chain.
Connect using a Browser Wallet
Click on your browser wallet below to automatically connect it to the Tempo Testnet.
0xbB10⋅⋅⋅17ACSign out
Add Tempo to MetaMask
Note that on some wallets, you might see an unusually high "balance". This is because, historically, blockchain wallets have always assumed that a blockchain has a "native gas token". On Tempo, there is no native gas token, and so the value shown is a placeholder. See EVM Differences for more information on this quirk.
Connect via CLI
To connect via CLI, we recommend using cast, which is a command-line tool for interacting with Ethereum networks. To install cast, you can read more in the Foundry SDK docs.
# Check block height (should be steadily increasing)cast block-number --rpc-url https://rpc.testnet.tempo.xyz
Direct Connection Details
If you're manually connecting to Tempo Testnet, you can use the following details:
Property
	Value
	Network Name
	Tempo Testnet (Andantino)
	Currency
	USD
	Chain ID
	42429
	HTTP URL
	https://rpc.testnet.tempo.xyz
	WebSocket URL
	wss://rpc.testnet.tempo.xyz
	Block Explorer
	https://explore.tempo.xyz
	Faucet
Get test stablecoins funded to your account using the form below after you connect your wallet.
Use the Faucet
demo
Restart
1
Connect your browser wallet.
0xbB10⋅⋅⋅17ACDisconnect
Add Tempo to MetaMask
Add testnet funds to your wallet.
Add more funds
3
Add tokens to your wallet token list.
Show tokens
4
Set your fee token for EVM transactions.
AlphaUSDBetaUSDThetaUSDOther (custom)Set fee token
Balances
The faucet funds the following assets.
Asset
	Address
	Amount
	AlphaUSD
	0x20c0000000000000000000000000000000000001
	1M
	BetaUSD
	0x20c0000000000000000000000000000000000002
	1M
	ThetaUSD
	0x20c0000000000000000000000000000000000003
	1M
	Funding others
You can use the faucet to send funds to any address
Send Faucet Funds to Others
demo
Restart
1
Add testnet funds to an address.
Add funds
Address to fund
Developer Tools
Integrating with Tempo is easy by leveraging services provided by our infrastructure partners. These partners take advantage of Tempo transactions, TIP-20 tokens, and more. Visit their documentation for more information on how to get started.
Data & Analytics
Query blockchain data with indexers, analytics platforms, and monitoring tools
Block Explorers
View transactions, blocks, accounts, and token activity on Tempo
Embedded Wallets
Integrate user-friendly wallet experiences directly into your application
Smart Contract Libraries
Build with account abstraction and programmable smart contract wallets
Node Infrastructure
Connect to Tempo with reliable RPC endpoints and managed node services
Tempo SDKs
Build on Tempo with official SDKs for TypeScript, Go, Foundry, and Rust
Are you building a developer product on Tempo?
Reach out to get listed on this page.
Are you a wallet developer?
Read our guide for wallet developers to get started.
Data & Analytics
Allium
Allium is an enterprise blockchain data platform that delivers real-time, analytics-ready datasets through a unified schema across chains. Developers can fetch wallet, token, and price data in milliseconds without managing infrastructure, decoding raw data, or inferring transactions—making it easy to focus on building Tempo applications.
Get access to Tempo data through the Allium App, explore the full API in the Allium docs, and browse real examples of production apps built on Allium here.
Allium has a ready-to-use recipe for querying Tempo data with SQL.
Artemis
Artemis provides a unified analytics terminal for monitoring onchain activity across stablecoins, assets, and networks. Developers use Artemis to analyze flows, liquidity, token performance, and ecosystem-level trends through a clean, queryable interface.
Tempo is already supported within Artemis, with a dedicated analytics page for Tempo Testnet.
Artemis also maintains a cross-chain stablecoin dashboard covering major USD-pegged assets across numerous networks. Stablecoins launched on Tempo will appear in the Stablecoins dashboard.
Chainlink
Chainlink is the industry-standard oracle platform powering the majority of DeFi and bringing capital markets onchain. The Chainlink stack provides the data, interoperability, and security needed for tokenized assets, stablecoins, payments, lending, and other advanced onchain use cases.
Chainlink supports Tempo through:
* Cross-Chain Interoperability Protocol (CCIP): A secure interoperability layer for sending messages and value across chains, enabling cross-chain user flows and multi-chain architectures.
Explore CCIP in the Chainlink CCIP docs.
* Data Streams: Chainlink Data Streams delivers low-latency market data offchain, which can be verified onchain. This pull-based design gives dApps on-demand access to high-frequency market data backed by decentralized, fault-tolerant, and transparent infrastructure—an improvement over traditional push-based oracles that update only at fixed intervals or price thresholds.
View the Chainlink Data Stream deployed on Tempo here.
Developers can explore CCIP, Data Streams, and the full Chainlink platform through the Chainlink Developer Docs.
Goldsky
Goldsky makes it easy to access real-time Tempo data with minimal maintenance. Goldsky offers two core products for indexing and streaming onchain data:
   * Subgraphs: A fully backwards-compatible subgraph indexing solution that handles reorgs, RPC failures, and scaling automatically, with improved reliability and performance over traditional subgraph hosts.
   * Mirror: A simple way to replicate subgraph or chain-level streams directly into your own databases or message queues, powering flexible front-end and back-end data pipelines.
Start indexing Tempo here.
Range
Range powers the Stablecoin Explorer, which provides a unified view of major stablecoins across 100+ chains. Tempo is fully supported, allowing developers and users to trace stablecoin flows in a way traditional explorers cannot.
Range stands out through:
   * Complete cross-chain visibility, showing the entire lifecycle of a transfer in one place
   * Enriched context, including bridge routes, verified entities, and risk signals
   * Built-in compliance checks via global sanctions lists
Explore Tempo activity in the Stablecoin Explorer.
Block Explorers
Tempo Explorer
Tempo's official block explorer is available at explore.tempo.xyz. View transactions, blocks, accounts, and token activity on the Tempo network.
Blockscout
Blockscout provides an open-source block explorer with support for Tempo’s network. Developers can use Blockscout to inspect Tempo transactions, contracts, and account activity.
Visit the Tempo Blockscout Explorer.
Tenderly
Tenderly delivers full-stack observability, debugging, and simulation tools for Tempo smart contract development and monitoring. With Tenderly you get real-time error tracking, EVM-level tracing, and off-chain transaction simulation — enabling you to catch bugs, analyze reverts, and inspect gas usage before transactions go live.
You can enable Tempo in the Tenderly Dashboard to use its tracing, alerts, and debugging tools with no infrastructure to manage.
Embedded Wallets
Blockradar
Blockradar provides non-custodial wallet infrastructure purpose-built for fintechs running stablecoin payments. The platform focuses on real financial use cases, from merchant settlement to cross-border payouts, with tools designed for payments, compliance, treasury operations, and multi-chain liquidity. Explore the full platform in the Blockradar Docs.
Wallet and Payment Operations: Through one unified API, teams can issue wallets for users, merchants, or treasury; accept fiat inflows through virtual accounts; enable gasless stablecoin transactions; apply AML checks automatically; consolidate balances through configurable sweeps; and handle cross-chain movement using swap and bridge. Fintechs can start building immediately from our API or Blockradar Dashboard. For advanced flows or high-volume programs, fintechs can book a demo to walk through production architectures.
Crossmint
Crossmint is an all-in-one platform, with unified APIs for wallets, stablecoin orchestration, checkout flows, and tokenization, giving developers a single interface for everything from payments to asset management on Tempo.
Crossmint delivers a gasless, seed-phrase-free UX backed by bank-grade security and compliance, along with no-code dashboards for managing programs across your team.
Set up a project in the Crossmint console and explore the Solution Guide tailored for payment use-cases.
Dynamic
Dynamic combines authentication, smart wallets, and key management into a flexible SDK for Tempo developers. Teams can onboard users with familiar login methods and provision Tempo-compatible wallets through Dynamic’s secure infrastructure.
Enable Tempo testnet in the Dynamic dashboard, and create an account here to start integrating Dynamic into your app.
Para
Para is a comprehensive wallet and authentication suite for fintech and crypto applications. It provides flexible login methods, secure MPC-backed wallets, fast authentication, and infrastructure for automating onchain activity. Para is adding Tempo chain support so developers can easily build Tempo-enabled wallets and payment flows.
Get started by signing up through the Para Dev Portal and following the quickstart in the Para docs.
Privy
Privy builds secure key management and embedded wallets so any developer can easily build secure, scalable wallets into their app. Easily spin up self-custodial wallets for users, manage your treasury wallets and more.
Privy takes advantage of Tempo-native experiences to enable better stablecoin and payments experiences. Easily enable gas sponsorship, leverage webhooks for onchain events, delegated signatures, simple wallet funding, etc.
You can get started now. Simply create an ethereum wallet with Privy and pass in "caip2": "eip155:42429" when making transactions.
Check out Privy's example peer-to-peer payments app that uses Tempo transaction memos.
thirdweb
thirdweb provides a full-stack developer platform for building modern onchain applications. Developers can create wallets, deploy tokens, use blockchain-native AI tools, and integrate native internet payments—all with built-in support for Tempo. Access the Tempo Testnet via the thirdweb dashboard and explore tooling in the Thirdweb developer docs.
Try features live in the thirdweb Playground and create an account by signing up here.
Turnkey
Turnkey provides programmable key management and non-custodial wallet infrastructure for applications that need granular signing policies and automated transaction flows. With Turnkey, developers can securely sign Tempo transactions, automate wallet operations, and build custom logic around how keys are used.
Turnkey also supports sponsor-style workflows, enabling gasless or subsidized transaction flows through configurable signing policies.
Create your Turnkey account and follow the Turnkey Embedded Wallet Kit guide to integrate embedded wallets into your Tempo app.
Turnkey has a with-tempo example in their SDK to get you started quickly.
Utila
Utila provides secure MPC wallet infrastructure and asset-management tooling for teams building with stablecoins and digital assets. Developers can use Utila to manage Tempo-based payments and treasury operations across multiple wallets and blockchains, all within a single policy-driven platform. Utila’s MPC technology reduces counterparty risk, while its configurable approval engine gives teams granular control over how funds are moved.
Learn more about how Utila supports stablecoin operations on Tempo, and request a demo if you're interested in secure MPC infrastructure.
Smart Contract Libraries
Safe (coming soon)
Safe provides a modular smart account framework used across leading Web3 applications and institutions. With Safe, developers can build Tempo applications that take advantage of multi-sig controls, programmable permissions, session keys, and automated transaction policies.
Safe integration for Tempo is coming soon. Stay tuned for updates as support becomes available.
ZeroDev
ZeroDev provides a powerful smart account platform for Tempo, supporting both ERC-4337 and EIP-7702. Developers can onboard users with social logins, enable gas sponsorship, and automate transactions while taking advantage of ZeroDev’s chain-abstracted workflows. Its modular wallet stack also allows teams to build customized features such as custom transaction policies and tailored approval logic.
Create a project in the ZeroDev dashboard and follow the SDK quickstart to integrate smart accounts into your Tempo application.
Node Infrastructure
Alchemy
With Alchemy, build the fastest and most reliable Tempo applications, powered by industry-leading latency, uptime, and elastic throughput. Alchemy’s global RPC infrastructure supports everything from stablecoins to tokenization and large-scale consumer apps.
Sign up through the Alchemy dashboard and visit the Alchemy docs to start building.
Blockdaemon
Blockdaemon provides institutional-grade node and API infrastructure, along with staking and MPC wallet services. Their globally distributed platform supports enterprise-scale, production workloads with strong reliability and compliance guarantees.
Sign up through the Blockdaemon Developer Dashboard and deploy a Tempo node by navigating to Nodes & RPC → Deploy a Node.
Conduit
Conduit provides high-performance RPC infrastructure for Tempo Testnet. Developers can create API keys and access Tempo Testnet endpoints through the Conduit app.
View the Tempo Testnet RPC endpoint in the Conduit Hub and get started with the Tempo RPC Quickstart.
Quicknode
Quicknode is the enterprise-grade development platform for building, scaling, and launching onchain applications with speed and reliability. Their globally optimized RPC network makes it easy to run high-performance Tempo workloads from day one.
Get started on the Tempo Chain Page and follow the QuickStart guide to create your Tempo RPC endpoint.
Security & Compliance
Blockaid
Blockaid provides real-time security infrastructure for Web3 applications. Its transaction scanning and threat detection systems identify malicious activity before users sign transactions, improving safety across wallets and interfaces.
Learn how Blockaid’s transaction scanning improves security by visiting their overview page, and reach out to their team here to get started.
Chainalysis
Chainalysis delivers industry-leading on-chain intelligence, compliance, and security infrastructure. Through Hexagate, Chainalysis supports Tempo with real-time monitoring, anomaly detection, and threat insights to help developers and platforms better understand and manage on-chain risk as the ecosystem grows.
Discover how Hexagate supports Tempo here, or request a dedicated walkthrough from the Chainalysis team through their demo form.
Issuance
Brale
Brale makes it easy to issue, move, and manage stablecoins across chains. Developers can create their own stablecoin or work with existing issued assets, using Brale’s APIs to power on/off-ramps, automate payouts, and move stablecoins across ecosystems.
Brale provides two complementary APIs:
   * Stablecoin Movement & Account Management: a secure, authenticated API for orchestrating stablecoin workflows, including issuing assets, transferring funds across accounts or chains, linking financial institutions, and managing custody.
   * Stablecoin Market Data: a public, read-only API offering token metadata, stablecoin definitions, and price feeds.
With support for minting, redeeming, swapping stablecoins, and leveraging them for payouts or treasury operations, Brale gives fintechs, exchanges, and payment platforms the infrastructure to build stablecoin-enabled products on Tempo.
Brale also offers a $0 Business plan that allows teams to mint, redeem, and custody popular stablecoins at no monthly cost, making it simple to get started with Brale’s APIs before scaling.
Create your stablecoin today.
EVM Differences
Tempo is fully compatible with the Ethereum Virtual Machine (EVM), targeting the Osaka EVM hard fork. Developers can deploy and interact with smart contracts using the same tools, languages, and frameworks they use on Ethereum, such as Solidity, Foundry, and Hardhat. All Ethereum JSON-RPC methods work out of the box.
While the execution environment mirrors Ethereum's, Tempo introduces some differences optimized for payments, described below.
Wallet Differences
How Tempo handles wallet compatibility and native token representation.
Transaction Differences
Key differences when sending transactions, including fee tokens and default preferences.
VM Layer Differences
VM-level differences including balance opcodes and Solidity compatibility.
Consensus & Finality
How Tempo's consensus and finality differ from Ethereum's approach.
Wallet Differences
By default, all existing functionality will work for EVM-compatible wallets, with only a few quirks. For developers of wallets, we strongly encourage you to implement support for Tempo Transactions over regular EVM transactions. See the transaction differences for more.
If you are building a wallet, read our guide for wallet developers.
Handling ETH (native token) Balance Checks
Remember that on Tempo, there is no native gas token.
Many wallets and applications check a user's "native account balance" before letting them complete some action. In this scenario, you might see an error message like "Insufficient balance".
This stems from the return value of the eth_getBalance RPC method. When a wallet calls this method, it expects a hex string representing the "native token balance", hard-coded to be represented as an 18-decimal place number.
On Tempo, the eth_getBalance method returns a hex string representing an extremely large number. Specifically it returns: 0x9612084f0316e0ebd5182f398e5195a51b5ca47667d4c9b26c9b26c9b26c9b2 which is represented in decimals as 4.242424242424242e+75.
Our recommendation to wallets and to applications using this method is to remove this balance check, and to not represent any "native balance" in your user's UI. This will allow users to complete actions without being blocked by balance checks.
We endorse this proposed ERC to standardize this behavior.
Specifying a Native Token Currency Symbol
Sometimes wallets will need to specify the currency symbol for the native token. On Tempo, there is no native token, but fees are denominated in USD. So, we recommend using the currency symbol "USD".
Transaction Differences
Tempo Transactions
We strongly recommend using Tempo Transactions over legacy Ethereum transactions if you have control over the transaction submission, in order to leverage features like native gas sponsorship.
Dealing with the fee token selection
Tempo does not have a native gas token. Instead, fees are denominated in USD and fees can be paid in an stablecoin. For Tempo Transactions, the fee_token field can be set to any TIP-20 token, and fees are paid in that token.
If your transactions are not using Tempo Transactions, there is a cascading fee token selection algorithm that determines the default fee token based on the user's preferences and the contract being called.
This preference system is specified here in detail.
Consideration 1: Setting a user default fee token
As specified in the preference system above, the simplest way to specify the fee token for a user is to set the user default fee token. Read about how to do that here on behalf of an account.
Consideration 2: Paying fees in the TIP-20 contract being interacted with
If the user is calling a method on a TIP-20 token (e.g., transfer), the default fee token is that token itself. For example, if the user is calling the transfer method on a TIP-20 token with a symbol of "USDC", the default fee token would be "USDC".
Importantly, note that the amount field in this case is sent in full. So, if the user is calling the transfer method on a TIP-20 token with a symbol of "USDC" with the amount field set to 1000, the full amount of the token will be transferred and the sender's balance will be reduced by the amount spent in fees. So, the recipient will receive 1000 USDC.
Consideration 3: The fallback in the case of a non-TIP-20 contract
If the user is calling a contract that is not a TIP-20 token, the EVM transaction will default to the PathUSD token. Thus, in order to send transactions to non-TIP-20 contracts, the wallet must hold some balance of PathUSD.
On the Tempo Testnet, PathUSD is available from the faucet.
If a wallet wants to submit a non-TIP20 transaction without having to submit the above transaction, we recommend investing in using Tempo Transactions instead.
VM Layer Differences
At the VM layer, all opcodes are supported out of the box. Due to the lack of a native token, native token balance is always returning zero balances.
Balance Opcodes and RPC Methods
Feature
	Behavior on Tempo
	Alternatives
	BALANCE and SELFBALANCE
	Will always return 0
	Use TIP-20 balanceOf instead
	CALLVALUE
	Will always return 0
	There is no alternative
	We are exploring transaction level introspection for Tempo Transactions, with an ability to declare things like tx.fee_token and tx.fee_payer in Solidity.
Consensus & Finality
Tempo uses Simplex BFT consensus with a permissioned validator set at launch, providing deterministic finality, unlike Ethereum's finality gadget which takes approximately 12 minutes.
Block times are targeted at ~0.5 seconds compared to Ethereum's ~12 second slots.
Predeployed Contracts
System Contracts
Core protocol contracts that power Tempo's features.
Contract
	Address
	Description
	TIP-20 Factory
	0x20fc000000000000000000000000000000000000
	Create new TIP-20 tokens
	Fee Manager
	0xfeec000000000000000000000000000000000000
	Handle fee payments and conversions
	Stablecoin DEX
	0xdec0000000000000000000000000000000000000
	Enshrined DEX for stablecoin swaps
	TIP-403 Registry
	0x403c000000000000000000000000000000000000
	Transfer policy registry
	pathUSD
	0x20c0000000000000000000000000000000000000
	First stablecoin deployed
	Standard Utilities
Popular Ethereum contracts deployed for convenience.
Contract
	Address
	Description
	Multicall3
	0xcA11bde05977b3631167028862bE2a173976CA11
	Batch multiple calls in one transaction
	CreateX
	0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed
	Deterministic contract deployment
	Permit2
	0x000000000022d473030f116ddee9f6b43ac78ba3
	Token approvals and transfers
	Arachnid Create2 Factory
	0x4e59b44847b379578588920cA78FbF26c0B4956C
	CREATE2 deployment proxy
	Safe Deployer
	0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7
	Safe deployer contract
	Contract ABIs
ABIs for these contracts are available in the SDK:
import { Abis } from 'tempo.ts/viem' const tip20Abi = Abis.tip20const tip20FactoryAbi = Abis.tip20Factoryconst stablecoinExchangeAbi = Abis.stablecoinExchangeconst feeManagerAbi = Abis.feeManagerconst feeAmmAbi = Abis.feeAmm// ...
Wallet Integration Guide
Because there is no native token on Tempo and transaction fees are paid directly in stablecoins, wallets need specific UI and logic adjustments to support the network. Follow this guide if your wallet logic and/or interfaces are dependent on the existence of a native token.
As part of supporting Tempo in your wallet, you can also deliver an enhanced experience for your users by integrating Tempo Transactions. Common use cases include enabling a gasless transactions for your users, letting your users decide what token to use for fees, and more.
Steps
Handle the absence of a native token
If you use eth_getBalance to validate a user's balance, you should instead check the user's account fee token balance on Tempo. Additionally, you should not display any "native balance" in your UI for Tempo users.
In testnet, eth_getBalance returns a large placeholder value for the native token balance to unblock existing assumptions wallets have about the native token balance.
example.tsviem.config.ts
import { client } from './viem.config' const userFeeToken = await client.fee.getUserToken({  account: '0x...' }) const balance = await client.token.getBalance({  account: '0x...',  token: userFeeToken.address })
Configure native currency symbol
If you need to display a native token symbol, such as showing how much gas a transaction requires, you can set the currency symbol to USD for Tempo as fees are denominated in USD.
Use fee token preferences to quote gas prices
On Tempo, users can pay fees in any supported stablecoin. You should quote gas/fee prices in your UI based on a transaction's fee token.
As a wallet developer, you can set the fee token for your user at the account level.
If you don't, Tempo uses a cascading fee token selection algorithm to determine the fee token for a transaction – learn more about Fee Token Preferences.
Display token and network assets
Tempo provides a public tokenlist service that hosts token and network assets. You can pull these assets from our public tokenlist service to display in your UI.
   * GitHub: tempoxyz/tempo-apps/apps/tokenlist
   * Tokenlist JSON: tempoxyz.github.io/tempo-apps/42429/tokenlist.json
Integrate Tempo Transactions
We strongly recommend using Tempo Transactions if you control transaction submission. We have SDKs and guides available to get you integrated in less than an hour!
Use Tempo Transactions to
   * Set the fee token used for your users' transactions (guide)
   * Sponsor transaction fees for your users (guide)
   * Send concurrent transactions with independent nonces (guide)
Recipes
Get user's fee token
Retrieve the user's configured fee token preference:
import { getUserToken } from 'tempo.ts/viem' const feeToken = await client.fee.getUserToken({  account: userAddress })
See getUserToken for full documentation.
Get token balance
Check a user's balance for a specific token:
import { getBalance } from 'tempo.ts/viem' const balance = await client.token.getBalance({  account: userAddress,  token: tokenAddress })
See getBalance for full documentation.
Set user fee token
Set the user's default fee token preference. This will be used for all transactions unless a different fee token is specified at the transaction level.
import { setUserToken } from 'tempo.ts/viem' await client.fee.setUserTokenSync({  token: '0x20c0000000000000000000000000000000000001', })
See setUserToken for full documentation.
Checklist
Before launching Tempo support, ensure your wallet:
   *  Checks fee token balance instead of native balance
   *  Hides or removes native balance display for Tempo
   *  Displays USD as the currency symbol for gas
   *  Quotes gas prices in the user's fee token
   *  Pulls token/network assets from Tempo's tokenlist
   *  (Recommended) Integrates Tempo Transactions for enhanced UX
Learning Resources
Fee Token Preferences
Learn how fee token preferences work in the protocol
Tempo Transactions
Integrate Tempo Transactions for full control over transaction parameters
Sponsor User Fees
Sponsor user fees to enable feeless transaction experiences in your application
Pay Fees in Any Stablecoin
Pay fees in any supported stablecoin
Create & Use Accounts
Create and integrate Tempo accounts into your product with domain-bound passkeys or connecting your app to EVM-compatible wallets.
Should I use a Passkey account or a wallet?
   * If you need a domain-bound account experience, you can embed a Passkey account.
   * If you need a universal account experience, you can integrate your app with wallets.
You can even use both if you would like to offer both experiences.
Embed Passkey Accounts
Use domain-bound passkey accounts for an Embedded Account experience
Connect to Wallets
Connect your app to wallets using MetaMask and others for a Universal Account experience
Add Test Funds to Your Account
Add test stablecoins to your account balance using the testnet faucet
Embed Passkey Accounts
Create a domain-bound passkey account on Tempo using WebAuthn signatures for secure, passwordless authentication with Tempo transactions.
Passkeys enable users to authenticate with biometrics (fingerprint, Face ID, Touch ID) they already use for other apps. Keys are stored in the device's secure enclave and sync across devices via iCloud Keychain or Google Password Manager.
What does "domain-bound" mean?
WebAuthn credentials are bound to a specific domain (the Relying Party).
This means that credentials created for one domain (e.g., example.com) will only work on that domain (and its subdomains) and cannot be used to authenticate on other domains.
This means your users won't be able to use the same passkey account on other applications. If this is not what you want, head to the Connect to wallets guide that walks you through on how to connect your application to a universal wallet like MetaMask.
Demo
By the end of this guide, you will be able to embed passkey accounts into your application.
Passkey Accounts
demo
Restart
Sign out
pnpx gitpick tempoxyz/tempo-ts/tree/main/examples/accounts
Source
Steps
Set up Wagmi
Ensure that you have set up your project with Wagmi by following the guide.
Configure the WebAuthn Connector
Next, we will need to configure the webAuthn connector in our Wagmi config.
config.ts
import { createConfig, http } from 'wagmi'import { tempo } from 'tempo.ts/chains'import { KeyManager, webAuthn } from 'tempo.ts/wagmi' export const config = createConfig({  chains: [tempo({ feeToken: '0x20c0000000000000000000000000000000000001' })],  connectors: [webAuthn({    keyManager: KeyManager.localStorage(),  })],  multiInjectedProviderDiscovery: false,  transports: {    [tempo.id]: http(),  },})
The KeyManager.localStorage() implementation is not recommended for production use as it stores public keys on the client device, meaning it cannot be re-extracted when the user's storage is cleared or if the user is on another device.
For production, you should opt for a remote key manager such as KeyManager.http.
This Wagmi configuration sets multiInjectedProviderDiscovery to false to prevent injected browser wallets from being detected, and to prefer the webAuthn connector. If you would like to allow connection to other wallets, set this property to true.
Display Sign In Buttons
After that, we will set up "Sign in" and "Sign up" buttons so that the user can create or use a passkey with the application.
We will create a new Example.tsx component to work in.
Preview
Sign upSign in
Example.tsxconfig.ts
import { useConnect, useConnectors } from 'wagmi' export function Example() {  const connect = useConnect()  const [connector] = useConnectors()  return (    <div>      <button        onClick={() =>          connect.connect({            connector,            capabilities: { type: 'sign-up' },          })        }      >        Sign up      </button>      <button onClick={() => connect.connect({ connector })}>        Sign in      </button>    </div>  )}
Display Account & Sign Out
After the user has signed in, we can display the account information and a sign out button.
Preview
Sign out
Example.tsxconfig.ts
import { useConnection, useConnect, useConnectors, useDisconnect } from 'wagmi' export function Example() {  const account = useConnection()  const connect = useConnect()  const [connector] = useConnectors()  const disconnect = useDisconnect()  if (account.address)    return (      <div>        <div>{account.address.slice(0, 6)}...{account.address.slice(-4)}</div>        <button onClick={() => disconnect.disconnect()}>Sign out</button>      </div>    )  return (    <div>      <button        onClick={() =>          connect.connect({            connector,            capabilities: { type: 'sign-up' },          })        }      >        Sign up      </button>      <button onClick={() => connect.connect({ connector })}>        Sign in      </button>    </div>  )}
Next Steps
Now that you have created your first passkey account, you can now:
   * learn the Best Practices below
   * follow a guide on how to make a payment, create a stablecoin, and more with a passkey account.
Best Practices
Loading State
When the user is logging in or signing out, we should show loading state to indicate that the process is happening.
We can use the isPending property from the useConnect hook to show pending state to the user.
Example.tsx
import { useConnection, useConnect, useConnectors, useDisconnect } from 'wagmi' export function Example() {  const account = useConnection()  const connect = useConnect()  const [connector] = useConnectors()  const disconnect = useDisconnect()  if (connect.isPending)    return <div>Check prompt...</div>  return (/* ... */)}
Wagmi exposes React Query's interfaces on all Hooks to extract asynchronous states such as loading (e.g. isPending) and error (e.g. isError, error) states.
Error Handling
If an error unexpectedly occurs, we should display an error message to the user.
We can use the error property from the useConnect hook to show error state to the user.
Example.tsx
import { useConnection, useConnect, useConnectors, useDisconnect } from 'wagmi' export function Example() {  const account = useConnection()  const connect = useConnect()  const [connector] = useConnectors()  const disconnect = useDisconnect()  if (connect.error)    return <div>Error: {connect.error.message}</div>  return (/* ... */)}
Learning Resources
Tempo Transaction type
Learn more about the Tempo transaction type that enables passkey signatures
Signatures
Learn more about how (passkey) signatures are structured in the protocol
Overview
Previousshift←
Connect to Wallets
It is possible to use Tempo with EVM-compatible wallets that support the Tempo network, or support adding custom networks (like MetaMask).
You can use these wallets when building your application on Tempo.
This guide will walk you through how to set up your application to connect to wallets.
Connect to Wallets
demo
Restart
1
Connect your browser wallet.
0xbB10⋅⋅⋅17ACDisconnect
Add Tempo to MetaMask
pnpx gitpick tempoxyz/tempo-ts/tree/main/examples/accounts
Source
Wagmi Setup
Set up Wagmi
Ensure that you have set up your project with Wagmi by following the guide.
Configure Wagmi
Next, let's ensure Wagmi is configured correctly to connect to wallets.
Ensure we have multiInjectedProviderDiscovery set to true to display injected browser wallets.
We can also utilize wallet connectors from Wagmi like metaMask to support mobile devices.
config.ts
import { createConfig, http } from 'wagmi'import { tempo } from 'tempo.ts/chains'import { metaMask } from 'wagmi/connectors' export const config = createConfig({  chains: [tempo({ feeToken: '0x20c0000000000000000000000000000000000001' })],  connectors: [metaMask()],  multiInjectedProviderDiscovery: true,  transports: {    [tempo.id]: http(),  },})
Display Connect Buttons
After that, we will set up "Connect" buttons so that the user can connect to their wallet.
We will create a new ConnectWallet.tsx component to work in.
Preview
0xbB10⋅⋅⋅17ACSign out
Add Tempo to MetaMask
Connect.tsxconfig.ts
import { useConnect, useConnectors } from 'wagmi' export function Connect() {  const connect = useConnect()  const connectors = useConnectors()  return (    <div>      {connectors.map((connector) => (        <button          key={connector.id}          onClick={() => connect.connect({ connector })}          type="button"        >          {connector.name}        </button>      ))}    </div>  )}
Display Account & Sign Out
After the user has connected to their wallet, we can display the account information and a sign out button.
We will create a new Account.tsx component to work in.
Preview
0xbB10⋅⋅⋅17ACSign out
Account.tsxconfig.ts
import { useConnection, useDisconnect } from 'wagmi' export function Account() {  const account = useConnection()  const disconnect = useDisconnect()  return (    <div>      <div>        {account.address?.slice(0, 6)}...{account.address?.slice(-4)}      </div>      <button onClick={() => disconnect.disconnect()}>        Sign out      </button>    </div>  )}
Display "Add Tempo" Button
If the wallet is not on the Tempo network, we can display a "Add Tempo" button so that the user can add the network to their wallet.
Preview
0xbB10⋅⋅⋅17ACSign out
Add Tempo to MetaMask
Account.tsxconfig.ts
import { useConnection, useDisconnect, useSwitchChain } from 'wagmi'import { tempo } from 'tempo.ts/chains' export function Account() {  const account = useConnection()  const disconnect = useDisconnect()  const switchChain = useSwitchChain()  return (    <div>      <div>        {account.address?.slice(0, 6)}...{account.address?.slice(-4)}      </div>      <button onClick={() => disconnect.disconnect()}>        Sign out      </button>      <button        onClick={() =>          switchChain.switchChain({            chainId: tempo.id,            addEthereumChainParameter: {              nativeCurrency: {                name: 'USD',                decimals: 18,                symbol: 'USD',              },            },          })        }      >        Add {chain.name} to wallet      </button>    </div>  )}
Third-Party Libraries
You can also use a third-party Wallet Connection library to handle the onboarding & connection of wallets.
Such libraries include: Privy, ConnectKit, AppKit, Dynamic, and RainbowKit.
The above libraries are all built on top of Wagmi, handle all the edge cases around wallet connection.
It is worth noting that some wallets that are included in the above libraries may not support Tempo yet. We are working on adding support for the majority of wallets.
Add to Wallet Manually
You can add Tempo testnet to a wallet that supports custom networks (e.g. MetaMask) manually.
For example, if you are using MetaMask:
   1. Open MetaMask and click on the menu in the top right and select "Networks"
   2. Click "Add a custom network"
   3. Enter the network details:
Name
	Tempo Testnet (Andantino)
	Currency
	USD
	Chain ID
	42429
	HTTP URL
	https://rpc.testnet.tempo.xyz
	WebSocket URL
	wss://rpc.testnet.tempo.xyz
	Block Explorer
	https://explore.tempo.xyz
	The official documentation from MetaMask on this process is also available here.
Note that we recommend using the symbol "USD" for the currency symbol, despite there being no native gas token. Existing wallets like MetaMask don't natively support the Tempo network yet, so there are some quirks to the interface. You might also need to set nativeCurrency.decimals to 18 instead of 6 in some wallets.
Embed Passkey accounts
Previousshift←
Add Funds to Your Balance
Get test tokens to start building on Tempo testnet.
Direct Access
You can access the faucet directly here in the docs.
Use the Faucet
demo
Restart
1
Connect your browser wallet.
0xbB10⋅⋅⋅17ACDisconnect
Add Tempo to MetaMask
2
Add testnet funds to an address.
Add funds
Address to fund
Balances
2000000AlphaUSD
2000000BetaUSD
2000000ThetaUSD
Testnet Faucet RPC
The public testnet also offers an RPC endpoint for requesting test tokens. The faucet endpoint is only available at the official Tempo testnet RPC endpoint.
Request test tokens using the tempo_fundAddress RPC method:
cast rpc tempo_fundAddress <YOUR_ADDRESS> \  --rpc-url https://rpc.testnet.tempo.xyz
Replace <YOUR_ADDRESS> with your wallet address.
What You'll Receive
The faucet provides test stablecoins:
   * pathUSD - 0x20c0000000000000000000000000000000000000
   * AlphaUSD - 0x20c0000000000000000000000000000000000001
   * BetaUSD - 0x20c0000000000000000000000000000000000002
   * ThetaUSD - 0x20c0000000000000000000000000000000000003
Each request drips a sufficient amount for testing and development.
Verify Your Balance
After requesting tokens, verify your balance:
# Check AlphaUSD balancecast erc20 balance 0x20c0000000000000000000000000000000000001 \  <YOUR_ADDRESS> \  --rpc-url https://rpc.testnet.tempo.xyz
Connect to wallets
Previousshift←
Send and receive payments using stablecoins on Tempo. Learn how to integrate payments into your application with flexible fee options and sponsorship capabilities.Tempo is a blockchain protocol purpose-built for global payments. Rather than being a general-purpose platform, Tempo makes deliberate technical choices optimized for payments at scale.
This section provides details on the Tempo Protocol specifications, and serves as a technical reference for protocol implementers, auditors, and core contributors building on Tempo.
TIP-20 is Tempo's native token standard for stablecoins and payment tokens. TIP-20 is designed for stablecoin payments, and is the foundation for many token-related functions on Tempo including transaction fees, payment lanes, DEX quote tokens, and optimized routing for DEX liquidity on Tempo.
TIP-20 extends ERC-20.
This means ERC-20 functions works with TIP-20 out of the box.
All TIP-20 tokens are created by interacting with the TIP-20 Factory contract, calling the createToken function. If you're issuing a stablecoin on Tempo, we strongly recommend using the TIP-20 standard. Learn more about the benefits, or follow the guide on issuance here.
Benefits & Features of TIP-20 Tokens
Below are some of the key benefits and features of TIP-20 tokens:
Payments
Pay for Blockchain Transaction Fees
Only TIP-20 tokens can be used to pay for transaction fees on Tempo.
Get Predictable Payment Fees
TIP-20 tokens have dedicated blockspace from all other transactions, ensuring predictable payment fees.
Transfer Memos
Attach 32-byte memos to transfers for payment references, invoice IDs, or transaction notes.
Reward Distribution
Opt-in reward distribution system for issuing rewards to token holders.
Exchange
Currency Declaration
Declare currency identifiers (e.g., USD, EUR) for proper routing and pricing in the stablecoin exchange.
DEX Quote Tokens
TIP-20 tokens can serve as quote tokens in Tempo's DEX for trading pairs and liquidity pools.
Compliance & Controls
Built-in Role-Based Access Control
Set access control roles for minting, burning, pausing, and administrative operations.
Enforce Transfer Policies
Enforce compliance with whitelist and blacklist policies via the TIP-403 Policy Registry.
Operational Controls
Supply caps, pause/unpause controls, and 32-byte transfer memos for payment references.
Pay Fees in Any Stablecoin
Any USD-denominated TIP-20 token can be used to pay transaction fees on Tempo.
The Fee AMM automatically converts your token to the validator's preferred fee token, eliminating the need for users to hold a separate gas token. This feature works natively: no additional infrastructure or integration required.
Full specification of this feature can be found in the Payment Lanes Specification.
Get Predictable Payment Fees
Tempo has dedicated payment lanes: reserved blockspace for payment TIP-20 transactions that other applications cannot consume. Even if there are extremely popular applications on the chain competing for blockspace, payroll runs or customer disbursements execute predictably. Learn more about the payments lane.
Role-Based Access Control (RBAC)
TIP-20 includes a built-in RBAC system that separates administrative responsibilities:
   * ISSUER_ROLE: Grants permission to mint and burn tokens, enabling controlled token issuance
   * PAUSE_ROLE / UNPAUSE_ROLE: Allows pausing and unpausing token transfers for emergency controls
   * BURN_BLOCKED_ROLE: Permits burning tokens from blocked addresses (e.g., for compliance actions)
Roles can be granted, revoked, and delegated without custom contract changes. This enables issuers to separate operational roles (e.g., who can mint) from administrative roles (e.g., who can pause). Learn more in the TIP-20 specification.
TIP-403 Transfer Policies
TIP-20 tokens integrate with the TIP-403 Policy Registry to enforce compliance policies. Each token can reference a policy that controls who can send and receive tokens:
   * Whitelist policies: Only addresses in the whitelist can transfer tokens
   * Blacklist policies: Addresses in the blacklist are blocked from transferring tokens
Policies can be shared across multiple tokens, enabling consistent compliance enforcement across your token ecosystem. See the TIP-403 specification for details.
Operational Controls
TIP-20 tokens can set supply caps, which allow you to set a maximum token supply to control issuance.
TIP-20 tokens also have pause/unpause commands, which provide emergency controls to halt transfers when needed.
Transfer Memos
Transfer memos enable you to attach 32-byte memos to transfers for payment references, invoice IDs, or transaction notes.
Reward Distribution
TIP-20 supports an opt-in reward distribution system that allows issuers to distribute rewards to token holders. Rewards can be claimed by holders or automatically forwarded to designated recipient addresses.
Currency Declaration
A TIP-20 token can declare a currency identifier (e.g., "USD", "EUR") that identifies the real-world asset backing the token. This enables proper routing and pricing in Tempo's stablecoin exchange. USD-denominated TIP-20 tokens can be used to pay transaction fees and serve as quote tokens in the DEX.
DEX Quote Tokens
TIP-20 tokens can serve as quote tokens in Tempo's decentralized exchange (DEX). When creating trading pairs on the stablecoin exchange, TIP-20 tokens function as the quote currency against which other tokens are priced and traded.
This enables efficient stablecoin-to-stablecoin trading and provides optimized routing for liquidity. For example, a USDC TIP-20 token can be paired with other stablecoins, allowing traders to swap between different USD-denominated tokens with minimal slippage through concentrated liquidity pools.
By using TIP-20 tokens as quote tokens, the DEX benefits from the same payment-optimized features like deterministic addresses, currency identifiers, and compliance policies, ensuring secure and efficient exchange operations.
TIP20
Abstract
TIP20 is a suite of precompiles that provide a built-in optimized token implementation in the core protocol. It extends the ERC-20 token standard with built-in functionality like memo fields and reward distribution.
Motivation
All major stablecoins today use the ERC-20 token standard. While ERC-20 provides a solid foundation for fungible tokens, it lacks features critical for stablecoin issuers today such as memos, transfer policies, and rewards distribution. Additionally, since each ERC-20 token has its own implementation, integrators can't depend on consistent behavior across tokens. TIP-20 extends ERC-20, building these features into precompiled contracts that anyone can permissionlessly deploy on Tempo. This makes token operations much more efficient, allows issuers to quickly set up on Tempo, and simplifies integrations since it ensures standardized behavior across tokens. It also enables deeper integration with token-specific Tempo features like paying gas in stablecoins and payment lanes.
Specification
TIP-20 tokens support standard fungible token operations such as transfers, mints, and burns. They also support transfers, mints, and burns with an attached 32-byte memo; a role-based access control system for token administrative operations; and a system for opt-in reward distribution.
TIP20
The core TIP-20 contract exposes standard ERC-20 functions for balances, allowances, transfers, and delegated transfers, and also adds:
   * 32-byte memo support on transfers, mints, and burns.
   * A TIP20Roles module for permissioned actions like issuing, pausing, unpausing, and burning blocked balances.
   * Configuration options for currencies, quote tokens, and transfer policies.
The complete TIP20 interface is defined below:
interface ITIP20 {    // =========================================================================    //                      ERC-20 standard functions    // =========================================================================    /// @notice Returns the name of the token    /// @return The token name    function name() external view returns (string memory);       /// @notice Returns the symbol of the token    /// @return The token symbol    function symbol() external view returns (string memory);       /// @notice Returns the number of decimals for the token    /// @return Always returns 6 for TIP-20 tokens    function decimals() external pure returns (uint8);       /// @notice Returns the total amount of tokens in circulation    /// @return The total supply of tokens    function totalSupply() external view returns (uint256);       /// @notice Returns the token balance of an account    /// @param account The address to check the balance for    /// @return The token balance of the account    function balanceOf(address account) external view returns (uint256);       /// @notice Transfers tokens from caller to recipient    /// @param to The recipient address    /// @param amount The amount of tokens to transfer    /// @return True if successful    function transfer(address to, uint256 amount) external returns (bool);       /// @notice Returns the remaining allowance for a spender    /// @param owner The token owner address    /// @param spender The spender address    /// @return The remaining allowance amount    function allowance(address owner, address spender) external view returns (uint256);       /// @notice Approves a spender to spend tokens on behalf of caller    /// @param spender The address to approve    /// @param amount The amount to approve    /// @return True if successful    function approve(address spender, uint256 amount) external returns (bool);       /// @notice Transfers tokens from one address to another using allowance    /// @param from The sender address    /// @param to The recipient address    /// @param amount The amount to transfer    /// @return True if successful    function transferFrom(address from, address to, uint256 amount) external returns (bool);    /// @notice Mints new tokens to an address (requires ISSUER_ROLE)    /// @param to The recipient address    /// @param amount The amount of tokens to mint    function mint(address to, uint256 amount) external;    /// @notice Burns tokens from caller's balance (requires ISSUER_ROLE)    /// @param amount The amount of tokens to burn    function burn(uint256 amount) external;    // =========================================================================    //                      TIP-20 extended functions    // =========================================================================    /// @notice Transfers tokens from caller to recipient with a memo    /// @param to The recipient address    /// @param amount The amount of tokens to transfer    /// @param memo A 32-byte memo attached to the transfer    function transferWithMemo(address to, uint256 amount, bytes32 memo) external;       /// @notice Transfers tokens from one address to another with a memo using allowance    /// @param from The sender address    /// @param to The recipient address    /// @param amount The amount to transfer    /// @param memo A 32-byte memo attached to the transfer    /// @return True if successful    function transferFromWithMemo(address from, address to, uint256 amount, bytes32 memo) external returns (bool);       /// @notice Mints new tokens to an address with a memo (requires ISSUER_ROLE)    /// @param to The recipient address    /// @param amount The amount of tokens to mint    /// @param memo A 32-byte memo attached to the mint    function mintWithMemo(address to, uint256 amount, bytes32 memo) external;       /// @notice Burns tokens from caller's balance with a memo (requires ISSUER_ROLE)    /// @param amount The amount of tokens to burn    /// @param memo A 32-byte memo attached to the burn    function burnWithMemo(uint256 amount, bytes32 memo) external;       /// @notice Burns tokens from a blocked address (requires BURN_BLOCKED_ROLE)    /// @param from The address to burn tokens from (must be unauthorized by transfer policy)    /// @param amount The amount of tokens to burn    function burnBlocked(address from, uint256 amount) external;       /// @notice Returns the quote token used for DEX pairing    /// @return The quote token address    function quoteToken() external view returns (ITIP20);       /// @notice Returns the next quote token staged for update    /// @return The next quote token address (zero if none staged)    function nextQuoteToken() external view returns (ITIP20);       /// @notice Returns the currency identifier for this token    /// @return The currency string    function currency() external view returns (string memory);       /// @notice Returns whether the token is currently paused    /// @return True if paused, false otherwise    function paused() external view returns (bool);       /// @notice Returns the maximum supply cap for the token    /// @return The supply cap (checked on mint operations)    function supplyCap() external view returns (uint256);       /// @notice Returns the current transfer policy ID from TIP-403 registry    /// @return The transfer policy ID    function transferPolicyId() external view returns (uint64);       // =========================================================================    //                            Admin Functions    // =========================================================================       /// @notice Pauses the contract, blocking transfers (requires PAUSE_ROLE)    function pause() external;       /// @notice Unpauses the contract, allowing transfers (requires UNPAUSE_ROLE)    function unpause() external;       /// @notice Changes the transfer policy ID (requires DEFAULT_ADMIN_ROLE)    /// @param newPolicyId The new policy ID from TIP-403 registry    /// @dev From Allegretto hardfork onwards, validates that the policy exists using TIP403Registry.policyExists()    /// Built-in policies (ID 0 = always-reject, ID 1 = always-allow) are always valid.    /// For custom policies (ID >= 2), the policy must exist in the TIP-403 registry.    /// Reverts with InvalidTransferPolicyId if the policy does not exist.    function changeTransferPolicyId(uint64 newPolicyId) external;       /// @notice Stages a new quote token for update (requires DEFAULT_ADMIN_ROLE)    /// @param newQuoteToken The new quote token address    function setNextQuoteToken(ITIP20 newQuoteToken) external;       /// @notice Completes the quote token update process (requires DEFAULT_ADMIN_ROLE)    function completeQuoteTokenUpdate() external;       /// @notice Sets the maximum supply cap (requires DEFAULT_ADMIN_ROLE)    /// @param newSupplyCap The new supply cap (cannot be less than current supply)    function setSupplyCap(uint256 newSupplyCap) external;       // =========================================================================    //                            Role Management    // =========================================================================       /// @notice Returns the BURN_BLOCKED_ROLE constant    /// @return keccak256("BURN_BLOCKED_ROLE")    function BURN_BLOCKED_ROLE() external view returns (bytes32);       /// @notice Returns the ISSUER_ROLE constant    /// @return keccak256("ISSUER_ROLE")    function ISSUER_ROLE() external view returns (bytes32);       /// @notice Returns the PAUSE_ROLE constant    /// @return keccak256("PAUSE_ROLE")    function PAUSE_ROLE() external view returns (bytes32);       /// @notice Returns the UNPAUSE_ROLE constant    /// @return keccak256("UNPAUSE_ROLE")    function UNPAUSE_ROLE() external view returns (bytes32);       /// @notice Grants a role to an account (requires role admin)    /// @param role The role to grant (keccak256 hash)    /// @param account The account to grant the role to    function grantRole(bytes32 role, address account) external;       /// @notice Revokes a role from an account (requires role admin)    /// @param role The role to revoke (keccak256 hash)    /// @param account The account to revoke the role from    function revokeRole(bytes32 role, address account) external;       /// @notice Allows an account to remove a role from itself    /// @param role The role to renounce (keccak256 hash)    function renounceRole(bytes32 role) external;       /// @notice Changes the admin role for a specific role (requires current role admin)    /// @param role The role whose admin is being changed    /// @param adminRole The new admin role    function setRoleAdmin(bytes32 role, bytes32 adminRole) external;       // =========================================================================    //                            System Functions    // =========================================================================       /// @notice System-level transfer function (restricted to precompiles)    /// @param from The sender address    /// @param to The recipient address    /// @param amount The amount to transfer    /// @return True if successful    function systemTransferFrom(address from, address to, uint256 amount) external returns (bool);       /// @notice Pre-transaction fee transfer (restricted to precompiles)    /// @param from The account to charge fees from    /// @param amount The fee amount    function transferFeePreTx(address from, uint256 amount) external;       /// @notice Post-transaction fee handling (restricted to precompiles)    /// @param to The account to refund    /// @param refund The refund amount    /// @param actualUsed The actual fee used    function transferFeePostTx(address to, uint256 refund, uint256 actualUsed) external;    // =========================================================================    //                                Events    // =========================================================================    /// @notice Emitted when a new allowance is set by `owner` for `spender`    /// @param owner The account granting the allowance    /// @param spender The account being approved to spend tokens    /// @param amount The new allowance amount    event Approval(address indexed owner, address indexed spender, uint256 amount);    /// @notice Emitted when tokens are burned from an address    /// @param from The address whose tokens were burned    /// @param amount The amount of tokens that were burned    event Burn(address indexed from, uint256 amount);    /// @notice Emitted when tokens are burned from a blocked address    /// @param from The blocked address whose tokens were burned    /// @param amount The amount of tokens that were burned    event BurnBlocked(address indexed from, uint256 amount);    /// @notice Emitted when new tokens are minted to an address    /// @param to The address receiving the minted tokens    /// @param amount The amount of tokens that were minted    event Mint(address indexed to, uint256 amount);    /// @notice Emitted when a new quote token is staged for this token    /// @param updater The account that staged the new quote token    /// @param nextQuoteToken The quote token that has been staged    event NextQuoteTokenSet(address indexed updater, ITIP20 indexed nextQuoteToken);    /// @notice Emitted when the pause state of the token changes    /// @param updater The account that changed the pause state    /// @param isPaused The new pause state; true if paused, false if unpaused    event PauseStateUpdate(address indexed updater, bool isPaused);    /// @notice Emitted when the quote token update process is completed    /// @param updater The account that completed the quote token update    /// @param newQuoteToken The new quote token that has been set    event QuoteTokenUpdate(address indexed updater, ITIP20 indexed newQuoteToken);    /// @notice Emitted when a holder sets or updates their reward recipient address    /// @param holder The token holder configuring the recipient    /// @param recipient The address that will receive claimed rewards    event RewardRecipientSet(address indexed holder, address indexed recipient);    /// @notice Emitted when a reward distribution is scheduled    /// @param funder The account funding the reward distribution    /// @param id The identifier of the reward (0 for instant distributions)    /// @param amount The total amount of tokens allocated to the reward    /// @param durationSeconds The duration in seconds (must be 0 in current version)    event RewardScheduled(        address indexed funder,        uint64 indexed id,        uint256 amount,        uint32 durationSeconds    );    /// @notice Emitted when the token's supply cap is updated    /// @param updater The account that updated the supply cap    /// @param newSupplyCap The new maximum total supply    event SupplyCapUpdate(address indexed updater, uint256 indexed newSupplyCap);    /// @notice Emitted for all token movements, including mints and burns    /// @param from The address sending tokens (address(0) for mints)    /// @param to The address receiving tokens (address(0) for burns)    /// @param amount The amount of tokens transferred    event Transfer(address indexed from, address indexed to, uint256 amount);    /// @notice Emitted when the transfer policy ID is updated    /// @param updater The account that updated the transfer policy    /// @param newPolicyId The new transfer policy ID from the TIP-403 registry    event TransferPolicyUpdate(address indexed updater, uint64 indexed newPolicyId);    /// @notice Emitted when a transfer, mint, or burn is performed with an attached memo    /// @param from The address sending tokens (address(0) for mints)    /// @param to The address receiving tokens (address(0) for burns)    /// @param amount The amount of tokens transferred    /// @param memo The 32-byte memo associated with this movement    event TransferWithMemo(        address indexed from,        address indexed to,        uint256 amount,        bytes32 indexed memo    );    /// @notice Emitted when the membership of a role changes for an account    /// @param role The role being granted or revoked    /// @param account The account whose membership was changed    /// @param sender The account that performed the change    /// @param hasRole True if the role was granted, false if it was revoked    event RoleMembershipUpdated(        bytes32 indexed role,        address indexed account,        address indexed sender,        bool hasRole    );    /// @notice Emitted when the admin role for a role is updated    /// @param role The role whose admin role was changed    /// @param newAdminRole The new admin role for the given role    /// @param sender The account that performed the update    event RoleAdminUpdated(        bytes32 indexed role,        bytes32 indexed newAdminRole,        address indexed sender    );    // =========================================================================    //                                Errors    // =========================================================================    /// @notice The token operation is blocked because the contract is currently paused    error ContractPaused();    /// @notice The spender does not have enough allowance for the attempted transfer    error InsufficientAllowance();    /// @notice The account does not have the required token balance for the operation    /// @param currentBalance The current balance of the account    /// @param expectedBalance The required balance for the operation to succeed    /// @param token The address of the token contract    error InsufficientBalance(uint256 currentBalance, uint256 expectedBalance, address token);    /// @notice The provided amount is zero or otherwise invalid for the attempted operation    error InvalidAmount();    /// @notice The provided currency identifier is invalid or unsupported    error InvalidCurrency();    /// @notice The specified quote token is invalid, incompatible, or would create a circular reference    error InvalidQuoteToken();    /// @notice The recipient address is not a valid destination for this operation    ///         (for example, another TIP-20 token contract)    error InvalidRecipient();    /// @notice The specified transfer policy ID does not exist in the TIP-403 registry    error InvalidTransferPolicyId();    /// @notice The new supply cap is invalid, for example lower than the current total supply    error InvalidSupplyCap();    /// @notice A rewards operation was attempted when no opted-in supply exists    error NoOptedInSupply();    /// @notice The configured transfer policy denies authorization for the sender or recipient    error PolicyForbids();    /// @notice Attempted to start a timed reward distribution; streaming is disabled    error ScheduledRewardsDisabled();    /// @notice The attempted operation would cause total supply to exceed the configured supply cap    error SupplyCapExceeded();    /// @notice The caller does not have the required role or permission for this operation    error Unauthorized(); }
When interacting with precompiles, always use the provided ABI rather than reading directly from storage slots. Direct storage access may lead to undefined behavior.
Memos
Memo functions transferWithMemo, transferFromWithMemo, mintWithMemo, and burnWithMemo behave like their ERC-20 equivalents but additionally emit memo data in dedicated events. The memo is always a fixed 32-byte field. Callers should pack shorter strings or identifiers directly into this field, and use hashes or external references when the underlying payload exceeds 32 bytes.
TIP-403 Transfer Policies
All operations that move tokens: transfer, transferFrom, transferWithMemo, transferFromWithMemo, mint, burn, mintWithMemo, and burnWithMemo — enforce the token’s configured TIP-403 transfer policy.
Internally, this is implemented via a transferAuthorized modifier that:
   * Calls TIP403_REGISTRY.isAuthorized(transferPolicyId, from) for the sender.
   * Calls TIP403_REGISTRY.isAuthorized(transferPolicyId, to) for the recipient.
Both checks must return true, otherwise the call reverts with PolicyForbids. Reward operations (startReward, setRewardRecipient, claimRewards) also perform the same TIP-403 authorization checks before moving any funds.
Invalid Recipient Protection
TIP-20 tokens cannot be sent to other TIP-20 token contract addresses. The implementation uses a validRecipient guard that rejects recipients whose address is zero, or has the TIP-20 prefix (0x20c000000000000000000000). Any attempt to transfer to a TIP-20 token address must revert with InvalidRecipient. This prevents accidental token loss by sending funds to token contracts instead of user accounts.
Currencies and Quote Tokens
Each TIP-20 token declares a currency identifier and a corresponding quoteToken used for pricing and routing in the Stablecoin DEX. Tokens with currency == "USD" must pair with a USD-denominated TIP-20 token.
Updating the quote token occurs in two phases:
   1. setNextQuoteToken stages a new quote token.
   2. completeQuoteTokenUpdate finalizes the change.
The implementation must validate that the new quote token is a TIP-20 token, matches currency rules, and does not create circular quote-token chains.
While quote tokens can be changed, choose carefully as the update process requires careful coordination with the DEX.
Pause Controls
Pause controls pause and unpause govern all transfer operations and reward related flows. When paused, transfers and memo transfers halt, but administrative and configuration functions remain allowed. The paused() getter reflects the current state and must be checked by all affected entrypoints.
TIP-20 Roles
TIP-20 uses a role-based authorization system. The main roles are:
   * ISSUER_ROLE: controls minting and burning.
   * PAUSE_ROLE / UNPAUSE_ROLE: controls the token’s paused state.
   * BURN_BLOCKED_ROLE: allows burning balances belonging to addresses that fail TIP-403 authorization.
Roles are assigned and managed through grantRole, revokeRole, renounceRole, and setRoleAdmin, via the contract admin.
System Functions
System level functions systemTransferFrom, transferFeePreTx, and transferFeePostTx are only callable by other Tempo protocol precompiles. These entrypoints power transaction fee collection, refunds, and internal accounting within the Fee AMM and Stablecoin DEX. They must not be callable by general contracts or users.
Token Rewards Distribution
See rewards distribution for more information.
TIP20Factory
The TIP20Factory contract is the canonical entrypoint for creating new TIP-20 tokens on Tempo. The factory maintains an internal tokenIdCounter that increments with each deployment, and uses this counter to derive deterministic “vanity” deployment addresses under a fixed 12-byte TIP-20 prefix. This ensures that every TIP-20 token exists at a predictable, collision-free address, and that integrators can infer a token’s identifier directly from its address. The TIP20Factory precompile is deployed at 0x20Fc000000000000000000000000000000000000. Newly created TIP-20 addresses are deployed a vanity address derived from TIP20_PREFIX || tokenId`, where:
   * TIP20_PREFIX is the 12-byte prefix 0x20C0000000000000000000000000
   * tokenId is the current monotonically increasing counter value, encoded into the least significant bytes of the address (eg. 0x20C0000000000000000000000000000000000001)
When creating a token, the factory performs several checks to guarantee consistency across the TIP-20 ecosystem:
   * The specified Quote token must be a currently deployed TIP20.
   * Tokens that specify their currency as USD must also specify a quote token that is denoted in USD.
   * At deployment, the factory initializes defaults on the TIP-20:
transferPolicyId = 1, supplyCap = type(uint128).max, paused = false, and totalSupply = 0.
   * The provided admin address receives DEFAULT_ADMIN_ROLE, enabling it to manage roles and token configurations.
The complete TIP20Factory interface is defined below:
/// @title TIP-20 Factory Interface/// @notice Deploys and initializes new TIP-20 tokens at deterministic vanity addressesinterface ITIP20Factory {    /// @notice Creates and deploys a new TIP-20 token    /// @param name The token's ERC-20 name    /// @param symbol The token's ERC-20 symbol    /// @param currency The token's currency identifier (e.g. "USD")    /// @param quoteToken The TIP-20 quote token used for exchange pricing    /// @param admin The address to receive DEFAULT_ADMIN_ROLE on the new token    ///    /// @return token The deployed TIP-20 token address    /// @dev    ///  - Computes the TIP-20 deployment address as TIP20_PREFIX || tokenId    ///  - Ensures the provided quote token is itself a valid TIP-20    ///  - Enforces USD-denomination rules (USD tokens must use USD quote tokens)    ///  - Rejects configurations that would form circular quote-token chains    ///  - Initializes the token with default settings:    ///         transferPolicyId = 1 (always-allow)    ///         supplyCap        = type(uint128).max    ///         paused           = false    ///         totalSupply      = 0    ///  - Grants DEFAULT_ADMIN_ROLE on the new token to `admin`    ///  - Emits a {TokenCreated} event    function createToken(        string memory name,        string memory symbol,        string memory currency,        ITIP20 quoteToken,        address admin    ) external returns (address token);    // =========================================================================    //                                Helpers    // =========================================================================    /// @notice Returns true if `token` is a valid TIP-20 address    /// @param token The address to check    /// @return True if the address is a well-formed TIP-20    /// @dev Checks the TIP-20 prefix and ensures its embedded ID <= tokenIdCounter    function isTIP20(address token) external view returns (bool);    /// @notice Returns the next token ID that will be assigned on creation    /// @return The current tokenIdCounter value    function tokenIdCounter() external view returns (uint256);    // =========================================================================    //                                Events    // =========================================================================    /// @notice Emitted when a new TIP-20 token is created    /// @param token The newly deployed TIP-20 address    /// @param id The assigned token ID used in address construction    /// @param name The token name    /// @param symbol The token symbol    /// @param currency The token currency    /// @param quoteToken The token's assigned quote token    /// @param admin The address receiving DEFAULT_ADMIN_ROLE    event TokenCreated(        address indexed token,        uint256 indexed id,        string name,        string symbol,        string currency,        ITIP20 indexed quoteToken,        address admin    );    // =========================================================================    //                                Errors    // =========================================================================    /// @notice The provided quote token address is invalid or not a TIP-20    error InvalidQuoteToken();}
Invariants
      * totalSupply() must always equal to the sum of all balanceOf(account) over all accounts.
      * totalSupply() must always be <= supplyCap
      * When paused is true, no functions that move tokens (transfer, transferFrom, memo variants, systemTransferFrom, startReward, setRewardRecipient, claimRewards) can succeed.
      * TIP20 tokens cannot be transferred to another TIP20 token contract address.
      * systemTransferFrom, transferFeePreTx, and transferFeePostTx never change totalSupply().
Overview
Previousshift←
Reference Implementation
Tempo Protocol
Tempo is a blockchain protocol purpose-built for global payments. Rather than being a general-purpose platform, Tempo makes deliberate technical choices optimized for payments at scale.
This section provides details on the Tempo Protocol specifications, and serves as a technical reference for protocol implementers, auditors, and core contributors building on Tempo.
Protocol Components
TIP-20 Tokens
Core token standard with native stablecoin features and policy registry integration
TIP-20 Rewards
Reward distribution system for token holders with automated yield mechanisms
TIP-403 Policies
Policy registry system for compliance, access control, and token governance
Fees
Multi-token fee payment system with AMM for stablecoin conversion
Tempo Transactions
EIP-2718 transaction type with native passkeys, batching, scheduling, and fee sponsorship
Blockspace
Block format, payment lanes, and sub-blocks for optimized throughput
Stablecoin DEX
Enshrined stablecoin DEX for stablecoin interoperability
GitHub Repository
View the full Tempo protocol source code and implementation
Providing liquidity
Previousshift←
TIP20
Abstract
TIP20 is a suite of precompiles that provide a built-in optimized token implementation in the core protocol. It extends the ERC-20 token standard with built-in functionality like memo fields and reward distribution.
Motivation
All major stablecoins today use the ERC-20 token standard. While ERC-20 provides a solid foundation for fungible tokens, it lacks features critical for stablecoin issuers today such as memos, transfer policies, and rewards distribution. Additionally, since each ERC-20 token has its own implementation, integrators can't depend on consistent behavior across tokens. TIP-20 extends ERC-20, building these features into precompiled contracts that anyone can permissionlessly deploy on Tempo. This makes token operations much more efficient, allows issuers to quickly set up on Tempo, and simplifies integrations since it ensures standardized behavior across tokens. It also enables deeper integration with token-specific Tempo features like paying gas in stablecoins and payment lanes.
Specification
TIP-20 tokens support standard fungible token operations such as transfers, mints, and burns. They also support transfers, mints, and burns with an attached 32-byte memo; a role-based access control system for token administrative operations; and a system for opt-in reward distribution.
TIP20
The core TIP-20 contract exposes standard ERC-20 functions for balances, allowances, transfers, and delegated transfers, and also adds:
      * 32-byte memo support on transfers, mints, and burns.
      * A TIP20Roles module for permissioned actions like issuing, pausing, unpausing, and burning blocked balances.
      * Configuration options for currencies, quote tokens, and transfer policies.
The complete TIP20 interface is defined below:
interface ITIP20 {    // =========================================================================    //                      ERC-20 standard functions    // =========================================================================    /// @notice Returns the name of the token    /// @return The token name    function name() external view returns (string memory);       /// @notice Returns the symbol of the token    /// @return The token symbol    function symbol() external view returns (string memory);       /// @notice Returns the number of decimals for the token    /// @return Always returns 6 for TIP-20 tokens    function decimals() external pure returns (uint8);       /// @notice Returns the total amount of tokens in circulation    /// @return The total supply of tokens    function totalSupply() external view returns (uint256);       /// @notice Returns the token balance of an account    /// @param account The address to check the balance for    /// @return The token balance of the account    function balanceOf(address account) external view returns (uint256);       /// @notice Transfers tokens from caller to recipient    /// @param to The recipient address    /// @param amount The amount of tokens to transfer    /// @return True if successful    function transfer(address to, uint256 amount) external returns (bool);       /// @notice Returns the remaining allowance for a spender    /// @param owner The token owner address    /// @param spender The spender address    /// @return The remaining allowance amount    function allowance(address owner, address spender) external view returns (uint256);       /// @notice Approves a spender to spend tokens on behalf of caller    /// @param spender The address to approve    /// @param amount The amount to approve    /// @return True if successful    function approve(address spender, uint256 amount) external returns (bool);       /// @notice Transfers tokens from one address to another using allowance    /// @param from The sender address    /// @param to The recipient address    /// @param amount The amount to transfer    /// @return True if successful    function transferFrom(address from, address to, uint256 amount) external returns (bool);    /// @notice Mints new tokens to an address (requires ISSUER_ROLE)    /// @param to The recipient address    /// @param amount The amount of tokens to mint    function mint(address to, uint256 amount) external;    /// @notice Burns tokens from caller's balance (requires ISSUER_ROLE)    /// @param amount The amount of tokens to burn    function burn(uint256 amount) external;    // =========================================================================    //                      TIP-20 extended functions    // =========================================================================    /// @notice Transfers tokens from caller to recipient with a memo    /// @param to The recipient address    /// @param amount The amount of tokens to transfer    /// @param memo A 32-byte memo attached to the transfer    function transferWithMemo(address to, uint256 amount, bytes32 memo) external;       /// @notice Transfers tokens from one address to another with a memo using allowance    /// @param from The sender address    /// @param to The recipient address    /// @param amount The amount to transfer    /// @param memo A 32-byte memo attached to the transfer    /// @return True if successful    function transferFromWithMemo(address from, address to, uint256 amount, bytes32 memo) external returns (bool);       /// @notice Mints new tokens to an address with a memo (requires ISSUER_ROLE)    /// @param to The recipient address    /// @param amount The amount of tokens to mint    /// @param memo A 32-byte memo attached to the mint    function mintWithMemo(address to, uint256 amount, bytes32 memo) external;       /// @notice Burns tokens from caller's balance with a memo (requires ISSUER_ROLE)    /// @param amount The amount of tokens to burn    /// @param memo A 32-byte memo attached to the burn    function burnWithMemo(uint256 amount, bytes32 memo) external;       /// @notice Burns tokens from a blocked address (requires BURN_BLOCKED_ROLE)    /// @param from The address to burn tokens from (must be unauthorized by transfer policy)    /// @param amount The amount of tokens to burn    function burnBlocked(address from, uint256 amount) external;       /// @notice Returns the quote token used for DEX pairing    /// @return The quote token address    function quoteToken() external view returns (ITIP20);       /// @notice Returns the next quote token staged for update    /// @return The next quote token address (zero if none staged)    function nextQuoteToken() external view returns (ITIP20);       /// @notice Returns the currency identifier for this token    /// @return The currency string    function currency() external view returns (string memory);       /// @notice Returns whether the token is currently paused    /// @return True if paused, false otherwise    function paused() external view returns (bool);       /// @notice Returns the maximum supply cap for the token    /// @return The supply cap (checked on mint operations)    function supplyCap() external view returns (uint256);       /// @notice Returns the current transfer policy ID from TIP-403 registry    /// @return The transfer policy ID    function transferPolicyId() external view returns (uint64);       // =========================================================================    //                            Admin Functions    // =========================================================================       /// @notice Pauses the contract, blocking transfers (requires PAUSE_ROLE)    function pause() external;       /// @notice Unpauses the contract, allowing transfers (requires UNPAUSE_ROLE)    function unpause() external;       /// @notice Changes the transfer policy ID (requires DEFAULT_ADMIN_ROLE)    /// @param newPolicyId The new policy ID from TIP-403 registry    /// @dev From Allegretto hardfork onwards, validates that the policy exists using TIP403Registry.policyExists()    /// Built-in policies (ID 0 = always-reject, ID 1 = always-allow) are always valid.    /// For custom policies (ID >= 2), the policy must exist in the TIP-403 registry.    /// Reverts with InvalidTransferPolicyId if the policy does not exist.    function changeTransferPolicyId(uint64 newPolicyId) external;       /// @notice Stages a new quote token for update (requires DEFAULT_ADMIN_ROLE)    /// @param newQuoteToken The new quote token address    function setNextQuoteToken(ITIP20 newQuoteToken) external;       /// @notice Completes the quote token update process (requires DEFAULT_ADMIN_ROLE)    function completeQuoteTokenUpdate() external;       /// @notice Sets the maximum supply cap (requires DEFAULT_ADMIN_ROLE)    /// @param newSupplyCap The new supply cap (cannot be less than current supply)    function setSupplyCap(uint256 newSupplyCap) external;       // =========================================================================    //                            Role Management    // =========================================================================       /// @notice Returns the BURN_BLOCKED_ROLE constant    /// @return keccak256("BURN_BLOCKED_ROLE")    function BURN_BLOCKED_ROLE() external view returns (bytes32);       /// @notice Returns the ISSUER_ROLE constant    /// @return keccak256("ISSUER_ROLE")    function ISSUER_ROLE() external view returns (bytes32);       /// @notice Returns the PAUSE_ROLE constant    /// @return keccak256("PAUSE_ROLE")    function PAUSE_ROLE() external view returns (bytes32);       /// @notice Returns the UNPAUSE_ROLE constant    /// @return keccak256("UNPAUSE_ROLE")    function UNPAUSE_ROLE() external view returns (bytes32);       /// @notice Grants a role to an account (requires role admin)    /// @param role The role to grant (keccak256 hash)    /// @param account The account to grant the role to    function grantRole(bytes32 role, address account) external;       /// @notice Revokes a role from an account (requires role admin)    /// @param role The role to revoke (keccak256 hash)    /// @param account The account to revoke the role from    function revokeRole(bytes32 role, address account) external;       /// @notice Allows an account to remove a role from itself    /// @param role The role to renounce (keccak256 hash)    function renounceRole(bytes32 role) external;       /// @notice Changes the admin role for a specific role (requires current role admin)    /// @param role The role whose admin is being changed    /// @param adminRole The new admin role    function setRoleAdmin(bytes32 role, bytes32 adminRole) external;       // =========================================================================    //                            System Functions    // =========================================================================       /// @notice System-level transfer function (restricted to precompiles)    /// @param from The sender address    /// @param to The recipient address    /// @param amount The amount to transfer    /// @return True if successful    function systemTransferFrom(address from, address to, uint256 amount) external returns (bool);       /// @notice Pre-transaction fee transfer (restricted to precompiles)    /// @param from The account to charge fees from    /// @param amount The fee amount    function transferFeePreTx(address from, uint256 amount) external;       /// @notice Post-transaction fee handling (restricted to precompiles)    /// @param to The account to refund    /// @param refund The refund amount    /// @param actualUsed The actual fee used    function transferFeePostTx(address to, uint256 refund, uint256 actualUsed) external;    // =========================================================================    //                                Events    // =========================================================================    /// @notice Emitted when a new allowance is set by `owner` for `spender`    /// @param owner The account granting the allowance    /// @param spender The account being approved to spend tokens    /// @param amount The new allowance amount    event Approval(address indexed owner, address indexed spender, uint256 amount);    /// @notice Emitted when tokens are burned from an address    /// @param from The address whose tokens were burned    /// @param amount The amount of tokens that were burned    event Burn(address indexed from, uint256 amount);    /// @notice Emitted when tokens are burned from a blocked address    /// @param from The blocked address whose tokens were burned    /// @param amount The amount of tokens that were burned    event BurnBlocked(address indexed from, uint256 amount);    /// @notice Emitted when new tokens are minted to an address    /// @param to The address receiving the minted tokens    /// @param amount The amount of tokens that were minted    event Mint(address indexed to, uint256 amount);    /// @notice Emitted when a new quote token is staged for this token    /// @param updater The account that staged the new quote token    /// @param nextQuoteToken The quote token that has been staged    event NextQuoteTokenSet(address indexed updater, ITIP20 indexed nextQuoteToken);    /// @notice Emitted when the pause state of the token changes    /// @param updater The account that changed the pause state    /// @param isPaused The new pause state; true if paused, false if unpaused    event PauseStateUpdate(address indexed updater, bool isPaused);    /// @notice Emitted when the quote token update process is completed    /// @param updater The account that completed the quote token update    /// @param newQuoteToken The new quote token that has been set    event QuoteTokenUpdate(address indexed updater, ITIP20 indexed newQuoteToken);    /// @notice Emitted when a holder sets or updates their reward recipient address    /// @param holder The token holder configuring the recipient    /// @param recipient The address that will receive claimed rewards    event RewardRecipientSet(address indexed holder, address indexed recipient);    /// @notice Emitted when a reward distribution is scheduled    /// @param funder The account funding the reward distribution    /// @param id The identifier of the reward (0 for instant distributions)    /// @param amount The total amount of tokens allocated to the reward    /// @param durationSeconds The duration in seconds (must be 0 in current version)    event RewardScheduled(        address indexed funder,        uint64 indexed id,        uint256 amount,        uint32 durationSeconds    );    /// @notice Emitted when the token's supply cap is updated    /// @param updater The account that updated the supply cap    /// @param newSupplyCap The new maximum total supply    event SupplyCapUpdate(address indexed updater, uint256 indexed newSupplyCap);    /// @notice Emitted for all token movements, including mints and burns    /// @param from The address sending tokens (address(0) for mints)    /// @param to The address receiving tokens (address(0) for burns)    /// @param amount The amount of tokens transferred    event Transfer(address indexed from, address indexed to, uint256 amount);    /// @notice Emitted when the transfer policy ID is updated    /// @param updater The account that updated the transfer policy    /// @param newPolicyId The new transfer policy ID from the TIP-403 registry    event TransferPolicyUpdate(address indexed updater, uint64 indexed newPolicyId);    /// @notice Emitted when a transfer, mint, or burn is performed with an attached memo    /// @param from The address sending tokens (address(0) for mints)    /// @param to The address receiving tokens (address(0) for burns)    /// @param amount The amount of tokens transferred    /// @param memo The 32-byte memo associated with this movement    event TransferWithMemo(        address indexed from,        address indexed to,        uint256 amount,        bytes32 indexed memo    );    /// @notice Emitted when the membership of a role changes for an account    /// @param role The role being granted or revoked    /// @param account The account whose membership was changed    /// @param sender The account that performed the change    /// @param hasRole True if the role was granted, false if it was revoked    event RoleMembershipUpdated(        bytes32 indexed role,        address indexed account,        address indexed sender,        bool hasRole    );    /// @notice Emitted when the admin role for a role is updated    /// @param role The role whose admin role was changed    /// @param newAdminRole The new admin role for the given role    /// @param sender The account that performed the update    event RoleAdminUpdated(        bytes32 indexed role,        bytes32 indexed newAdminRole,        address indexed sender    );    // =========================================================================    //                                Errors    // =========================================================================    /// @notice The token operation is blocked because the contract is currently paused    error ContractPaused();    /// @notice The spender does not have enough allowance for the attempted transfer    error InsufficientAllowance();    /// @notice The account does not have the required token balance for the operation    /// @param currentBalance The current balance of the account    /// @param expectedBalance The required balance for the operation to succeed    /// @param token The address of the token contract    error InsufficientBalance(uint256 currentBalance, uint256 expectedBalance, address token);    /// @notice The provided amount is zero or otherwise invalid for the attempted operation    error InvalidAmount();    /// @notice The provided currency identifier is invalid or unsupported    error InvalidCurrency();    /// @notice The specified quote token is invalid, incompatible, or would create a circular reference    error InvalidQuoteToken();    /// @notice The recipient address is not a valid destination for this operation    ///         (for example, another TIP-20 token contract)    error InvalidRecipient();    /// @notice The specified transfer policy ID does not exist in the TIP-403 registry    error InvalidTransferPolicyId();    /// @notice The new supply cap is invalid, for example lower than the current total supply    error InvalidSupplyCap();    /// @notice A rewards operation was attempted when no opted-in supply exists    error NoOptedInSupply();    /// @notice The configured transfer policy denies authorization for the sender or recipient    error PolicyForbids();    /// @notice Attempted to start a timed reward distribution; streaming is disabled    error ScheduledRewardsDisabled();    /// @notice The attempted operation would cause total supply to exceed the configured supply cap    error SupplyCapExceeded();    /// @notice The caller does not have the required role or permission for this operation    error Unauthorized(); }
When interacting with precompiles, always use the provided ABI rather than reading directly from storage slots. Direct storage access may lead to undefined behavior.
Memos
Memo functions transferWithMemo, transferFromWithMemo, mintWithMemo, and burnWithMemo behave like their ERC-20 equivalents but additionally emit memo data in dedicated events. The memo is always a fixed 32-byte field. Callers should pack shorter strings or identifiers directly into this field, and use hashes or external references when the underlying payload exceeds 32 bytes.
TIP-403 Transfer Policies
All operations that move tokens: transfer, transferFrom, transferWithMemo, transferFromWithMemo, mint, burn, mintWithMemo, and burnWithMemo — enforce the token’s configured TIP-403 transfer policy.
Internally, this is implemented via a transferAuthorized modifier that:
      * Calls TIP403_REGISTRY.isAuthorized(transferPolicyId, from) for the sender.
      * Calls TIP403_REGISTRY.isAuthorized(transferPolicyId, to) for the recipient.
Both checks must return true, otherwise the call reverts with PolicyForbids. Reward operations (startReward, setRewardRecipient, claimRewards) also perform the same TIP-403 authorization checks before moving any funds.
Invalid Recipient Protection
TIP-20 tokens cannot be sent to other TIP-20 token contract addresses. The implementation uses a validRecipient guard that rejects recipients whose address is zero, or has the TIP-20 prefix (0x20c000000000000000000000). Any attempt to transfer to a TIP-20 token address must revert with InvalidRecipient. This prevents accidental token loss by sending funds to token contracts instead of user accounts.
Currencies and Quote Tokens
Each TIP-20 token declares a currency identifier and a corresponding quoteToken used for pricing and routing in the Stablecoin DEX. Tokens with currency == "USD" must pair with a USD-denominated TIP-20 token.
Updating the quote token occurs in two phases:
      1. setNextQuoteToken stages a new quote token.
      2. completeQuoteTokenUpdate finalizes the change.
The implementation must validate that the new quote token is a TIP-20 token, matches currency rules, and does not create circular quote-token chains.
While quote tokens can be changed, choose carefully as the update process requires careful coordination with the DEX.
Pause Controls
Pause controls pause and unpause govern all transfer operations and reward related flows. When paused, transfers and memo transfers halt, but administrative and configuration functions remain allowed. The paused() getter reflects the current state and must be checked by all affected entrypoints.
TIP-20 Roles
TIP-20 uses a role-based authorization system. The main roles are:
      * ISSUER_ROLE: controls minting and burning.
      * PAUSE_ROLE / UNPAUSE_ROLE: controls the token’s paused state.
      * BURN_BLOCKED_ROLE: allows burning balances belonging to addresses that fail TIP-403 authorization.
Roles are assigned and managed through grantRole, revokeRole, renounceRole, and setRoleAdmin, via the contract admin.
System Functions
System level functions systemTransferFrom, transferFeePreTx, and transferFeePostTx are only callable by other Tempo protocol precompiles. These entrypoints power transaction fee collection, refunds, and internal accounting within the Fee AMM and Stablecoin DEX. They must not be callable by general contracts or users.
Token Rewards Distribution
See rewards distribution for more information.
TIP20Factory
The TIP20Factory contract is the canonical entrypoint for creating new TIP-20 tokens on Tempo. The factory maintains an internal tokenIdCounter that increments with each deployment, and uses this counter to derive deterministic “vanity” deployment addresses under a fixed 12-byte TIP-20 prefix. This ensures that every TIP-20 token exists at a predictable, collision-free address, and that integrators can infer a token’s identifier directly from its address. The TIP20Factory precompile is deployed at 0x20Fc000000000000000000000000000000000000. Newly created TIP-20 addresses are deployed a vanity address derived from TIP20_PREFIX || tokenId`, where:
      * TIP20_PREFIX is the 12-byte prefix 0x20C0000000000000000000000000
      * tokenId is the current monotonically increasing counter value, encoded into the least significant bytes of the address (eg. 0x20C0000000000000000000000000000000000001)
When creating a token, the factory performs several checks to guarantee consistency across the TIP-20 ecosystem:
      * The specified Quote token must be a currently deployed TIP20.
      * Tokens that specify their currency as USD must also specify a quote token that is denoted in USD.
      * At deployment, the factory initializes defaults on the TIP-20:
transferPolicyId = 1, supplyCap = type(uint128).max, paused = false, and totalSupply = 0.
      * The provided admin address receives DEFAULT_ADMIN_ROLE, enabling it to manage roles and token configurations.
The complete TIP20Factory interface is defined below:
/// @title TIP-20 Factory Interface/// @notice Deploys and initializes new TIP-20 tokens at deterministic vanity addressesinterface ITIP20Factory {    /// @notice Creates and deploys a new TIP-20 token    /// @param name The token's ERC-20 name    /// @param symbol The token's ERC-20 symbol    /// @param currency The token's currency identifier (e.g. "USD")    /// @param quoteToken The TIP-20 quote token used for exchange pricing    /// @param admin The address to receive DEFAULT_ADMIN_ROLE on the new token    ///    /// @return token The deployed TIP-20 token address    /// @dev    ///  - Computes the TIP-20 deployment address as TIP20_PREFIX || tokenId    ///  - Ensures the provided quote token is itself a valid TIP-20    ///  - Enforces USD-denomination rules (USD tokens must use USD quote tokens)    ///  - Rejects configurations that would form circular quote-token chains    ///  - Initializes the token with default settings:    ///         transferPolicyId = 1 (always-allow)    ///         supplyCap        = type(uint128).max    ///         paused           = false    ///         totalSupply      = 0    ///  - Grants DEFAULT_ADMIN_ROLE on the new token to `admin`    ///  - Emits a {TokenCreated} event    function createToken(        string memory name,        string memory symbol,        string memory currency,        ITIP20 quoteToken,        address admin    ) external returns (address token);    // =========================================================================    //                                Helpers    // =========================================================================    /// @notice Returns true if `token` is a valid TIP-20 address    /// @param token The address to check    /// @return True if the address is a well-formed TIP-20    /// @dev Checks the TIP-20 prefix and ensures its embedded ID <= tokenIdCounter    function isTIP20(address token) external view returns (bool);    /// @notice Returns the next token ID that will be assigned on creation    /// @return The current tokenIdCounter value    function tokenIdCounter() external view returns (uint256);    // =========================================================================    //                                Events    // =========================================================================    /// @notice Emitted when a new TIP-20 token is created    /// @param token The newly deployed TIP-20 address    /// @param id The assigned token ID used in address construction    /// @param name The token name    /// @param symbol The token symbol    /// @param currency The token currency    /// @param quoteToken The token's assigned quote token    /// @param admin The address receiving DEFAULT_ADMIN_ROLE    event TokenCreated(        address indexed token,        uint256 indexed id,        string name,        string symbol,        string currency,        ITIP20 indexed quoteToken,        address admin    );    // =========================================================================    //                                Errors    // =========================================================================    /// @notice The provided quote token address is invalid or not a TIP-20    error InvalidQuoteToken();}
Invariants
         * totalSupply() must always equal to the sum of all balanceOf(account) over all accounts.
         * totalSupply() must always be <= supplyCap
         * When paused is true, no functions that move tokens (transfer, transferFrom, memo variants, systemTransferFrom, startReward, setRewardRecipient, claimRewards) can succeed.
         * TIP20 tokens cannot be transferred to another TIP20 token contract address.
         * systemTransferFrom, transferFeePreTx, and transferFeePostTx never change totalSupply().
Overview
Previousshift←
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


import { TIP20Factory } from "./TIP20Factory.sol";
import { TIP403Registry } from "./TIP403Registry.sol";
import { TIP20RolesAuth } from "./abstracts/TIP20RolesAuth.sol";
import { ITIP20 } from "./interfaces/ITIP20.sol";


contract TIP20 is ITIP20, TIP20RolesAuth {


    TIP403Registry internal constant TIP403_REGISTRY =
        TIP403Registry(0x403c000000000000000000000000000000000000);


    address internal constant TIP_FEE_MANAGER_ADDRESS = 0xfeEC000000000000000000000000000000000000;
    address internal constant STABLECOIN_EXCHANGE_ADDRESS =
        0xDEc0000000000000000000000000000000000000;


    address internal constant FACTORY = 0x20Fc000000000000000000000000000000000000;


    /*//////////////////////////////////////////////////////////////
                                METADATA
    //////////////////////////////////////////////////////////////*/


    string public name;
    string public symbol;
    string public currency;


    function decimals() public pure returns (uint8) {
        return 6;
    }


    /*//////////////////////////////////////////////////////////////
                             ADMINISTRATION
    //////////////////////////////////////////////////////////////*/


    ITIP20 public override quoteToken;
    ITIP20 public override nextQuoteToken;


    bytes32 public constant PAUSE_ROLE = keccak256("PAUSE_ROLE");
    bytes32 public constant UNPAUSE_ROLE = keccak256("UNPAUSE_ROLE");
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");
    bytes32 public constant BURN_BLOCKED_ROLE = keccak256("BURN_BLOCKED_ROLE");


    uint64 public transferPolicyId = 1; // "Always-allow" policy by default.


    constructor(
        string memory _name,
        string memory _symbol,
        string memory _currency,
        ITIP20 _quoteToken,
        address admin
    ) {
        name = _name;
        symbol = _symbol;
        currency = _currency;
        quoteToken = _quoteToken;
        nextQuoteToken = _quoteToken;
        // No currency registry; all tokens use 6 decimals by default


        hasRole[admin][DEFAULT_ADMIN_ROLE] = true; // Grant admin role to first admin.
    }


    /*//////////////////////////////////////////////////////////////
                              ERC20 STORAGE
    //////////////////////////////////////////////////////////////*/


    uint128 internal _totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;


    /*//////////////////////////////////////////////////////////////
                              TIP20 STORAGE
    //////////////////////////////////////////////////////////////*/


    bool public paused = false;
    uint256 public supplyCap = type(uint128).max; // Default to cap at uint128.max


    /*//////////////////////////////////////////////////////////////
                        REWARD DISTRIBUTION STORAGE
    //////////////////////////////////////////////////////////////*/


    uint256 internal constant ACC_PRECISION = 1e18;
    uint256 public globalRewardPerToken;
    uint128 public optedInSupply;


    struct UserRewardInfo {
        address rewardRecipient;
        uint256 rewardPerToken;
        uint256 rewardBalance;
    }


    mapping(address => UserRewardInfo) public userRewardInfo;


    /*//////////////////////////////////////////////////////////////
                              POLICY ADMINISTRATION
    //////////////////////////////////////////////////////////////*/


    function changeTransferPolicyId(uint64 newPolicyId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        // Validate that the policy exists
        if (!TIP403_REGISTRY.policyExists(newPolicyId)) {
            revert InvalidTransferPolicyId();
        }


        emit TransferPolicyUpdate(msg.sender, transferPolicyId = newPolicyId);
    }


    /*//////////////////////////////////////////////////////////////
                          TOKEN ADMINISTRATION
    //////////////////////////////////////////////////////////////*/


    function setNextQuoteToken(ITIP20 newQuoteToken) external onlyRole(DEFAULT_ADMIN_ROLE) {
        // sets next quote token, to put the DEX for that pair into place-only mode
        // does not check for loops; that is checked in completeQuoteTokenUpdate
        if (!TIP20Factory(FACTORY).isTIP20(address(newQuoteToken))) {
            revert InvalidQuoteToken();
        }


        // If this token represents USD, enforce USD quote token
        if (keccak256(bytes(currency)) == keccak256(bytes("USD"))) {
            if (keccak256(bytes(newQuoteToken.currency())) != keccak256(bytes("USD"))) {
                revert InvalidQuoteToken();
            }
        }


        nextQuoteToken = newQuoteToken;
        emit NextQuoteTokenSet(msg.sender, newQuoteToken);
    }


    function completeQuoteTokenUpdate() external onlyRole(DEFAULT_ADMIN_ROLE) {
        // check that this does not create a loop, by looping through quote token until we reach the root
        ITIP20 current = nextQuoteToken;
        while (address(current) != address(0)) {
            if (current == this) revert InvalidQuoteToken();
            current = current.quoteToken();
        }


        quoteToken = nextQuoteToken;
        emit QuoteTokenUpdate(msg.sender, nextQuoteToken);
    }


    function setSupplyCap(uint256 newSupplyCap) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (newSupplyCap < _totalSupply) revert InvalidSupplyCap();
        if (newSupplyCap > type(uint128).max) revert SupplyCapExceeded();
        emit SupplyCapUpdate(msg.sender, supplyCap = newSupplyCap);
    }


    function pause() external onlyRole(PAUSE_ROLE) {
        emit PauseStateUpdate(msg.sender, paused = true);
    }


    function unpause() external onlyRole(UNPAUSE_ROLE) {
        emit PauseStateUpdate(msg.sender, paused = false);
    }


    function mint(address to, uint256 amount) external onlyRole(ISSUER_ROLE) {
        _mint(to, amount);
        emit Mint(to, amount);
    }


    function burn(uint256 amount) external onlyRole(ISSUER_ROLE) {
        _transfer(msg.sender, address(0), amount);
        unchecked {
            _totalSupply -= uint128(amount);
        }


        emit Burn(msg.sender, amount);
    }


    function burnBlocked(address from, uint256 amount) external onlyRole(BURN_BLOCKED_ROLE) {
        // Prevent burning from protected precompile addresses
        if (from == TIP_FEE_MANAGER_ADDRESS || from == STABLECOIN_EXCHANGE_ADDRESS) {
            revert ProtectedAddress();
        }


        // Only allow burning from addresses that are blocked from transferring.
        if (TIP403_REGISTRY.isAuthorized(transferPolicyId, from)) {
            revert PolicyForbids();
        }


        _transfer(from, address(0), amount);
        unchecked {
            _totalSupply -= uint128(amount);
        }


        emit BurnBlocked(from, amount);
    }


    function mintWithMemo(address to, uint256 amount, bytes32 memo) external onlyRole(ISSUER_ROLE) {
        _mint(to, amount);
        emit TransferWithMemo(address(0), to, amount, memo);
        emit Mint(to, amount);
    }


    function burnWithMemo(uint256 amount, bytes32 memo) external onlyRole(ISSUER_ROLE) {
        _transfer(msg.sender, address(0), amount);
        unchecked {
            _totalSupply -= uint128(amount);
        }


        emit TransferWithMemo(msg.sender, address(0), amount, memo);
        emit Burn(msg.sender, amount);
    }


    /*//////////////////////////////////////////////////////////////
                        STANDARD ERC20 FUNCTIONS
    //////////////////////////////////////////////////////////////*/


    modifier notPaused() {
        if (paused) revert ContractPaused();
        _;
    }


    modifier validRecipient(address to) {
        // Don't allow sending to the zero address not other precompiled tokens.
        if (to == address(0) || (uint160(to) >> 64) == 0x20c000000000000000000000) {
            revert InvalidRecipient();
        }
        _;
    }


    modifier transferAuthorized(address from, address to) {
        if (
            !TIP403_REGISTRY.isAuthorized(transferPolicyId, from)
                || !TIP403_REGISTRY.isAuthorized(transferPolicyId, to)
        ) revert PolicyForbids();
        _;
    }


    function transfer(address to, uint256 amount)
        public
        virtual
        notPaused
        validRecipient(to)
        transferAuthorized(msg.sender, to)
        returns (bool)
    {
        _transfer(msg.sender, to, amount);
        return true;
    }


    function approve(address spender, uint256 amount) external returns (bool) {
        emit Approval(msg.sender, spender, allowance[msg.sender][spender] = amount);
        return true;
    }


    function transferFrom(address from, address to, uint256 amount)
        public
        virtual
        notPaused
        validRecipient(to)
        transferAuthorized(from, to)
        returns (bool)
    {
        _transferFrom(from, to, amount);
        return true;
    }


    function _transferFrom(address from, address to, uint256 amount) internal {
        // Allowance check and update.
        uint256 allowed = allowance[from][msg.sender];
        if (amount > allowed) revert InsufficientAllowance();
        unchecked {
            if (allowed != type(uint256).max) {
                allowance[from][msg.sender] = allowed - amount;
            }
        }


        _transfer(from, to, amount);
    }


    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }


    function _transfer(address from, address to, uint256 amount) internal {
        if (amount > balanceOf[from]) {
            revert InsufficientBalance(balanceOf[from], amount, address(this));
        }


        // Handle reward accounting for opted-in sender
        address fromsRewardRecipient = _updateRewardsAndGetRecipient(from);


        // Handle reward accounting for opted-in receiver (but not when burning)
        address tosRewardRecipient = _updateRewardsAndGetRecipient(to);


        if (fromsRewardRecipient != address(0)) {
            if (tosRewardRecipient == address(0)) {
                optedInSupply -= uint128(amount);
            }
        } else if (tosRewardRecipient != address(0)) {
            optedInSupply += uint128(amount);
        }


        unchecked {
            balanceOf[from] -= amount;
            if (to != address(0)) balanceOf[to] += amount;
        }


        emit Transfer(from, to, amount);
    }


    function _mint(address to, uint256 amount) internal {
        if (!TIP403_REGISTRY.isAuthorized(transferPolicyId, to)) {
            revert PolicyForbids();
        }
        if (_totalSupply + amount > supplyCap) revert SupplyCapExceeded(); // Catches overflow.


        // Handle reward accounting for opted-in receiver
        address tosRewardRecipient = _updateRewardsAndGetRecipient(to);
        if (tosRewardRecipient != address(0)) {
            optedInSupply += uint128(amount);
        }


        unchecked {
            _totalSupply += uint128(amount);
            balanceOf[to] += amount;
        }


        emit Transfer(address(0), to, amount);
    }


    /*//////////////////////////////////////////////////////////////
                        TIP20 EXTENSION FUNCTIONS
    //////////////////////////////////////////////////////////////*/


    function transferWithMemo(address to, uint256 amount, bytes32 memo)
        public
        virtual
        notPaused
        validRecipient(to)
        transferAuthorized(msg.sender, to)
    {
        _transfer(msg.sender, to, amount);
        emit TransferWithMemo(msg.sender, to, amount, memo);
    }


    function transferFromWithMemo(address from, address to, uint256 amount, bytes32 memo)
        public
        virtual
        notPaused
        validRecipient(to)
        transferAuthorized(from, to)
        returns (bool)
    {
        // Allowance check and update.
        uint256 allowed = allowance[from][msg.sender];
        if (amount > allowed) revert InsufficientAllowance();
        unchecked {
            if (allowed != type(uint256).max) {
                allowance[from][msg.sender] = allowed - amount;
            }
        }


        _transfer(from, to, amount);
        emit TransferWithMemo(from, to, amount, memo);
        return true;
    }


    /// @dev In the Tempo node implementation, this function is not exposed via the TIP20 interface
    /// and is not externally callable. It is only invoked internally by specific precompiles
    /// (like the fee manager precompile), avoiding the need to approve precompiles to spend tokens.
    function systemTransferFrom(address from, address to, uint256 amount)
        external
        virtual
        notPaused
        validRecipient(to)
        transferAuthorized(from, to)
        returns (bool)
    {
        require(msg.sender == TIP_FEE_MANAGER_ADDRESS);
        _transfer(from, to, amount);
        return true;
    }


    /*//////////////////////////////////////////////////////////////
                            FEE MANAGEMENT
    //////////////////////////////////////////////////////////////*/


    function transferFeePreTx(address from, uint256 amount) external {
        require(msg.sender == TIP_FEE_MANAGER_ADDRESS);
        require(from != address(0));


        if (amount > balanceOf[from]) {
            revert InsufficientBalance(balanceOf[from], amount, address(this));
        }


        address fromsRewardRecipient = _updateRewardsAndGetRecipient(from);
        if (fromsRewardRecipient != address(0)) {
            optedInSupply -= uint128(amount);
        }


        unchecked {
            balanceOf[from] -= amount;
            balanceOf[TIP_FEE_MANAGER_ADDRESS] += amount;
        }
    }


    function transferFeePostTx(address to, uint256 refund, uint256 actualUsed) external {
        require(msg.sender == TIP_FEE_MANAGER_ADDRESS);
        require(to != address(0));


        uint256 feeManagerBalance = balanceOf[TIP_FEE_MANAGER_ADDRESS];
        if (refund > feeManagerBalance) {
            revert InsufficientBalance(feeManagerBalance, refund, address(this));
        }


        address tosRewardRecipient = _updateRewardsAndGetRecipient(to);
        if (tosRewardRecipient != address(0)) {
            optedInSupply += uint128(refund);
        }


        unchecked {
            balanceOf[TIP_FEE_MANAGER_ADDRESS] -= refund;
            balanceOf[to] += refund;
        }


        emit Transfer(to, TIP_FEE_MANAGER_ADDRESS, actualUsed);
    }


    /*//////////////////////////////////////////////////////////////
                        REWARD DISTRIBUTION
    //////////////////////////////////////////////////////////////*/


    // Updates the rewards for `user` and their `rewardRecipient`
    function _updateRewardsAndGetRecipient(address user)
        internal
        returns (address rewardRecipient)
    {
        rewardRecipient = userRewardInfo[user].rewardRecipient;
        uint256 cachedGlobalRewardPerToken = globalRewardPerToken;
        uint256 rewardPerTokenDelta =
            cachedGlobalRewardPerToken - userRewardInfo[user].rewardPerToken;


        if (rewardPerTokenDelta != 0) {
            // No rewards to update if not opted-in
            if (rewardRecipient != address(0)) {
                // Balance to update
                uint256 reward = (uint256(balanceOf[user]) * (rewardPerTokenDelta)) / ACC_PRECISION;


                userRewardInfo[rewardRecipient].rewardBalance += reward;
            }
            userRewardInfo[user].rewardPerToken = cachedGlobalRewardPerToken;
        }
    }


    /// @notice Starts a reward distribution. Post-Moderato, only immediate rewards (seconds_ == 0) are allowed.
    /// Scheduled/streaming rewards (seconds_ > 0) are disabled and will revert with ScheduledRewardsDisabled.
    function startReward(uint256 amount, uint32 seconds_)
        external
        virtual
        notPaused
        returns (uint64)
    {
        if (amount == 0) revert InvalidAmount();
        if (!TIP403_REGISTRY.isAuthorized(transferPolicyId, msg.sender)) {
            revert PolicyForbids();
        }


        // Transfer tokens from sender to this contract
        _transfer(msg.sender, address(this), amount);


        if (seconds_ == 0) {
            // Immediate payout
            if (optedInSupply == 0) {
                revert NoOptedInSupply();
            }
            uint256 deltaRPT = (amount * ACC_PRECISION) / optedInSupply;
            globalRewardPerToken += deltaRPT;
            emit RewardScheduled(msg.sender, 0, amount, 0);
            return 0;
        } else {
            // Scheduled/streaming rewards are disabled post-Moderato
            revert ScheduledRewardsDisabled();
        }
    }


    function setRewardRecipient(address newRewardRecipient) external virtual notPaused {
        // Check TIP-403 authorization
        if (newRewardRecipient != address(0)) {
            if (
                !TIP403_REGISTRY.isAuthorized(transferPolicyId, msg.sender)
                    || !TIP403_REGISTRY.isAuthorized(transferPolicyId, newRewardRecipient)
            ) revert PolicyForbids();
        }


        address oldRewardRecipient = _updateRewardsAndGetRecipient(msg.sender);
        if (oldRewardRecipient != address(0)) {
            if (newRewardRecipient == address(0)) {
                optedInSupply -= uint128(balanceOf[msg.sender]);
            }
        } else if (newRewardRecipient != address(0)) {
            optedInSupply += uint128(balanceOf[msg.sender]);
        }
        userRewardInfo[msg.sender].rewardRecipient = newRewardRecipient;


        emit RewardRecipientSet(msg.sender, newRewardRecipient);
    }


    function claimRewards() external virtual notPaused returns (uint256 maxAmount) {
        if (!TIP403_REGISTRY.isAuthorized(transferPolicyId, msg.sender)) {
            revert PolicyForbids();
        }


        _updateRewardsAndGetRecipient(msg.sender);


        uint256 amount = userRewardInfo[msg.sender].rewardBalance;
        uint256 selfBalance = balanceOf[address(this)];
        maxAmount = (selfBalance > amount ? amount : selfBalance);
        userRewardInfo[msg.sender].rewardBalance -= maxAmount;


        balanceOf[address(this)] -= maxAmount;
        if (userRewardInfo[msg.sender].rewardRecipient != address(0)) {
            optedInSupply += uint128(maxAmount);
        }
        balanceOf[msg.sender] += maxAmount;


        emit Transfer(address(this), msg.sender, maxAmount);
    }


    /*//////////////////////////////////////////////////////////////
                        REWARD DISTRIBUTION VIEWS
    //////////////////////////////////////////////////////////////*/




    }
TIP-20 Rewards
TIP-20 Rewards is a built-in mechanism that allows for efficient distribution of rewards to opted-in token holders proportional to their holdings, while maintaining low gas costs at scale and complying with TIP-403 transfer policies.
Traditional reward mechanisms require tokens to be staked in separate contracts, which fragments user holdings and adds complexity to wallet implementations. TIP-20 Rewards solves this by:
         * Built-in Distribution: Rewards are integrated directly into the token contract, no separate staking required
         * Opt-in Participation: Users choose whether to participate by setting a reward recipient
         * Proportional Distribution: Rewards accrue based on token holdings automatically
         * Instant Rewards: Distribute rewards immediately to opted-in holders
         * Efficient at Scale: Constant-time updates regardless of the number of token holders
         * Policy Compliant: All reward transfers respect TIP-403 transfer policies
Note: Time-based streaming rewards are planned for a future upgrade. Until then, attempting to create a timed distribution will revert (calling startReward(amount, seconds_) with seconds_ > 0 reverts with ScheduledRewardsDisabled()).
TIP-20 Rewards Distribution
Abstract
An opt-in, scalable, pro-rata reward distribution mechanism built into TIP-20 tokens. The system uses a "reward-per-token" accumulator pattern to distribute rewards proportionally to opted-in holders without requiring staking or per-holder iteration. Rewards are distributed instantly; time-based streaming distributions are planned for a future upgrade.
Motivation
Many applications require pro-rata distribution of tokens to existing holders (incentive programs, deterministic inflation, staking rewards). Building this into TIP-20 allows efficient distribution without forcing users to stake tokens elsewhere or requiring distributors to loop over all holders.
Specification
The rewards mechanism allows anyone to distribute token rewards to opted-in holders proportionally based on holdings. Users must opt in to receiving rewards and may delegate rewards to a recipient address.
TIP-20 Rewards Functions
These functions are part of the ITIP20 interface:
/// @notice Distribute rewards to opted-in token holders/// @param amount Amount of tokens to distribute/// @param seconds_ Must be 0; passing > 0 reverts with ScheduledRewardsDisabled()/// @return Always returns 0 for an instant distributionfunction startReward(uint256 amount, uint32 seconds_) external returns (uint64); /// @notice Set the reward recipient for the caller (opt in/out of rewards)/// @param newRewardRecipient Recipient address (address(0) to opt out)function setRewardRecipient(address newRewardRecipient) external; /// @notice Claim all pending rewards for the caller/// @return maxAmount Amount claimedfunction claimRewards() external returns (uint256 maxAmount); /// @notice Get user reward infofunction userRewardInfo(address user) external view returns (    address rewardRecipient,    uint256 rewardPerToken,    uint256 rewardBalance); // State variablesfunction globalRewardPerToken() external view returns (uint256);function optedInSupply() external view returns (uint128);
Accrual Mechanism
The system uses an accumulator pattern:
         * globalRewardPerToken: Cumulative rewards per token (scaled by 1e18)
         * Each user stores a rewardPerToken snapshot; pending rewards = (globalRewardPerToken - snapshot) * balance
Instant distributions (seconds_ == 0) add directly to globalRewardPerToken as: deltaRPT = amount * 1e18 / optedInSupply.
Opt-In Model
Users must call setRewardRecipient(recipient) to opt in. When opted in:
         * User's balance contributes to optedInSupply
         * Rewards accrue to rewardBalance on balance-changing operations
         * Users can delegate rewards to another address
Setting recipient to address(0) opts out.
TIP-403 Integration
All token movements must pass TIP-403 policy checks:
         * startReward: Validates funder authorization
         * setRewardRecipient: Validates holder and recipient
         * claimRewards: Validates msg.sender
Invariants
         * globalRewardPerToken must monotonically increase
         * optedInSupply must equal the sum of balances for all opted-in users
         * All token movements must comply with TIP-403 policies
Overview
Previousshift←
Overview
Opt-In Model
Users must call setRewardRecipient(recipient) to opt in. When opted in:
         * User's balance contributes to optedInSupply
         * Rewards accrue to rewardBalance on balance-changing operations
         * Users can delegate rewards to another address
Setting recipient to address(0) opts out.
TIP-403 Integration
All token movements must pass TIP-403 policy checks:
         * startReward: Validates funder authorization
         * setRewardRecipient: Validates holder and recipient
         * claimRewards: Validates msg.sender
Invariants
         * globalRewardPerToken must monotonically increase
         * optedInSupply must equal the sum of balances for all opted-in users
         * All token movements must comply with TIP-403 policies
Overview
Previousshift←
Overview
TIP-403 Policy Registry
What is TIP-403?
TIP-403 is Tempo's policy registry system that enables TIP-20 tokens to enforce access control. Instead of each token implementing its own logic, TIP-403 provides a registry where policies can be created once and shared across multiple tokens.
Overview
Abstract
TIP-403 provides a policy registry system that allows TIP-20 tokens to inherit access control and compliance policies. The registry supports two types of policies (whitelist and blacklist) and includes special built-in policies for common use cases. Policies can be shared across multiple tokens, enabling consistent compliance enforcement.
Motivation
Token issuers often need to implement compliance policies such as KYC/AML requirements, access control, and risk management. Without a standardized system, each token would need to implement its own policy logic, making policy management more difficult and inconsistent across the ecosystem.
TIP-403 addresses this by providing a centralized registry that tokens can reference for authorization decisions. This enables consistent policy enforcement across multiple tokens and reduces implementation complexity for token issuers.
________________


Specification
The TIP-403 registry stores policies that TIP-20 tokens check against on any token transfer. Policies are associated with a unique policyId, can either be a blacklist or a whitelist policy, and contain a list of addresses. This list of addresses can be updated by the policy admin.
The TIP403Registry is deployed at address 0x403c000000000000000000000000000000000000.
Built-in Policies
Custom policies start with policyId = 2. The registry reserves the first two ids for built-in policies:
         * policyId = 0 is the always-reject policy and rejects all token transfers
         * policyId = 1 is the always-allow policy and allows all token transfers
The policyIdCounter starts at 2 and increments with each new policy creation.
Policy Types
TIP-403 supports two policy types:
         * Whitelist Policies: Only addresses in the whitelist can transfer tokens. All other addresses are blocked
         * Blacklist Policies: Addresses in the blacklist are blocked from transferring tokens. All other addresses can transfer
Storage and State
The registry maintains the following state:
         * policyIdCounter: Starts at 2, increments with each new policy creation. Returns the next policy ID that will be assigned.
         * policyData: Mapping from policyId to PolicyData struct containing policy type and admin address.
         * policySet: Internal mapping from policyId to address to boolean, tracking which addresses are in each policy's set.
Interface Definition
The complete TIP403Registry interface is defined below:
interface ITIP403Registry {    // =========================================================================    //                            Types and Enums    // =========================================================================    enum PolicyType {        WHITELIST,        BLACKLIST    }    struct PolicyData {        PolicyType policyType;        address admin;    }    // =========================================================================    //                         Policy Creation    // =========================================================================    /// @notice Creates a new policy with the specified admin and type    /// @param admin Address that can modify this policy    /// @param policyType Type of policy (whitelist or blacklist)    /// @return newPolicyId ID of the newly created policy    /// @dev Anyone can create a policy. The creator specifies an admin address that can modify the policy.    /// Assigns the next available policyId starting from 2, sets the policy admin, and initializes an empty policy set.    /// Emits PolicyCreated and PolicyAdminUpdated events.    function createPolicy(        address admin,        PolicyType policyType    ) external returns (uint64 newPolicyId);    /// @notice Creates a policy and immediately adds the provided accounts to the policy set    /// @param admin Address that can modify this policy    /// @param policyType Type of policy (whitelist or blacklist)    /// @param accounts Initial addresses to add to the policy    /// @return newPolicyId ID of the newly created policy    /// @dev For whitelist policies: adds accounts as authorized. For blacklist policies: adds accounts as restricted.    /// Emits PolicyCreated, PolicyAdminUpdated, and either WhitelistUpdated or BlacklistUpdated events for each account added.    function createPolicyWithAccounts(        address admin,        PolicyType policyType,        address[] calldata accounts    ) external returns (uint64 newPolicyId);    // =========================================================================    //                        Policy Administration    // =========================================================================    /// @notice Transfers admin rights to another address    /// @param policyId ID of the policy to update    /// @param admin New admin address for the policy    /// @dev Only the current policy admin can call this function. The new admin immediately gains full control over the policy.    /// Emits PolicyAdminUpdated event.    function setPolicyAdmin(uint64 policyId, address admin) external;    /// @notice Adds or removes addresses from a whitelist policy    /// @param policyId ID of the whitelist policy    /// @param account Address to add or remove    /// @param allowed true to allow, false to block    /// @dev Only the policy admin can call this function. allowed = true adds the address to the whitelist (authorized to transfer).    /// allowed = false removes the address from the whitelist (not authorized). Reverts if policy is not a whitelist.    /// Emits WhitelistUpdated event.    function modifyPolicyWhitelist(        uint64 policyId,        address account,        bool allowed    ) external;    /// @notice Adds or removes addresses from a blacklist policy    /// @param policyId ID of the blacklist policy    /// @param account Address to add or remove    /// @param restricted true to block, false to allow    /// @dev Only the policy admin can call this function. restricted = true adds the address to the blacklist (not authorized to transfer).    /// restricted = false removes the address from the blacklist (authorized). Reverts if policy is not a blacklist.    /// Emits BlacklistUpdated event.    function modifyPolicyBlacklist(        uint64 policyId,        address account,        bool restricted    ) external;    // =========================================================================    //                        Policy Queries    // =========================================================================    /// @notice Returns whether the provided user is allowed to transfer tokens under the provided policy ID    /// @param policyId Policy ID to check against    /// @param user Address to check    /// @return True if authorized, false if blocked    /// @dev For policyId = 0 (always-reject): Always returns false    /// For policyId = 1 (always-allow): Always returns true    /// For whitelist policies: Returns true if address is in the whitelist, false otherwise    /// For blacklist policies: Returns true if address is NOT in the blacklist, false if it is    function isAuthorized(uint64 policyId, address user) external view returns (bool);    /// @notice Returns the next policy ID that will be assigned to a newly created policy    /// @return The current policyIdCounter value    /// @dev Starts at 2 and increments with each policy creation    function policyIdCounter() external view returns (uint64);    /// @notice Returns whether a policy exists (available from Allegretto hardfork)    /// @param policyId ID of the policy to check    /// @return True if the policy exists, false otherwise    /// @dev Policy IDs 0 and 1 (built-in policies) always exist. For custom policies (ID >= 2),    /// checks if the policy ID is within the range of created policies based on policyIdCounter.    function policyExists(uint64 policyId) external view returns (bool);    /// @notice Returns the policy type and admin address of the policy associated with the provided policy ID    /// @param policyId ID of the policy to query    /// @return policyType Type of the policy (whitelist or blacklist)    /// @return admin Admin address of the policy    function policyData(uint64 policyId) external view returns (PolicyType policyType, address admin);    // =========================================================================    //                                Events    // =========================================================================    /// @notice Emitted when a new policy is created    /// @param policyId ID of the newly created policy    /// @param updater Address that created the policy    /// @param policyType Type of policy created    event PolicyCreated(        uint64 indexed policyId,        address indexed updater,        PolicyType policyType    );    /// @notice Emitted when a policy's admin is changed    /// @param policyId ID of the policy    /// @param updater Address that made the change    /// @param admin New admin address    event PolicyAdminUpdated(        uint64 indexed policyId,        address indexed updater,        address indexed admin    );    /// @notice Emitted when an address is added to or removed from a whitelist policy    /// @param policyId ID of the whitelist policy    /// @param updater Address that made the change    /// @param account Account that was added or removed    /// @param allowed true if added, false if removed    event WhitelistUpdated(        uint64 indexed policyId,        address indexed updater,        address indexed account,        bool allowed    );    /// @notice Emitted when an address is added to or removed from a blacklist policy    /// @param policyId ID of the blacklist policy    /// @param updater Address that made the change    /// @param account Account that was added or removed    /// @param restricted true if blocked, false if unblocked    event BlacklistUpdated(        uint64 indexed policyId,        address indexed updater,        address indexed account,        bool restricted    );    // =========================================================================    //                                Errors    // =========================================================================    /// @notice Caller is not the policy admin    error Unauthorized();    /// @notice Wrong policy type for the operation    error IncompatiblePolicyType();}
Usage with TIP-20 Tokens
TIP-20 tokens store the current TIP403 registry policy ID they adhere to in their storage. On any token transfer, they perform a TIP-403 policy check by calling isAuthorized() for both sender and recipient addresses. The policy to use for the token can only be set by the admin of the token.
Default Policy: New tokens start with transferPolicyId = 1 (always-allow policy).
Policy Changes: When a token's transfer policy is changed via changeTransferPolicyId(), all future transfers are immediately subject to the new policy.
Example Usage
Creating and setting a policy:
address admin = address(this); // Create policy with registryuint64 policyId = tip403Registry.createPolicy(admin, PolicyType.WHITELIST); // Add authorized addresses to whitelisttip403Registry.modifyPolicyWhitelist(policyId, authorizedUser, true); // Set policy on the tokentoken.changeTransferPolicyId(policyId);
Authorization Logic
The isAuthorized() function implements the following logic:
if (policyId < 2) {    return policyId == 1; // 0 = reject, 1 = allow}PolicyData memory data = policyData[policyId];return data.policyType == PolicyType.WHITELIST    ? policySet[policyId][user]    : !policySet[policyId][user];
Invariants
         * When policyId = 0, all authorization checks must return false for every address.
         * When policyId = 1, all authorization checks must return true for every address.
         * Only the policy’s current admin may update the admin address for that policy.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


import { ITIP403Registry } from "./interfaces/ITIP403Registry.sol";


contract TIP403Registry is ITIP403Registry {


    uint64 public policyIdCounter = 2; // Skip special policies (documented in isAuthorized).


    mapping(uint64 => PolicyData) public policyData;


    /*//////////////////////////////////////////////////////////////
                      POLICY TYPE-SPECIFIC STORAGE
    //////////////////////////////////////////////////////////////*/


    mapping(uint64 => mapping(address => bool)) internal policySet;


    /*//////////////////////////////////////////////////////////////
                      GENERAL POLICY ADMINISTRATION
    //////////////////////////////////////////////////////////////*/


    function createPolicy(address admin, PolicyType policyType)
        public
        returns (uint64 newPolicyId)
    {
        policyData[newPolicyId = policyIdCounter++] =
            PolicyData({ policyType: policyType, admin: admin });


        emit PolicyCreated(newPolicyId, msg.sender, policyType);
        emit PolicyAdminUpdated(newPolicyId, msg.sender, admin);
    }


    function createPolicyWithAccounts(
        address admin,
        PolicyType policyType,
        address[] calldata accounts
    ) public returns (uint64 newPolicyId) {
        newPolicyId = policyIdCounter++;


        policyData[newPolicyId] = PolicyData({ policyType: policyType, admin: admin });


        // Set the initial policy set.
        for (uint256 i = 0; i < accounts.length; i++) {
            policySet[newPolicyId][accounts[i]] = true;


            if (policyType == PolicyType.WHITELIST) {
                emit WhitelistUpdated(newPolicyId, msg.sender, accounts[i], true);
            } else {
                emit BlacklistUpdated(newPolicyId, msg.sender, accounts[i], true);
            }
        }


        emit PolicyCreated(newPolicyId, msg.sender, policyType);
        emit PolicyAdminUpdated(newPolicyId, msg.sender, admin);
    }


    function setPolicyAdmin(uint64 policyId, address admin) external {
        require(policyData[policyId].admin == msg.sender, Unauthorized());


        policyData[policyId].admin = admin;


        emit PolicyAdminUpdated(policyId, msg.sender, admin);
    }


    /*//////////////////////////////////////////////////////////////
                   POLICY TYPE-SPECIFIC ADMINISTRATION
    //////////////////////////////////////////////////////////////*/


    function modifyPolicyWhitelist(uint64 policyId, address account, bool allowed) external {
        PolicyData memory data = policyData[policyId];


        require(data.admin == msg.sender, Unauthorized());
        require(data.policyType == PolicyType.WHITELIST, IncompatiblePolicyType());


        policySet[policyId][account] = allowed;


        emit WhitelistUpdated(policyId, msg.sender, account, allowed);
    }


    function modifyPolicyBlacklist(uint64 policyId, address account, bool restricted) external {
        PolicyData memory data = policyData[policyId];


        require(data.admin == msg.sender, Unauthorized());
        require(data.policyType == PolicyType.BLACKLIST, IncompatiblePolicyType());


        policySet[policyId][account] = restricted;


        emit BlacklistUpdated(policyId, msg.sender, account, restricted);
    }


    /*//////////////////////////////////////////////////////////////
                        GENERAL POLICY QUERYING
    //////////////////////////////////////////////////////////////*/


    function policyExists(uint64 policyId) public view returns (bool) {
        // Special policies 0 and 1 always exist
        if (policyId < 2) {
            return true;
        }


        // Check if policy ID is within the range of created policies
        return policyId < policyIdCounter;
    }


    function isAuthorized(uint64 policyId, address user) public view returns (bool) {
        // Special case for the "always-allow" and "always-reject" policies.
        if (policyId < 2) {
            // policyId == 0 is the "always-reject" policy.
            // policyId == 1 is the "always-allow" policy.
            return policyId == 1;
        }


        PolicyData memory data = policyData[policyId];


        return data.policyType == PolicyType.WHITELIST
            ? policySet[policyId][user]
            : !policySet[policyId][user];
    }


}
Transaction Fees
Tempo has no native token. Instead, transaction fees—including both gas fees and priority fees—can be paid directly in stablecoins. When you send a transaction, you can choose which supported stablecoin to use for fees.
For a stablecoin to be accepted, it must be USD-denominated, issued as a native TIP-20 contract, and have sufficient liquidity on the native Fee AMM.
Tempo uses a fixed base fee (rather than a variable base fee as in EIP-1559), set so that a TIP-20 transfer costs less than $0.001. All fees accrue to the validator who proposes the block.
Fees
Abstract
This spec lays out how fees work on Tempo, including how fees are calculated, who pays them, and how the default fee token for a transaction is determined.
Motivation
On Tempo, users can pay gas fees in any TIP-20 token whose currency is USD, as long as that stablecoin has sufficient liquidity on the enshrined fee AMM against the token that the current validator wants to receive.
In determining which token a user pays fees in, we want to maximize customizability (so that wallets or users can implement more sophisticated UX than is possible at the protocol layer), minimize surprise (particularly surprises in which a user pays fees in a stablecoin they did not expect to), and have sane default behavior so that users can begin using basic functions like payments even using wallets that are not customized for Tempo support.
Fee units
Fees in the max_base_fee_per_gas and max_fee_per_gas fields of transactions, as well as in the block's base_fee_per_gas field, are specified in units of USD per 10^18 gas. Since TIP-20 tokens have 6 decimal places, that means the fee for a transaction can be calculated as ceil(base_fee * gas_used / 10^12).
This unit is chosen to provide sufficient precision for low-fee transactions. Since TIP-20 tokens have only 6 decimal places (as opposed to the 18 decimal places of ETH), expressing fees directly in tokens per gas would not provide enough precision for transactions with very low gas costs. By scaling the fee paid by 10^-12, the protocol ensures that even small fee amounts can be accurately represented and calculated.
Fee payment
Before the execution of each transaction, the protocol takes the following steps:
         * Determine the fee_payer of the transaction.
         * Determine the fee_token of the transaction, according to the rules for fee token preferences. If the fee token cannot be determined, the transaction is invalid.
         * Compute the max_fee of the transaction as gas_limit * gas_price.
         * Deduct max_fee from the fee_payer's balance of fee_token. If fee_payer does not have sufficient balance in fee_token, the transaction is invalid.
         * Reserve max_fee of liquidity on the fee AMM between the fee_token and the validator's preferred fee token. If there is insufficient liquidity, the transaction is invalid.
After the execution of each transaction:
         * Compute the refund_amount as (gas_limit - gas_used) * gas_price.
         * Credit the fee_payer's address with refund_amount of fee_token.
         * Log a Transfer event from the user to the fee manager contract for the net amount of the fee payment.
Fee payer
Tempo supports sponsored transactions in which the fee_payer is a different address from the tx.origin of the transaction. This is supported by Tempo's new transaction type, which has a fee_payer_signature field.
If no fee_payer_signature is provided, then the fee_payer of the transaction is its sender (tx.origin).
If the fee_payer_signature field is set, then it is used to derive the fee_payer for the transaction, as described in the transaction spec.
For purposes of fee token preferences, the fee_payer is the account that chooses the fee token.
Fee sponsorship flow
Presence of the fee_payer_signature field authorizes a third party to pay the transaction's gas costs while the original sender executes the transaction logic.
Sender signs the transaction
The sender signs the transaction with their private key, signing over a blank fee token field. This means the sender delegates the choice of which fee token to use to the fee payer.
Fee payer selects and signs
The fee payer selects which fee token to use, then signs over the transaction.
Transaction submission
The fee token and fee payer signature is added to the transaction using the fee_payer_signature field and is then submitted.
Network validation
The network validates both signatures and executes the transaction.
Validation
When feePayerSignature is present:
         * Both sender and fee payer signatures must be valid
         * Fee payer must have sufficient balance in the fee token
         * Transaction is rejected if either signature fails or fee payer's balance is insufficient
Fee token preferences
The protocol checks for token preferences in five ways, with this order of precedence:
         1. Transaction (set by the fee_token field of the transaction)
         2. Account (set on the FeeManager contract by the fee_payer of the transaction)
         3. TIP-20 contract (if the transaction is calling any function on a TIP-20 contract, the transaction uses that token as its fee token)
         4. Stablecoin Exchange (for certain swap calls, the transaction uses the tokenIn argument as its fee token)
         5. PathUSD (as a fallback)
The protocol checks preferences at each of these levels, stopping at the first one at which a preference is specified. At that level, the protocol performs the following checks. If any of the checks fail, the transaction is invalid (without looking at any further levels):
         * The token must be a TIP-20 token whose currency is USD.
         * The user must have sufficient balance in that token to pay the gasLimit on the transaction at the transaction's gasPrice.
         * There must be sufficient liquidity on the fee AMM, as discussed in that specification.
If no preference is specified at the transaction, account, or contract level, the protocol falls back to pathUSD.
Transaction level
Tempo's new transaction type, allows transactions to specify a fee_token on the transaction. This overrides any preferences set at the account, contract, or validator level.
For sponsored transactions, the tx.origin address does not sign over the fee_token field (allowing the fee_payer to choose the fee token).
Account level
An account can specify a fee token preference for all transactions for which it is the fee_payer (including both transactions it sponsors as well as non-sponsored transactions for which it is the tx.origin). This overrides any preference set at the contract or validator level.
To set its preference, the account can call the setUserToken function on the FeeManager precompile.
At this step, the protocol does one more check:
         * If the transaction is not a Tempo transaction and the transaction is a top-level call to the setUserToken function on the FeeManager, then the protocol checks the token argument to the function:
         * If that token is a TIP-20 whose currency is USD, that token is used as the fee token (unless the transaction specifies a fee_token at the transaction level).
         * If that token is not a TIP-20 or its currency is not USD, the transaction is invalid.
TIP-20 contracts
If the top-level call of a transaction is to a TIP-20 contract for which the currency is USD, or all of the top-level calls of a TempoTransaction are to the same TIP-20 contract for which the currency is USD, that token is used as the user's fee token for that transaction (unless there is a preference specified at the transaction or account level).
Stablecoin Exchange contract
If the top-level call of a transaction is to the Stablecoin Exchange contract, the function being called is either swapExactAmountIn or swapExactAmountOut, and the tokenIn argument to that function is the address of a TIP-20 token for which the currency is USD, then the tokenIn argument is used as the user's fee token for the transaction (unless there is a preference specified at the transaction or account level).
For Tempo transactions, this rule applies only if there is only one top-level call in the transaction.
pathUSD
If no fee preference is set at the transaction, account, or contract level, the protocol falls back to pathUSD as the user's fee token preference.
Validator preferences
Validators can set a default fee token preference that determines which stablecoin they receive for transaction fees. When users pay in different tokens, the Fee AMM automatically converts to the validator's preferred token.
Setting validator preference
To set their preference, validators call the setValidatorToken function on the FeeManager precompile:
// Set your preferred fee tokenfeeManager.setValidatorToken(preferredTokenAddress);
After setting a validator token preference, all fees collected in blocks the validator proposes will be automatically converted to the chosen token (if needed) and transferred to the validator's account.
On the Andantino testnet, validators currently expect alphaUSD (one of the tokens distributed by the faucet) as their fee token.
If validators have not specified a fee token preference, the protocol falls back to expecting pathUSD as their fee token.
Removing validator preference
To remove a validator token preference, set it to the zero address:
// Remove validator token preferencefeeManager.setValidatorToken(address(0));
Fee lifecycle
This section describes the complete flow of how fees are collected, converted, and distributed from user to validator.
Fee flow steps
When a user submits a transaction on Tempo, fees are paid in their chosen stablecoin (determined by the fee token preferences hierarchy). If the validator prefers a different stablecoin, the Fee AMM automatically converts the user's payment to the validator's preferred token.
1. User submits transaction
The transaction is submitted with the fee token determined by the preference hierarchy.
2. Pre-transaction collection
Before the transaction executes, the FeeManager contract collects the maximum possible fee amount from the user:
         * Verifies the user has sufficient balance in their chosen fee token
         * Checks if the Fee AMM has enough liquidity (if conversion is needed)
         * Collects the maximum fee amount based on the transaction's gas limit
If either check fails, the transaction is rejected before execution.
3. Transaction execution
The transaction executes normally. The actual gas consumed may be less than the maximum that was collected.
4. Post-transaction refund
After execution, the FeeManager:
         * Calculates the actual fee owed based on gas used
         * Refunds any unused tokens to the user
         * Queues the actual fee amount for conversion (if needed)
5. Fee swap queuing
If the user's fee token differs from the validator's preferred token, the fee is added to a pending fee swap queue for that token pair. The swap doesn't execute immediately—it's batched with all other fees collected during the block.
If the user's fee token matches the validator's preference, no conversion is needed and the fee goes directly to the validator.
6. End-of-block settlement
At the end of each block, the protocol:
         1. Calls executePendingFeeSwaps() on the Fee AMM for each token pair
         2. Executes all pending fee swaps at a fixed rate of 0.9970 (validator receives 0.9970 of their token per 1.0 user token paid)
         3. Updates the AMM pool reserves
         4. Transfers the converted tokens to the validator's account
This batched settlement prevents MEV attacks like sandwiching or backrunning individual fee payments.
Fee swap mechanics
Fee swaps always execute at a fixed rate of 0.9970:
validatorTokenOut = userTokenIn × 0.9970
This means:
         * User pays 1.0 USDC for fees
         * Validator receives 0.9970 USDT (if that's their preferred token)
         * The 0.003 (0.3%) difference goes to liquidity providers as a fee
Example flow
Here's a complete example of the fee lifecycle:
         1. Alice wants to send a transaction and pays fees in USDC (her preferred token)
         2. Validator prefers to receive fees in USDT
         3. Alice's transaction has a max fee of 1.0 USDC
         4. The FeeManager collects 1.0 USDC from Alice before execution
         5. Transaction executes and uses 0.8 USDC worth of gas
         6. The FeeManager refunds 0.2 USDC to Alice
         7. The remaining 0.8 USDC is queued for conversion
         8. At block end, the Fee AMM swaps 0.8 USDC → 0.7976 USDT (0.8 × 0.9970)
         9. Validator receives 0.7976 USDT
         10. Liquidity providers earn 0.0024 USDT from the 0.3% fee
Gas costs
The fee conversion process adds minimal overhead to transactions:
         * Pre-transaction: ~5,000 gas for balance and liquidity checks
         * Post-transaction: ~3,000 gas for refund and queue operations
         * Block settlement: Amortized across all transactions in the block
For complete technical specifications on the Fee AMM mechanism, see the Fee AMM Protocol Specification.
Fee AMM Overview
The Fee AMM (Automated Market Maker) is a dedicated system for converting transaction fees between different stablecoins. It enables users to pay fees in any supported stablecoin while allowing validators to receive fees in their preferred token.
How It Works
When a user pays fees in a stablecoin that differs from the validator's preference, the Fee AMM automatically converts the payment:
         * User pays: 1.0 of their chosen stablecoin
         * Validator receives: 0.9970 of their preferred stablecoin
         * Liquidity providers earn: 0.003 (0.3%) as fees
This conversion happens automatically at the end of each block through batched swaps, preventing MEV attacks like sandwiching.
Learn More
Use Your Stablecoin for Fees
Enable users to pay fees using your stablecoin
Fee AMM Specification
Complete Fee AMM protocol specification
Managing Fee Liquidity
Provide liquidity to enable fee token conversions
Specification
Previous
Fee AMM Specification
Abstract
This specification defines a system of one-way Automated Market Makers (AMMs) designed to facilitate gas fee payments from a user using one stablecoin (the userToken) to a validator who prefers a different stablecoin (the validatorToken). Each AMM handles fee swaps from a userToken to a validatorToken at one price (0.9970 validatorToken per userToken), and allows rebalancing in the other direction at another fixed price (0.9985 validatorToken per userToken).
Motivation
Current blockchain fee systems typically require users to hold native tokens for gas payments. This creates friction for users who prefer to transact in stablecoins.
The Fee AMM is a dedicated AMM for trading between stablecoins, which can only be used by the protocol (and by arbitrageurs rebalancing it to keep it balanced). The protocol automatically collects fees in many different coins during the block, and then sells them all at the end of the block (paying a constant price) into the token preferred by the validator.
The system is designed to minimize several forms of MEV:
         * No Probabilistic MEV: The fixed fee swap rate and batch settlement prevent profitable backrunning of fee swaps. There is no way to profitably spam the chain with transactions hoping an opportunity might arise.
         * No Sandwich Attacks: Fee swaps execute at a fixed rate and settle atomically at block end, eliminating sandwich attack vectors.
         * Top-of-Block Auction: The main MEV in the AMM (from rebalancing) occurs as a single race at the top of the next block rather than creating probabilistic spam throughout.
Specification
Overview
The Fee AMM implements two distinct swap mechanisms:
         1. Fee Swaps: Fixed-rate swaps at a price of 0.9970 (validator token per user token) from userToken to validatorToken
         2. Rebalancing Swaps: Fixed-rate swaps at a price of 0.9985 (validator token per user token) from validatorToken to userToken
Core Components
1. FeeAMM Contract
The primary AMM contract managing liquidity pools and swap operations.
Pool Structure
struct Pool {    uint128 reserveUserToken;           // Reserve of userToken    uint128 reserveValidatorToken;      // Reserve of validatorToken}
Each pool is directional: userToken → validatorToken. For a pair of tokens A and B, there are two separate pools:
         * Pool(A, B): for swapping A to B at fixed rate of 0.997 (fee swaps) and B to A at fixed rate of 0.9985 (rebalancing)
         * Pool(B, A): for swapping B to A at fixed rate of 0.997 (fee swaps) and A to B at fixed rate of 0.9985 (rebalancing)
Constants
         * M = 9970 (scaled by 10000, representing 0.9970)
         * N = 9985 (scaled by 10000, representing 0.9985)
         * SCALE = 10000
         * MIN_LIQUIDITY = 1000
Key Functions
function getPool(    address userToken,    address validatorToken) external view returns (Pool memory)
Returns the pool structure for a given token pair.
function getPoolId(    address userToken,    address validatorToken) external pure returns (bytes32)
Returns the pool ID for a given token pair (used internally for pool lookup).
function rebalanceSwap(    address userToken,    address validatorToken,    uint256 amountOut,    address to) external returns (uint256 amountIn)
Executes rebalancing swaps from validatorToken to userToken at fixed rate of 0.9985 (validator token per user token). Can be executed by anyone. Calculates amountIn = (amountOut * N) / SCALE + 1 (rounds up). Updates reserves immediately. Emits RebalanceSwap event.
function mint(    address userToken,    address validatorToken,    uint256 amountUserToken,    uint256 amountValidatorToken,    address to) external returns (uint256 liquidity)
Adds liquidity to a pool with both tokens. First provider sets initial reserves and must burn MIN_LIQUIDITY tokens. Subsequent providers must provide proportional amounts. Receives fungible LP tokens representing pro-rata share of pool reserves.
function mintWithValidatorToken(    address userToken,    address validatorToken,    uint256 amountValidatorToken,    address to) external returns (uint256 liquidity)
Single-sided liquidity provision with validator token only. Treats the deposit as equivalent to performing a hypothetical rebalanceSwap first at rate n = 0.9985 until the ratio of reserves match, then minting liquidity by depositing both. Formula: liquidity = amountValidatorToken * _totalSupply / (V + n * U), where n = N / SCALE. Rounds down to avoid over-issuing LP tokens. Updates reserves by increasing only validatorToken by amountValidatorToken. Emits Mint event with amountUserToken = 0.
function burn(    address userToken,    address validatorToken,    uint256 liquidity,    address to) external returns (uint256 amountUserToken, uint256 amountValidatorToken)
Burns LP tokens and receives pro-rata share of reserves. Reverts if withdrawal would prevent pending swaps at the end of the block. Emits Burn event.
function executePendingFeeSwaps(    address userToken,    address validatorToken) internal returns (uint256 amountOut)
Settles all pending fee swaps by updating reserves. Calculates amountOut = (amountIn * M) / SCALE. Only executed by the protocol, at the end of each block. Emits FeeSwap event.
function reserveLiquidity(    address userToken,    address validatorToken,    uint256 maxAmount) internal returns (bool)
Reserves liquidity for a pending fee swap. Calculates maxAmountOut = (maxAmount * M) / SCALE. Verifies sufficient validator token reserves (accounting for pending swaps). Tracks pending swap input.
function releaseLiquidityPostTx(    address userToken,    address validatorToken,    uint256 refundAmount) internal
Releases reserved liquidity when fees are refunded. Decreases pending swap input by refund amount.
2. FeeManager Contract
Tempo introduces a precompiled contract, the FeeManager, at the address 0xfeec000000000000000000000000000000000000.
The FeeManager is a singleton contract that implements all the functions of the Fee AMM for every pool. It also handles the collection and refunding of fees during each transaction, stores fee token preferences for users and validators, and implements the executeBlock() function that is called by a system transaction at the end of each block.
Key Functions
function setUserToken(address token) external
Sets the default fee token preference for the caller (user). Requires token to be a USD TIP-20 token. Emits UserTokenSet event. Access: Direct calls only (not via delegatecall).
function setValidatorToken(address token) external
Sets the fee token preference for the caller (validator). Requires token to be a USD TIP-20 token. Cannot be called during a block built by that validator. Emits ValidatorTokenSet event. Access: Direct calls only (not via delegatecall).
function collectFeePreTx(    address user,    address userToken,    uint256 maxAmount) external
Called by the protocol before transaction execution. The fee token (userToken) is determined by the protocol before calling using logic that considers: explicit tx fee token, setUserToken calls, stored user preference, tx.to if TIP-20. Reserves AMM liquidity if user token differs from validator token. Collects maximum possible fee from user. Access: Protocol only (msg.sender == address(0)).
function collectFeePostTx(    address user,    uint256 maxAmount,    uint256 actualUsed,    address userToken) external
Called by the protocol after transaction execution. The validator token and fee recipient are inferred from block.coinbase. Calculates refund amount: refundAmount = maxAmount - actualUsed. Refunds unused tokens to user. Releases reserved liquidity for refunded amount. Tracks collected fees for block-end settlement. Access: Protocol only (msg.sender == address(0)).
function executeBlock() external
Called once in a system transaction at the end of each block. Processes all collected fees and executes pending swaps. For each token with collected fees: if token differs from validator token, executes pending fee swaps via AMM and updates reserves and calculates output amount. Transfers all validator tokens to the validator (block.coinbase). Clears fee tracking arrays. Access: Protocol only (msg.sender == address(0)).
Swap Mechanisms
Fee Swaps
         * Rate: Fixed at m=0.9970 (validator receives 0.9970 of their preferred token per 1 user token that user pays)
         * Direction: User token to validator token
         * Purpose: Convert tokens paid by users as fees to tokens preferred by validators
         * Settlement: Batched at block end via executePendingFeeSwaps
         * Access: Protocol only
Rebalancing Swaps
         * Rate: Fixed at n=0.9985 (swapper receives 1 of the user token for every 0.9985 that they put in of the validator's preferred token)
         * Direction: Validator token to user token
         * Purpose: Refill reserves of validator token in the pool
         * Settlement: Immediate
         * Access: Anyone
Fee Collection Flow
         1. Pre-Transaction:
         * Protocol determines user's fee token using logic that considers: explicit tx fee token, setUserToken calls, stored user preference, tx.to if TIP-20
         * Protocol calculates maximum gas needed (maxAmount = gasLimit * maxFeePerGas)
         * FeeManager.collectFeePreTx(user, userToken, maxAmount) is called:
         * If user token differs from validator token, reserves AMM liquidity via reserveLiquidity()
         * Collects maximum fee from user using transferFeePreTx()
         * If any check fails (insufficient balance, insufficient liquidity), transaction is invalid
         2. Post-Transaction:
         * Calculate actual gas used (actualUsed = gasUsed * gasPrice)
         * FeeManager.collectFeePostTx(user, maxAmount, actualUsed, userToken) is called:
         * Validator token and fee recipient are inferred from block.coinbase
         * Calculates refund: refundAmount = maxAmount - actualUsed
         * Refunds unused tokens to user via transferFeePostTx()
         * Releases reserved liquidity for refunded amount via releaseLiquidityPostTx()
         * Tracks collected fees (actual used amount) for block-end settlement
         3. Block End:
         * System transaction calls FeeManager.executeBlock():
         * For each token with collected fees:
         * If token differs from validator token, executes pending fee swaps via executePendingFeeSwaps()
         * Updates pool reserves (adds userToken, subtracts validatorToken)
         * Transfers all validator tokens to validator (block.coinbase)
         * Clears fee tracking arrays
Events
event RebalanceSwap(    address indexed userToken,    address indexed validatorToken,    address indexed swapper,    uint256 amountIn,    uint256 amountOut)event FeeSwap(    address indexed userToken,    address indexed validatorToken,    uint256 amountIn,    uint256 amountOut)event Mint(    address indexed sender,    address indexed userToken,    address indexed validatorToken,    uint256 amountUserToken,    uint256 amountValidatorToken,    uint256 liquidity)event Burn(    address indexed sender,    address indexed userToken,    address indexed validatorToken,    uint256 amountUserToken,    uint256 amountValidatorToken,    uint256 liquidity,    address to)event UserTokenSet(address indexed user, address indexed token)event ValidatorTokenSet(address indexed validator, address indexed token)
Transfer events are emitted as usual for transactions, with the exception of paying gas fees via TIP20 tokens. For fee payments, a single Transfer event is emitted post execution to represent the actual fee amount consumed (i.e. gasUsed * gasPrice).
System transactions
This specification introduces system transactions, with the first being the executeBlock() call to the FeeManager contract at the end of each block. A system transaction is a legacy transaction with an empty signature (r = 0, s = 0, yParity = false) and with the sender as the 0 address (0x0000000000000000000000000000000000000000).
System transactions are only allowed when there is a specific consensus rule allowing them. A block is invalid if any required system transaction is missing or if any extra system transaction is present.
System transactions do not consume block gas, do not increment a sender nonce, do not contribute to block gas limit, and do not pay fees. They may set any gas price and gas limit (as specified by a specific rule), regardless of their execution gas or the block base fee. System transactions must not revert.
Execution transaction
Under this specification, exactly one system transaction must appear at the end of every block. It must have the following parameters:
Field
	Value / Requirement
	Notes / Validation
	Type
	Legacy transaction
	

	Position in Block
	Last transaction
	Block is invalid if absent or not last.
	From (sender)
	0x0000000000000000000000000000000000000000
	Zero address
	To (recipient)
	0xfeec000000000000000000000000000000000000
	FeeManager precompile.
	Calldata
	0xb306cc70
	ABI-encoded executeBlock(), no arguments.
	Value
	0
	No native token transfer.
	Nonce
	0
	

	Gas Limit
	0
	Does not contribute to block gas accounting.
	Gas Price
	0
	Independent of block base fee; does not pay fees.
	Signature
	r = 0, s = 0, yParity = false
	Empty signature designates system transaction.
	The proposer must construct and include this transaction when building the block. A block is invalid if the transaction is absent or not in the final position.
Gas
Fee swaps are designed to be gas-free from the user perspective. The pre-tx and post-tx steps in each transaction do not cost any gas; nor does the system transaction at the end of each block.
Overview
Previous
Tempo Transactions are a new EIP-2718 transaction type, exclusively available on Tempo.
SDKs Support.
Transaction SDKs are available for TypeScript, Rust, Go, and Foundry.
If you're integrating with Tempo, we strongly recommend using Tempo Transactions, and not regular Ethereum transactions. Learn more about the benefits below, or follow the guide on issuance here.
Configurable Fee Tokens
Pay transaction fees with any USD-denominated TIP-20 token via automatic Fee AMM conversion.
Fee Sponsorship
Sponsor gas fees for users, enabling feeless transaction experiences in your application.
Batch Calls
Batch multiple transactions together for higher throughput and simpler wallet management.
Access Keys
Delegate transaction signing capabilities to specific keys with customizable permissions.
Concurrent Transactions
Execute transactions in parallel using independent nonces for improved throughput.
Scheduled Transactions
Schedule transactions to execute within a specific time window for automated payments.
Integration Guides
Integrating Tempo Transactions is easy and can be done quickly by a developer in multiple languages. See below for quick links to some of our guides.
Language
	Source
	Integration Time
	TypeScript
	tempoxyz/tempo-ts
	< 1 hour
	Rust
	tempo-alloy
	< 1 hour
	Golang
	tempo-go
	< 1 hour
	Python
	pytempo
	< 1 hour
	Other Languages
	Reach out to us! Specification is here and easy to build against.
	1-3 days
	If you are an EVM smart contract developer, see the Tempo extension for Foundry.
Properties
Configurable Fee Tokens
A fee token is a permissionless TIP-20 token that can be used to pay fees on Tempo.
When a TIP-20 token is passed as the fee_token parameter in a transaction, Tempo's Fee AMM automatically facilitates conversion between the user's preferred fee token and the validator's preferred token.
Viem
Wagmi
RLP
example.tsviem.config.ts
import { client } from './viem.config' const alphaUsd = '0x20c0000000000000000000000000000000000001' const receipt = await client.sendTransactionSync({  data: '0xdeadbeef',  feeToken: alphaUsd,  to: '0xcafebabecafebabecafebabecafebabecafebabe',})
See a full guide on paying fees in any stablecoin.
Fee Sponsorship
Fee sponsorship enables a third party (the fee payer) to pay transaction fees on behalf of the transaction sender.
The process uses dual signature domains: the sender signs their transaction, and then the fee payer signs over the transaction with a special "fee payer envelope" to commit to paying fees for that specific sender.
Viem
Wagmi
RLP
example.tsviem.config.ts
import { client } from './viem.config' const feePayer = privateKeyToAccount('0x...') const receipt = await client.sendTransactionSync({  data: '0xdeadbeef',  feePayer,  to: '0xcafebabecafebabecafebabecafebabecafebabe',})
It is also possible to use a remote Fee Payer Relay instead of a local account.
Tempo provides a public testnet fee payer service at https://sponsor.testnet.tempo.xyz that you can use for development and testing. If you want to run your own, follow the instructions below.
See a full guide on sponsoring fees.
Batch Calls
Batch calls enable multiple operations to be executed atomically within a single transaction. Instead of sending separate transactions for each operation, you can bundle multiple calls together using the calls parameter.
Viem
Wagmi
RLP
example.tsviem.config.ts
import { client } from './viem.config' const receipt = await client.sendTransactionSync({  calls: [    {      to: '0xcafebabecafebabecafebabecafebabecafebabe',      data: '0xdeadbeef0000000000000000000000000000000001',    },    {      to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',      data: '0xcafebabe0000000000000000000000000000000001',    },    {      to: '0xcafebabecafebabecafebabecafebabecafebabe',      data: '0xdeadbeef0000000000000000000000000000000001',    },  ] })
Access Keys
Access keys enable you to delegate signing authority from a primary account to a secondary key, such as device-bound non-extractable WebCrypto key. The primary account signs a key authorization that grants the access key permission to sign transactions on its behalf.
This authorization is then attached to the next transaction (that can be signed by either the primary or the access key), then all transactions thereafter can be signed by the access key.
Viem
Wagmi
RLP
example.tsviem.config.ts
import { Account, WebCryptoP256 } from 'tempo.ts/viem'import { client } from './viem.config' // 1. Instantiate account.const account = Account.fromSecp256k1('0x...') // 2. Generate a non-extractable WebCrypto key pair & instantiate access key.const keyPair = await WebCryptoP256.createKeyPair()const accessKey = Account.fromWebCryptoP256(keyPair, {  access: account,}) // 3. Sign over key authorization with account.const keyAuthorization = await account.signKeyAuthorization(accessKey) // 4. Attach key authorization to (next) transaction.const receipt = await client.sendTransactionSync({  account: accessKey, // sign transaction with access key  data: '0xdeadbeef0000000000000000000000000000000001',  keyAuthorization,  to: '0xcafebabecafebabecafebabecafebabecafebabe',})
Learn more about Access Keys.
Concurrent Transactions
Concurrent transactions enable higher throughput by allowing multiple transactions from the same account to be sent in parallel without waiting for sequential nonce confirmation.
By using different nonce keys, you can submit multiple transactions simultaneously that don't conflict with each other, enabling parallel execution and significantly improved transaction throughput for high-activity accounts.
Viem
Wagmi
RLP
example.tsviem.config.ts
import { client } from './viem.config' const [receipt1, receipt2, receipt3] = await Promise.all([  client.sendTransactionSync({    data: '0xdeadbeef0000000000000000000000000000000001',    to: '0xcafebabecafebabecafebabecafebabecafebabe',  }),  client.sendTransactionSync({    data: '0xcafebabe0000000000000000000000000000000001',    to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',  }),  client.sendTransactionSync({    data: '0xdeadbeef0000000000000000000000000000000001',    to: '0xcafebabecafebabecafebabecafebabecafebabe',  }),])
example.tsviem.config.ts
import { client } from './viem.config' const hash1 = await client.sendTransaction({  data: '0xdeadbeef0000000000000000000000000000000001',  nonceKey: 567n,  to: '0xcafebabecafebabecafebabecafebabecafebabe',})const hash2 = await client.sendTransaction({  data: '0xdeadbeef0000000000000000000000000000000001',  nonceKey: 789n,  to: '0xcafebabecafebabecafebabecafebabecafebabe',})
Scheduled Transactions
Scheduled transactions allow you to sign a transaction in advance and specify a time window for when it can be executed onchain. By setting validAfter and validBefore timestamps, you define the earliest and latest times the transaction can be included in a block.
Viem
Wagmi
RLP
example.tsviem.config.ts
import { client } from './viem.config' const signature = await client.signTransaction({  data: '0xdeadbeef0000000000000000000000000000000001',  to: '0xcafebabecafebabecafebabecafebabecafebabe',  validAfter: Math.floor(Number(new Date('2026-01-01')) / 1000),  validBefore: Math.floor(Number(new Date('2026-01-02')) / 1000), })
Learn more
Specification
Native protocol support for new transaction features including WebAuthn/P256 signatures, parallelizable nonces, gas sponsorship, call batching, and scheduled transactions
Guide: Pay Fees in Any Stablecoin
Configure users to pay transaction fees in any supported stablecoin
Guide: Send Batch Transactions
Execute multiple operations atomically
Guide: Sponsor Transaction Fees
Enable gasless transactions with fee payers
Guide: Sign Using Passkeys & P256 Keys
Sign transactions with WebAuthn, P256, or secp256k1 signatures
Rust Implementation
Previousshift←
Specification
Tempo Transaction
Abstract
This spec introduces native protocol support for the following features, using a new Tempo transaction type:
         * WebAuthn/P256 signature validation - enables passkey accounts
         * Parallelizable nonces - allows higher tx throughput for each account
         * Gas sponsorship - allows apps to pay for their users' transactions
         * Call Batching - allows users to multicall efficiently and atomically
         * Scheduled Txs - allow users to specify a time window in which their tx can be executed
         * Access Keys - allow a sender's key to provision scoped access keys with spending limits
Motivation
Current accounts are limited to secp256k1 signatures and sequential nonces, creating UX and scalability challenges.
Users cannot leverage modern authentication methods like passkeys, applications face throughput limitations due to sequential nonces.
Specification
Transaction Type
A new EIP-2718 transaction type is introduced with type byte 0x76:
pub struct TempoTransaction {    // Standard EIP-1559 fields    chain_id: ChainId,                          // EIP-155 replay protection    max_priority_fee_per_gas: u128,    max_fee_per_gas: u128,    gas_limit: u64,    calls: Vec<Call>,                           // Batch of calls to execute atomically    access_list: AccessList,                    // EIP-2930 access list    // nonce-related fields    nonce_key: U256,                            // 2D nonce key (0 = protocol nonce, >0 = user nonces)    nonce: u64,                                 // Current nonce value for the nonce key    // Optional features    fee_token: Option<Address>,                 // Optional fee token preference    fee_payer_signature: Option<Signature>,     // Sponsored transactions (secp256k1 only)    valid_before: Option<u64>,                  // Transaction expiration timestamp    valid_after: Option<u64>,                   // Transaction can only be included after this timestamp    key_authorization: Option<SignedKeyAuthorization>, // Access key authorization (optional)    aa_authorization_list: Vec<TempoSignedAuthorization>, // EIP-7702 style authorizations with AA signatures} // Call structure for batchingpub struct Call {    to: TxKind,      // Can be Address or Create    value: U256,    input: Bytes     // Calldata for the call} // Key authorization for provisioning access keys// RLP encoding: [chain_id, key_type, key_id, expiry?, limits?]pub struct KeyAuthorization {    chain_id: u64,                              // Chain ID for replay protection (0 = valid on any chain)    key_type: SignatureType,                    // Type of key: Secp256k1 (0), P256 (1), or WebAuthn (2)    key_id: Address,                            // Key identifier (address derived from public key)    expiry: Option<u64>,                        // Unix timestamp when key expires (None = never expires)    limits: Option<Vec<TokenLimit>>,            // TIP20 spending limits (None = unlimited spending)} // Signed key authorization (authorization + root key signature)pub struct SignedKeyAuthorization {    authorization: KeyAuthorization,    signature: PrimitiveSignature,              // Root key's signature over keccak256(rlp(authorization))} // TIP20 spending limits for access keyspub struct TokenLimit {    token: Address,                             // TIP20 token address    limit: U256,                                // Maximum spending amount for this token}
Signature Types
Four signature schemes are supported. The signature type is determined by length and type identifier:
secp256k1 (65 bytes)
pub struct Signature {    r: B256,        // 32 bytes    s: B256,        // 32 bytes    v: u8           // 1 byte (recovery id)}
Format: No type identifier prefix (backward compatible). Total length: 65 bytes. Detection: Exactly 65 bytes with no type identifier.
P256 (130 bytes)
pub struct P256SignatureWithPreHash {    typeId: u8,         // 0x01    r: B256,            // 32 bytes    s: B256,            // 32 bytes    pub_key_x: B256,    // 32 bytes    pub_key_y: B256,    // 32 bytes    pre_hash: bool      // 1 byte}
Format: Type identifier 0x01 + 129 bytes of signature data. Total length: 130 bytes. The typeId is a wire format prefix (not a struct field) prepended during encoding.
Note: Some P256 implementers (like Web Crypto) require the digests to be pre-hashed before verification. If pre_hash is set to true, then before verification: digest = sha256(digest).
WebAuthn (Variable length, max 2KB)
pub struct WebAuthnSignature {    typeId: u8,                 // 0x02    webauthn_data: Bytes,       // Variable length (authenticatorData || clientDataJSON)    r: B256,                    // 32 bytes    s: B256,                    // 32 bytes    pub_key_x: B256,            // 32 bytes    pub_key_y: B256             // 32 bytes}
Format: Type identifier 0x02 + variable webauthn_data + 128 bytes (r, s, pub_key_x, pub_key_y). Total length: variable (minimum 129 bytes, maximum 2049 bytes). The typeId is a wire format prefix prepended during encoding. Parse by working backwards: last 128 bytes are r, s, pub_key_x, pub_key_y.
Keychain (Variable length)
pub struct KeychainSignature {    typeId: u8,                     // 0x03    user_address: Address,          // 20 bytes - root account address    signature: PrimitiveSignature   // Inner signature (Secp256k1, P256, or WebAuthn)}
Format: Type identifier 0x03 + user_address (20 bytes) + inner signature. The typeId is a wire format prefix prepended during encoding. Purpose: Allows an access key to sign on behalf of a root account. The handler validates that user_address has authorized the access key in the AccountKeychain precompile.
Address Derivation
secp256k1
address(uint160(uint256(keccak256(abi.encode(x, y)))))
P256 and WebAuthn
function deriveAddressFromP256(bytes32 pubKeyX, bytes32 pubKeyY) public pure returns (address) {       // Hash    bytes32 hash = keccak256(abi.encodePacked(        pubKeyX,        pubKeyY    ));       // Take last 20 bytes as address    return address(uint160(uint256(hash)));}
Tempo Authorization List
The aa_authorization_list field enables EIP-7702 style delegation with support for all three AA signature types (secp256k1, P256, and WebAuthn), not just secp256k1.
Structure
pub struct TempoSignedAuthorization {    inner: Authorization,      // Standard EIP-7702 authorization    signature: TempoSignature,    // Can be Secp256k1, P256, or WebAuthn}
Each authorization in the list:
         * Delegates an account to a specified implementation contract
         * Is signed by the account's authority using any supported signature type
         * Follows EIP-7702 semantics for delegation and execution
Validation
         * Cannot have Create calls when aa_authorization_list is non-empty (follows EIP-7702 semantics)
         * Authority address is recovered from the signature and matched against the authorization
Parallelizable Nonces
         * Protocol nonce (key 0): Existing account nonce, incremented for regular txs, 7702 authorization, or CREATE
         * User nonces (keys 1-N): Enable parallel execution with special gas schedule
         * Reserved sequence keys: Nonce sequence keys with the most significant byte 0x5b are reserved for sub-block transactions.
Account State Changes
         * nonces: mapping(uint256 => uint64) - 2D nonce tracking
Implementation Note: Nonces are stored in the storage of a designated precompile at address 0x4E4F4E4345000000000000000000000000000000 (ASCII hex for "NONCE"), as there is currently no clean way to extend account state in Reth.
Storage Layout at 0x4E4F4E4345:
         * Storage key: keccak256(abi.encode(account_address, nonce_key))
         * Storage value: nonce (uint64)
Note: Protocol Nonce key (0), is directly stored in the account state, just like normal transaction types.
Nonce Precompile
The nonce precompile implements the following interface for managing 2D nonces:
/// @title INonce - Nonce Precompile Interface/// @notice Interface for managing 2D nonces as per the Tempo Transaction spec/// @dev This precompile manages user nonce keys (1-N) while protocol nonces (key 0)///      are handled directly by account state. Each account can have multiple///      independent nonce sequences identified by a nonce key.interface INonce {    /// @notice Emitted when a nonce is incremented for an account and nonce key    /// @param account The account whose nonce was incremented    /// @param nonceKey The nonce key that was incremented    /// @param newNonce The new nonce value after incrementing    event NonceIncremented(address indexed account, uint256 indexed nonceKey, uint64 newNonce);    /// @notice Thrown when trying to access protocol nonce (key 0) through the precompile    /// @dev Protocol nonce should be accessed through account state, not this precompile    error ProtocolNonceNotSupported();    /// @notice Thrown when an invalid nonce key is provided    error InvalidNonceKey();    /// @notice Thrown when a nonce value would overflow    error NonceOverflow();    /// @notice Get the current nonce for a specific account and nonce key    /// @param account The account address    /// @param nonceKey The nonce key (must be > 0, protocol nonce key 0 not supported)    /// @return nonce The current nonce value    function getNonce(address account, uint256 nonceKey) external view returns (uint64 nonce);}
Precompile Implementation
The precompile contract maintains a single storage mapping:
contract Nonce is INonce {    /// @dev Mapping from account -> nonce key -> nonce value    mapping(address => mapping(uint256 => uint64)) private nonces;}
Gas Schedule
For transactions using nonce keys:
         1. Protocol nonce (key 0): No additional gas cost
         * Uses the standard account nonce stored in account state
         2. Existing user key (nonce > 0): Add 5,000 gas to base cost
         * Rationale: Cold SLOAD (2,100) + warm SSTORE reset (2,900)
         3. New user key (nonce == 0): Add 22,100 gas to base cost
         * Rationale: Cold SLOAD (2,100) + SSTORE set for 0 → non-zero (20,000)
We specify the complete gas schedule in more detail in the gas costs section
Transaction Validation
Signature Validation
         1. Determine type from signature format:
         * 65 bytes (no type identifier) = secp256k1
         * First byte 0x01 + 129 bytes = P256 (total 130 bytes)
         * First byte 0x02 + variable data = WebAuthn (total 129-2049 bytes)
         * First byte 0x03 + 20 bytes + inner signature = Keychain
         * Otherwise invalid
         2. Apply appropriate verification:
         * secp256k1: Standard ecrecover
         * P256: P256 curve verification with provided public key (sha256 pre-hash if flag set)
         * WebAuthn: Parse clientDataJSON, verify challenge and type, then P256 verify
         * Keychain: Verify inner signature, then validate access key authorization via AccountKeychain precompile
Nonce Validation
         1. Fetch sequence for given nonce key
         2. Verify sequence matches transaction
         3. Increment sequence
Fee Payer Validation (if present)
         1. Verify fee payer signature (K1 only initially)
         2. Recover payer address via ecrecover
         3. Deduct fees from payer instead of sender
Fee Payer Signature Details
The Tempo Transaction Type (0x76) supports gas sponsorship where a third party (fee payer) can pay transaction fees on behalf of the sender. This is achieved through dual signature domains—the sender signs with transaction type byte 0x76, while the fee payer signs with magic byte 0x78 to ensure domain separation and prevent signature reuse attacks.
Signing Domains
Sender Signature
For computing the transaction hash that the sender signs:
         * Fields are preceded by transaction type byte 0x76
         * Field 11 (fee_token) is encoded as empty string (0x80) if and only if fee_payer_signature is present. This allows the fee payer to specify the fee token.
         * Field 12 (fee_payer_signature) is encoded as:
         * Single byte 0x00 if fee payer signature will be present (placeholder)
         * Empty string 0x80 if no fee payer
Sender Signature Hash:
// When fee_payer_signature is present:sender_hash = keccak256(0x76 || rlp([    chain_id,    max_priority_fee_per_gas,    max_fee_per_gas,    gas_limit,    calls,    access_list,    nonce_key,    nonce,    valid_before,    valid_after,    0x80,  // fee_token encoded as EMPTY (skipped)    0x00   // placeholder byte for fee_payer_signature])) // When no fee_payer_signature:sender_hash = keccak256(0x76 || rlp([    chain_id,    max_priority_fee_per_gas,    max_fee_per_gas,    gas_limit,    calls,    access_list,    nonce_key,    nonce,    valid_before,    valid_after,    fee_token,  // fee_token is INCLUDED    0x80        // empty for no fee_payer_signature]))
Fee Payer Signature
Only included for sponsored transactions. For computing the fee payer's signature hash:
         * Fields are preceded by magic byte 0x78 (different from transaction type 0x76)
         * Field 11 (fee_token) is always included (20-byte address or 0x80 for None)
         * Field 12 is serialized as the sender address (20 bytes). This commits the fee payer to sponsoring a specific sender.
Fee Payer Signature Hash:
fee_payer_hash = keccak256(0x78 || rlp([  // Note: 0x78 magic byte    chain_id,    max_priority_fee_per_gas,    max_fee_per_gas,    gas_limit,    calls,    access_list,    nonce_key,    nonce,    valid_before,    valid_after,    fee_token,      // fee_token ALWAYS included    sender_address  // 20-byte sender address    key_authorization,]))
Key Properties
         1. Sender Flexibility: By omitting fee_token from sender signature when fee payer is present, the fee payer can specify which token to use for payment without invalidating the sender's signature
         2. Fee Payer Commitment: Fee payer's signature includes fee_token and sender_address, ensuring they agree to:
         * Pay for the specific sender
         * Use the specific fee token
         3. Domain Separation: Different magic bytes (0x76 vs 0x78) prevent signature reuse attacks between sender and fee payer roles
         4. Deterministic Fee Payer: The fee payer address is statically recoverable from the transaction via secp256k1 signature recovery
Validation Rules
Signature Requirements:
         * Sender signature MUST be valid (secp256k1, P256, or WebAuthn depending on signature length)
         * If fee_payer_signature present:
         * MUST be recoverable via secp256k1 (only secp256k1 supported for fee payers)
         * Recovery MUST succeed, otherwise transaction is invalid
         * If fee_payer_signature absent:
         * Fee payer defaults to sender address (self-paid transaction)
Token Preference:
         * When fee_token is Some(address), this overrides any account/validator-level preferences
         * Validation ensures the token is a valid TIP-20 token with sufficient balance/liquidity
         * Failures reject the transaction before execution (see Token Preferences spec)
Fee Payer Resolution:
         * Fee payer signature present → recovered address via ecrecover
         * Fee payer signature absent → sender address
         * This address is used for all fee accounting (pre-charge, refund) via TIP Fee Manager precompile
Transaction Flow
         1. User prepares transaction: Sets fee_payer_signature to placeholder (Some(Signature::default()))
         2. User signs: Computes sender hash (with fee_token skipped) and signs
         3. Fee payer receives user-signed transaction
         4. Fee payer verifies user signature is valid
         5. Fee payer signs: Computes fee payer hash (with fee_token and sender_address) and signs
         6. Complete transaction: Replace placeholder with actual fee payer signature
         7. Broadcast: Transaction is sent to network with both signatures
Error Cases
         * fee_payer_signature present but unrecoverable → invalid transaction
         * Fee payer balance insufficient for gas_limit * max_fee_per_gas in fee token → invalid
         * Any sender signature failure → invalid
         * Malformed RLP → invalid
RLP Encoding
The transaction is RLP encoded as follows:
Signed Transaction Envelope:
0x76 || rlp([    chain_id,    max_priority_fee_per_gas,    max_fee_per_gas,    gas_limit,    calls,                   // RLP list of Call structs    access_list,    nonce_key,    nonce,    valid_before,            // 0x80 if None    valid_after,             // 0x80 if None    fee_token,               // 0x80 if None    fee_payer_signature,     // 0x80 if None, RLP list [v, r, s] if Some    aa_authorization_list,   // EIP-7702 style authorization list with AA signatures    key_authorization?,      // Only encoded if present (backwards compatible)    sender_signature         // TempoSignature bytes (secp256k1, P256, WebAuthn, or Keychain)])
Call Encoding:
rlp([to, value, input])
Key Authorization Encoding:
rlp([    chain_id,    key_type,    key_id,    expiry?,         // Optional trailing field (omitted or 0x80 if None)    limits?,         // Optional trailing field (omitted or 0x80 if None)    signature        // PrimitiveSignature bytes])
Notes:
         * Optional fields encode as 0x80 (EMPTY_STRING_CODE) when None
         * The key_authorization field is truly optional - when None, no bytes are encoded (backwards compatible)
         * The calls field is a list that must contain at least one Call (empty calls list is invalid)
         * The sender_signature field is the final field and contains the TempoSignature bytes (secp256k1, P256, WebAuthn, or Keychain)
         * KeyAuthorization uses RLP trailing field semantics for optional expiry and limits
WebAuthn Signature Verification
WebAuthn verification follows the Daimo P256 verifier approach.
Signature Format
signature = authenticatorData || clientDataJSON || r (32) || s (32) || pubKeyX (32) || pubKeyY (32)
Parse by working backwards:
         * Last 32 bytes: pubKeyY
         * Previous 32 bytes: pubKeyX
         * Previous 32 bytes: s
         * Previous 32 bytes: r
         * Remaining bytes: authenticatorData || clientDataJSON (requires parsing to split)
Authenticator Data Structure (minimum 37 bytes)
Bytes 0-31:   rpIdHash (32 bytes)Byte 32:      flags (1 byte)              - Bit 0 (0x01): User Presence (UP) - must be setBytes 33-36:  signCount (4 bytes)
Verification Steps
def verify_webauthn(tx_hash: bytes32, signature: bytes, require_uv: bool) -> bool:    # 1. Parse signature    pubKeyY = signature[-32:]    pubKeyX = signature[-64:-32]    s = signature[-96:-64]    r = signature[-128:-96]    webauthn_data = signature[:-128]    # Parse authenticatorData and clientDataJSON    # Minimum authenticatorData is 37 bytes    # Simple approach: try to decode clientDataJSON from different split points    authenticatorData, clientDataJSON = split_webauthn_data(webauthn_data)    # 2. Validate authenticator data    if len(authenticatorData) < 37:        return False    flags = authenticatorData[32]    if not (flags & 0x01):  # UP bit must be set        return False    # 3. Validate client data JSON    if not contains(clientDataJSON, '"type":"webauthn.get"'):        return False    challenge_b64url = base64url_encode(tx_hash)    challenge_property = '"challenge":"' + challenge_b64url + '"'    if not contains(clientDataJSON, challenge_property):        return False    # 4. Compute message hash    clientDataHash = sha256(clientDataJSON)    messageHash = sha256(authenticatorData || clientDataHash)    # 5. Verify P256 signature    return p256_verify(messageHash, r, s, pubKeyX, pubKeyY)
What We Verify
         * Authenticator data minimum length (37 bytes)
         * User Presence (UP) flag is set
         * "type":"webauthn.get" in clientDataJSON
         * Challenge matches tx_hash (Base64URL encoded)
         * P256 signature validity
What We Skip
         * Origin verification (not applicable to blockchain)
         * RP ID hash validation (no central RP in decentralized context)
         * Signature counter (anti-cloning left to application layer)
         * Backup flags (account policy decision)
Parsing authenticatorData and clientDataJSON
Since authenticatorData has variable length, finding the split point requires:
         1. Check if AT flag (bit 6) is set at byte 32
         2. If not set, authenticatorData is exactly 37 bytes
         3. If set, need to parse CBOR credential data (complex, see implementation)
         4. Everything after authenticatorData is clientDataJSON (valid UTF-8 JSON)
Simplified approach: For TempoTransactions, wallets should send minimal authenticatorData (37 bytes, no AT/ED flags) to minimize gas costs and simplify parsing.
Access Keys
A sender can choose to authorize an Access Key to sign transactions on the sender's behalf. This is useful to enable flows where a root key (e.g. a passkey) would provision a short-lived (scoped) Access Key to be able to sign transactions on the sender's behalf without inducing another passkey prompt.
More information about Access Keys can be found in the Account Keychain Specification.
A sender can authorize a key by signing over a "key authorization" item that contains the following information:
         * Chain ID for replay protection (0 = valid on any chain)
         * Key type (Secp256k1, P256, or WebAuthn)
         * Key ID (address derived from the public key)
         * Expiration timestamp of when the key should expire (optional - None means never expires)
         * TIP20 token spending limits for the key (optional - None means unlimited spending):
         * Limits deplete as tokens are spent
         * Root key can update limits via updateSpendingLimit() without revoking the key
         * Note: Spending limits only apply to TIP20 token transfers, not ETH or other asset transfers
RLP Encoding
Unsigned Format:
The root key signs over the keccak256 hash of the RLP encoded KeyAuthorization:
key_authorization_digest = keccak256(rlp([chain_id, key_type, key_id, expiry?, limits?])) chain_id = u64 (0 = valid on any chain)key_type = 0 (Secp256k1) | 1 (P256) | 2 (WebAuthn)key_id = Address (derived from the public key)expiry = Option<u64> (unix timestamp, None = never expires, stored as u64::MAX in precompile)limits = Option<Vec<[token, limit]>> (None = unlimited spending)
Signed Format:
The signed format (SignedKeyAuthorization) includes all fields with the signature appended:
signed_key_authorization = rlp([chain_id, key_type, key_id, expiry?, limits?, signature])
The signature is a PrimitiveSignature (secp256k1, P256, or WebAuthn) signed by the root key.
Note: expiry and limits use RLP trailing field semantics - they can be omitted entirely when None.
Keychain Precompile
The Account Keychain precompile (deployed at address 0xAAAAAAAA00000000000000000000000000000000) manages authorized access keys for accounts. It enables root keys to provision scoped access keys with expiry timestamps and per-TIP20 token spending limits.
See the Account Keychain Specification for complete interface details, storage layout, and implementation.
Protocol Behavior
The protocol enforces Access Key authorization and spending limits natively.
Transaction Validation
When a TempoTransaction is received, the protocol:
         1. Identifies the signing key from the transaction signature
         * If signature is a Keychain variant: extracts the keyId (address) of the Access Key
         * Otherwise: treats it as the Root Key (keyId = address(0))
         2. Validates KeyAuthorization (if present in transaction)
         * The key_authorization field in TempoTransaction provisions a NEW Access Key
         * Root Key MUST sign:
         * The key_authorization digest: keccak256(rlp([key_type, key_id, expiry, limits]))
         * Access Key (being authorized) CAN sign the same tx which it is authorized in.
         * This enables "authorize and use" in a single transaction
         3. Sets transaction context
         * Stores transactionKey[account] = keyId in protocol state
         * Used to enforce authorization hierarchy during execution, can also be used by DApps to see which key authorized the current tx.
         4. Validates Key Authorization (for Access Keys)
         * Queries precompile: getKey(account, keyId) returns KeyInfo
         * Checks key is active (not revoked)
         * Checks expiry: current_timestamp < expiry (or expiry == 0 for never expires)
         * Rejects transaction if validation fails
Authorization Hierarchy Enforcement
The protocol enforces a strict two-tier hierarchy:
Root Key (keyId = address(0)):
         * The account's primary key (address matches account address)
         * Can call ALL precompile functions
         * No spending limits
         * Can authorize, revoke, and update Access Keys
Access Keys (keyId != address(0)):
         * Secondary keys authorized by Root Key
         * CANNOT call mutable precompile functions (authorizeKey, revokeKey, updateSpendingLimit)
         * Precompile functions check: transactionKey[msg.sender] == 0 before allowing mutations
         * Subject to per-TIP20 token spending limits
         * Can have expiry timestamps
When an Access Key attempts to call authorizeKey(), revokeKey(), or updateSpendingLimit():
         1. Transaction executes normally until the precompile call
         2. Precompile checks getTransactionKey() returns non-zero (Access Key)
         3. Call reverts with UnauthorizedCaller error
         4. Entire transaction is reverted
Spending Limit Enforcement
The protocol tracks and enforces spending limits for TIP20 token transfers:
Scope: Only TIP20 transfer() and approve() calls are tracked
         * Native value transfers are NOT limited
         * NFT transfers are NOT limited
         * Other asset types are NOT limited
Tracking: During transaction execution, when an Access Key's transaction calls TIP20 methods:
         1. Protocol intercepts transfer(to, amount) and approve(spender, amount) calls
         2. For transfer, the full amount is checked against the remaining limit
         3. For approve, only increases in approval (new approval minus previous allowance) are checked and counted against the limit
         4. Queries: getRemainingLimit(account, keyId, token)
         5. Checks: relevant amount (transfer amount or approval increase) <= remaining_limit
         6. If check fails: reverts with SpendingLimitExceeded
         7. If check passes: decrements the limit by the relevant amount
         8. Updates are stored in precompile state
Root Key Behavior: Spending limit checks are skipped entirely (no limits apply)
Limit Updates:
         * Limits deplete as tokens are spent
         * Root Key can call updateSpendingLimit(keyId, token, newLimit) to set new limits
         * Setting a new limit REPLACES the current remaining amount (does not add to it)
         * Limits do not reset automatically (no time-based periods)
Creating and Using KeyAuthorization
First-Time Authorization Flow:
         1. Generate Access Key
         2. // Generate a new P256 or secp256k1 key pairconst accessKey = generateKeyPair("p256"); // or "secp256k1"const keyId = deriveAddress(accessKey.publicKey);
         3. Create Authorization Message
         4. // Define key parametersconst keyAuth = {  key_type: SignatureType.P256,      // 1  key_id: keyId,                     // address derived from public key  expiry: timestamp + 86400,         // 24 hours from now (or 0 for never)  limits: [    { token: USDC_ADDRESS, amount: 1000000000 }, // 1000 USDC (6 decimals)    { token: DAI_ADDRESS, amount: 500000000000000000000 }  // 500 DAI (18 decimals)  ]}; // Compute digest: keccak256(rlp([key_type, key_id, expiry, limits]))const authDigest = computeAuthorizationDigest(keyAuth);
         5. Root Key Signs Authorization
         6. // Sign with Root Key (e.g., passkey prompt)const rootSignature = await signWithRootKey(authDigest);
         7. Build TempoTransaction
         8. const tx = {  chain_id: 1,  nonce: await getNonce(account),  nonce_key: 0,  calls: [{ to: recipient, value: 0, input: "0x" }],  gas_limit: 200000,  max_fee_per_gas: 1000000000,  max_priority_fee_per_gas: 1000000000,  key_authorization: {    key_type: keyAuth.key_type,    expiry: keyAuth.expiry,    limits: keyAuth.limits,    key_id: keyAuth.key_id,    signature: rootSignature  // Root Key's signature on authDigest  },  // ... other fields};
         9. Access Key Signs Transaction
         10. // Sign transaction with the NEW Access Key being authorizedconst txHash = computeTxSignatureHash(tx);const accessSignature = await signWithAccessKey(txHash, accessKey); // Wrap in Keychain signatureconst finalSignature = {  Keychain: {    user_address: account,    signature: { P256: accessSignature }  // or Secp256k1  }};
         11. Submit Transaction
         * Protocol validates Root Key signed the key_authorization
         * Protocol calls authorizeKey() on the precompile to store the key
         * Protocol validates Access Key signature on transaction
         * Transaction executes with spending limits enforced
Subsequent Usage (Key Already Authorized):
// Access Key is already authorized, just sign transactions directlyconst tx = {  chain_id: 1,  nonce: await getNonce(account),  calls: [{ to: recipient, value: 0, input: calldata }],  key_authorization: null,  // No authorization needed  // ... other fields}; const txHash = computeTxSignatureHash(tx);const accessSignature = await signWithAccessKey(txHash, accessKey); const finalSignature = {  Keychain: {    user_address: account,    signature: { P256: accessSignature }  }}; // Submit - protocol validates key is authorized and not expired
Key Management Operations
Revoking an Access Key:
// Must be signed by Root Keyconst tx = {  chain_id: 1,  nonce: await getNonce(account),  calls: [{    to: ACCOUNT_KEYCHAIN_ADDRESS,    value: 0,    input: encodeCall("revokeKey", [keyId])  }],  // ... sign with Root Key};
Updating Spending Limits:
// Must be signed by Root Keyconst tx = {  chain_id: 1,  nonce: await getNonce(account),  calls: [{    to: ACCOUNT_KEYCHAIN_ADDRESS,    value: 0,    input: encodeCall("updateSpendingLimit", [      keyId,      USDC_ADDRESS,      2000000000  // New limit: 2000 USDC    ])  }],  // ... sign with Root Key};
Note: After updating, the remaining limit is set to the newLimit value, not added to the current remaining amount.
Querying Key State
Applications can query key information and spending limits:
// Check if key is authorized and get infoconst keyInfo = await precompile.getKey(account, keyId);// Returns: { signatureType, keyId, expiry } // Check remaining spending limit for a tokenconst remaining = await precompile.getRemainingLimit(account, keyId, USDC_ADDRESS);// Returns: uint256 amount remaining // Get which key signed current transaction (callable from contracts)const currentKey = await precompile.getTransactionKey();// Returns: address (0x0 for Root Key, keyId for Access Key)
Rationale
Signature Type Detection by Length
Using signature length for type detection avoids adding explicit type fields while maintaining deterministic parsing. The chosen lengths (65, 129, variable) are naturally distinct.
Linear Gas Scaling for Nonce Keys
The progressive pricing model prevents state bloat while keeping initial keys affordable. The 20,000 gas increment approximates the long-term state cost of maintaining each additional nonce mapping.
No Nonce Expiry
Avoiding expiry simplifies the protocol and prevents edge cases where in-flight transactions become invalid. Wallets handle nonce key allocation to prevent conflicts.
Backwards Compatibility
This spec introduces a new transaction type and does not modify existing transaction processing. Legacy transactions continue to work unchanged. We special case nonce key = 0 (also referred to as the protocol nonce key) to maintain compatibility with existing nonce behavior.
Gas Costs
Signature Verification Gas Schedule
Different signature types incur different base transaction costs to reflect their computational complexity:
Signature Type
	Base Gas Cost
	Calculation
	Rationale
	secp256k1
	21,000
	Standard
	Includes 3,000 gas for ecrecover precompile
	P256
	26,000
	21,000 + 5,000
	Base 21k + additional 5k for P256 verification
	WebAuthn
	26,000 + variable data cost
	26,000 + (calldata gas for clientDataJSON)
	Base P256 cost plus variable cost for clientDataJSON based on size
	Keychain
	Inner signature + 3,000
	primitive_sig_cost + 3,000
	Inner signature cost + key validation overhead (2,100 SLOAD + 900 buffer)
	Rationale:
         * The base 21,000 gas for standard transactions already includes the cost of secp256k1 signature verification via ecrecover (3,000 gas)
         * EIP 7951 sets P256 verification cost at 6,900 gas. We add 1,100 gas to account for the additional 65 bytes of signature size (129 bytes total vs 64 bytes for secp256k1), giving 8,000 gas total. Since the base 21k already includes 3,000 gas for ecrecover (which P256 doesn't use), the net additional cost is 8,000 - 3,000 = 5,000 gas.
         * WebAuthn signatures require additional computation to parse and validate the clientDataJSON structure. We cap the total signature size at 2kb. The signature is also charged using the same gas schedule as calldata (16 gas per non-zero byte, 4 gas per zero byte) to prevent the use of this signature space from spam.
         * Keychain signatures wrap a primitive signature and are used by access keys. They add 3,000 gas to cover key validation during transaction validation (cold SLOAD to verify key exists + processing overhead).
         * Individual per-signature-type gas costs allow us to add more advanced verification methods in the future like multisigs, which could have dynamic gas pricing.
Nonce Key Gas Schedule
Transactions using parallelizable nonces incur additional costs based on the nonce key usage pattern:
Case 1: Protocol Nonce (Key 0)
         * Additional Cost: 0 gas
         * Total: 21,000 gas (base transaction cost)
         * Rationale: Maintains backward compatibility with existing transaction flow
Case 2: Existing User Nonce Key (nonce > 0)
         * Additional Cost: 5,000 gas
         * Total: 26,000 gas
         * Rationale: Cold SLOAD (2,100) + warm SSTORE reset (2,900) for incrementing an existing nonce
Case 3: New User Nonce Key (nonce == 0)
         * Additional Cost: 22,100 gas
         * Total: 43,100 gas
         * Rationale: Cold SLOAD (2,100) + SSTORE set (20,000) for writing to a new storage slot
Rationale for Fixed Pricing:
         1. Simplicity: Fixed costs based on actual EVM storage operations are straightforward to reason about
         2. Storage Pattern Alignment: Costs directly mirror EVM cold SSTORE costs for new vs existing slots
         3. State Growth: Creating new nonce keys incurs the higher cost naturally through SSTORE set pricing
Key Authorization Gas Schedule
When a transaction includes a key_authorization field to provision a new access key, additional intrinsic gas is charged to cover signature verification and storage operations. This gas is charged before execution as part of the transaction's intrinsic gas cost.
Gas Components
Component
	Gas Cost
	Notes
	Signature verification
	3,000 (secp256k1) / 8,000 (P256) / 8,000 + calldata (WebAuthn)
	Verifying the root key's signature on the authorization
	Key storage
	22,000
	Cold SSTORE to store new key (0→non-zero)
	Overhead buffer
	5,000
	Buffer for event emission, storage reads, and other overhead
	Per spending limit
	22,000 each
	Cold SSTORE per token limit (0→non-zero)
	Signature verification rationale: KeyAuthorization requires an additional signature verification beyond the transaction signature. Unlike the transaction signature (where ecrecover cost is included in the base 21k), KeyAuthorization must pay the full verification cost:
         * secp256k1: 3,000 gas (ecrecover precompile cost)
         * P256: 8,000 gas (6,900 from EIP-7951 + 1,100 for signature size). Note: the transaction signature schedule charges only 5,000 additional gas for P256 because it subtracts the 3,000 ecrecover "savings" already in base 21k. KeyAuthorization pays the full 8,000.
         * WebAuthn: 8,000 + calldata gas for webauthn_data
Gas Formula
KEY_AUTH_BASE_GAS = 30,000  # For secp256k1 signature (3,000 + 22,000 + 5,000)KEY_AUTH_BASE_GAS = 35,000  # For P256 signature (5,000 + 3,000 + 22,000 + 5,000)KEY_AUTH_BASE_GAS = 35,000 + webauthn_calldata_gas  # For WebAuthn signature PER_LIMIT_GAS = 22,000  # Per spending limit entry total_key_auth_gas = KEY_AUTH_BASE_GAS + (num_limits * PER_LIMIT_GAS)
Examples
Configuration
	Gas Cost
	Calculation
	secp256k1, no limits
	30,000
	Base only
	secp256k1, 1 limit
	52,000
	30,000 + 22,000
	secp256k1, 3 limits
	96,000
	30,000 + (3 × 22,000)
	P256, no limits
	35,000
	Base with P256 verification
	P256, 2 limits
	79,000
	35,000 + (2 × 22,000)
	Rationale
         1. Pre-execution charging: KeyAuthorization is validated and executed during transaction validation (before the EVM runs), so its gas must be included in intrinsic gas
         2. Storage cost alignment: The 22,000 gas per storage slot approximates EVM cold SSTORE costs for new slots
         3. DoS prevention: Progressive cost based on number of limits prevents abuse through excessive limit creation
Reference Pseudocode
def calculate_calldata_gas(data: bytes) -> uint256:    """    Calculate gas cost for calldata based on zero and non-zero bytes    Args:        data: bytes to calculate cost for    Returns:        gas_cost: uint256    """    CALLDATA_ZERO_BYTE_GAS = 4    CALLDATA_NONZERO_BYTE_GAS = 16    gas = 0    for byte in data:        if byte == 0:            gas += CALLDATA_ZERO_BYTE_GAS        else:            gas += CALLDATA_NONZERO_BYTE_GAS    return gas def calculate_signature_verification_gas(signature: PrimitiveSignature) -> uint256:    """    Calculate gas cost for verifying a primitive signature.    Returns the ADDITIONAL gas beyond the base 21k transaction cost.    - secp256k1: 0 (already included in base 21k via ecrecover)    - P256: 5,000 (8,000 full cost - 3,000 ecrecover already in base 21k)    - WebAuthn: 5,000 + calldata gas for webauthn_data    """    # P256 full verification cost is 8,000 (6,900 from EIP-7951 + 1,100 for signature size)    # But base 21k already includes 3,000 for ecrecover, so additional cost is 5,000    P256_ADDITIONAL_GAS = 5_000    if signature.type == Secp256k1:        return 0  # Already included in base 21k    elif signature.type == P256:        return P256_ADDITIONAL_GAS    elif signature.type == WebAuthn:        webauthn_data_gas = calculate_calldata_gas(signature.webauthn_data)        return P256_ADDITIONAL_GAS + webauthn_data_gas    else:        revert("Invalid signature type") def calculate_key_authorization_gas(key_auth: SignedKeyAuthorization) -> uint256:    """    Calculate the intrinsic gas cost for a KeyAuthorization.    This is charged BEFORE execution as part of transaction validation.    Args:        key_auth: SignedKeyAuthorization with fields:            - signature: PrimitiveSignature (root key's signature)            - limits: Optional[List[TokenLimit]]    Returns:        gas_cost: uint256    """    # Constants - KeyAuthorization pays FULL signature verification costs    # (not the "additional" costs used for transaction signatures)    ECRECOVER_GAS = 3_000   # Full ecrecover cost    P256_FULL_GAS = 8_000   # Full P256 cost (6,900 + 1,100)    COLD_SSTORE_SET_GAS = 22_000  # Storage cost for new slot    OVERHEAD_BUFFER = 5_000  # Buffer for event emission, storage reads, etc.    gas = 0    # Step 1: Signature verification cost (full cost, not additional)    if key_auth.signature.type == Secp256k1:        gas += ECRECOVER_GAS  # 3,000    elif key_auth.signature.type == P256:        gas += P256_FULL_GAS  # 8,000    elif key_auth.signature.type == WebAuthn:        webauthn_data_gas = calculate_calldata_gas(key_auth.signature.webauthn_data)        gas += P256_FULL_GAS + webauthn_data_gas  # 8,000 + calldata    # Step 2: Key storage    gas += COLD_SSTORE_SET_GAS  # 22,000 - store new key (0 → non-zero)    # Step 3: Overhead buffer    gas += OVERHEAD_BUFFER  # 5,000    # Step 4: Per-limit storage cost    num_limits = len(key_auth.limits) if key_auth.limits else 0    gas += num_limits * COLD_SSTORE_SET_GAS  # 22,000 per limit    return gas def calculate_tempo_tx_base_gas(tx):    """    Calculate the base gas cost for a TempoTransaction    Args:        tx: TempoTransaction object with fields:            - signature: TempoSignature (variable length)            - nonce_key: uint192            - nonce: uint64            - sender_address: address            - key_authorization: Optional[SignedKeyAuthorization]    Returns:        total_gas: uint256    """    # Constants    BASE_TX_GAS = 21_000    EXISTING_NONCE_KEY_GAS = 5_000   # Cold SLOAD (2,100) + warm SSTORE reset (2,900)    NEW_NONCE_KEY_GAS = 22_100       # Cold SLOAD (2,100) + SSTORE set (20,000)    KEYCHAIN_VALIDATION_GAS = 3_000  # 2,100 SLOAD + 900 processing buffer    # Step 1: Determine signature verification cost    # For Keychain signatures, use the inner primitive signature    if tx.signature.type == Keychain:        inner_sig = tx.signature.inner_signature    else:        inner_sig = tx.signature    signature_gas = BASE_TX_GAS + calculate_signature_verification_gas(inner_sig)    # Add keychain validation overhead if using access key    if tx.signature.type == Keychain:        signature_gas += KEYCHAIN_VALIDATION_GAS    # Step 2: Calculate nonce key cost    if tx.nonce_key == 0:        # Protocol nonce (backward compatible)        nonce_gas = 0    else:        # User nonce key        current_nonce = get_nonce(tx.sender_address, tx.nonce_key)        if current_nonce > 0:            # Existing nonce key - cold SLOAD + warm SSTORE reset            nonce_gas = EXISTING_NONCE_KEY_GAS        else:            # New nonce key - cold SLOAD + SSTORE set            nonce_gas = NEW_NONCE_KEY_GAS    # Step 3: Calculate key authorization cost (if present)    if tx.key_authorization is not None:        key_auth_gas = calculate_key_authorization_gas(tx.key_authorization)    else:        key_auth_gas = 0    # Step 4: Calculate total base gas    total_gas = signature_gas + nonce_gas + key_auth_gas    return total_gas
Security Considerations
Mempool DOS Protection
Transaction pools perform pre-execution validation checks before accepting transactions. These checks are performed for free by the nodes, making them potential DOS vectors. The three primary validation checks are:
         1. Signature verification - Must be valid
         2. Nonce verification - Must match current account nonce
         3. Balance check - Account must have sufficient balance to pay for transaction
This transaction type impacts all three areas:
Signature Verification Impact
         * P256 signatures: Fixed computational cost similar to ecrecover.
         * WebAuthn signatures: Variable cost due to clientDataJSON parsing, but capped at 2KB total signature size to prevent abuse
         * Mitigation: All signature types have bounded computational costs that are in the same ballpark as standard ecrecover.
Nonce Verification Impact
         * 2D nonce lookup: Requires additional storage read from nonce precompile
         * Cost: Equivalent to a cold SLOAD (~2,100 gas worth of free computation)
         * Mitigation: Cost is bounded to a manageable value.
Fee Payer Impact
         * Additional account read: When fee payer is specified, must fetch fee payer's account to verify balance
         * Cost: Effectively doubles the free account access work for sponsored transactions
         * Mitigation: Cost is still bounded to a single additional account read.
Comparison to Ethereum
The introduction of 7702 delegated accounts already created complex cross-transaction dependencies in the mempool, which prevents any static pool checks from being useful. Because a single transaction can invalidate multiple others by spending balances of multiple accounts
Assessment: While this transaction type introduces additional pre-execution validation costs, all costs are bounded to reasonable limits. The mempool complexity issues around cross-transaction dependencies already exist in Ethereum due to 7702 and accounts with code, making static validation inherently difficult. So the incremental cost from this transaction type is acceptable given these existing constraints.
Overview
Previousshift←
Account Keychain Precompile
Address: 0xAAAAAAAA00000000000000000000000000000000
Overview
The Account Keychain precompile manages authorized Access Keys for accounts, enabling Root Keys (e.g., passkeys) to provision scoped "secondary" Access Keys with expiry timestamps and per-TIP20 token spending limits.
Motivation
The Tempo Transaction type unlocks a number of new signature schemes, including WebAuthn (Passkeys). However, for an Account using a Passkey as its Root Key, the sender will subsequently be prompted with passkey prompts for every signature request. This can be a poor user experience for highly interactive or multi-step flows. Additionally, users would also see "Sign In" copy in prompts for signing transactions which is confusing. This proposal introduces the concept of the Root Key being able to provision a (scoped) Access Key that can be used for subsequent transactions, without the need for repetitive end-user prompting.
Concepts
Access Keys
Access Keys are secondary signing keys authorized by an account's Root Key. They can sign transactions on behalf of the account with the following restrictions:
         * Expiry: Unix timestamp when the key becomes invalid (0 = never expires)
         * Spending Limits: Per-TIP20 token limits that deplete as tokens are spent
         * Limits deplete as tokens are spent and can be updated by the Root Key via updateSpendingLimit()
         * Spending limits only apply to TIP20 token transfers, not ETH or other assets
         * Privilege Restrictions: Cannot authorize new keys or modify their own limits
Authorization Hierarchy
The protocol enforces a strict hierarchy at validation time:
         1. Root Key: The account's main key (derived from the account address)
         * Can call all precompile functions
         * Has no spending limits
         2. Access Keys: Secondary authorized keys
         * Cannot call mutable precompile functions (only view functions are allowed)
         * Subject to per-TIP20 token spending limits
         * Can have expiry timestamps
Storage
The precompile uses a keyId (address) to uniquely identify each access key for an account.
Storage Mappings:
         * keys[account][keyId] → Packed AuthorizedKey struct (signature type, expiry, enforce_limits, is_revoked)
         * spendingLimits[keccak256(account || keyId)][token] → Remaining spending amount for a specific token (uint256)
         * transactionKey → Transient storage for the key ID that signed the current transaction (slot 0)
AuthorizedKey Storage Layout (packed into single slot):
         * byte 0: signature_type (u8)
         * bytes 1-8: expiry (u64, little-endian)
         * byte 9: enforce_limits (bool)
         * byte 10: is_revoked (bool)
Interface
// SPDX-License-Identifier: MITpragma solidity ^0.8.13; interface IAccountKeychain {    /*//////////////////////////////////////////////////////////////                                STRUCTS    //////////////////////////////////////////////////////////////*/    /// @notice Signature type    enum SignatureType {        Secp256k1,        P256,        WebAuthn,    }    /// @notice Token spending limit structure    struct TokenLimit {        address token;   // TIP20 token address        uint256 amount;  // Spending limit amount    }    /// @notice Key information structure    struct KeyInfo {        SignatureType signatureType; // Signature type of the key        address keyId;               // The key identifier        uint64 expiry;               // Unix timestamp when key expires (0 = never)        bool enforceLimits;          // Whether spending limits are enforced for this key        bool isRevoked;              // Whether this key has been revoked    }    /*//////////////////////////////////////////////////////////////                                EVENTS    //////////////////////////////////////////////////////////////*/    /// @notice Emitted when a new key is authorized    event KeyAuthorized(        address indexed account,        address indexed publicKey,        uint8 signatureType,        uint64 expiry    );    /// @notice Emitted when a key is revoked    event KeyRevoked(address indexed account, address indexed publicKey);    /// @notice Emitted when a spending limit is updated    event SpendingLimitUpdated(        address indexed account,        address indexed publicKey,        address indexed token,        uint256 newLimit    );    /*//////////////////////////////////////////////////////////////                                ERRORS    //////////////////////////////////////////////////////////////*/    error KeyAlreadyExists();    error KeyNotFound();    error KeyInactive();    error KeyExpired();    error KeyAlreadyRevoked();    error SpendingLimitExceeded();    error InvalidSignatureType();    error ZeroPublicKey();    error UnauthorizedCaller();    /*//////////////////////////////////////////////////////////////                        MANAGEMENT FUNCTIONS    //////////////////////////////////////////////////////////////*/    /**     * @notice Authorize a new key for the caller's account     * @dev MUST only be called in transactions signed by the Root Key     *      The protocol enforces this restriction by checking transactionKey[msg.sender]     * @param keyId The key identifier (address) to authorize     * @param signatureType Signature type of the key (0: Secp256k1, 1: P256, 2: WebAuthn)     * @param expiry Unix timestamp when key expires (0 = never expires)     * @param enforceLimits Whether to enforce spending limits for this key     * @param limits Initial spending limits for tokens (only used if enforceLimits is true)     */    function authorizeKey(        address keyId,        SignatureType signatureType,        uint64 expiry,        bool enforceLimits,        TokenLimit[] calldata limits    ) external;    /**     * @notice Revoke an authorized key     * @dev MUST only be called in transactions signed by the Root Key     *      The protocol enforces this restriction by checking transactionKey[msg.sender]     * @param keyId The key ID to revoke     */    function revokeKey(address keyId) external;    /**     * @notice Update spending limit for a specific token on an authorized key     * @dev MUST only be called in transactions signed by the Root Key     *      The protocol enforces this restriction by checking transactionKey[msg.sender]     * @param keyId The key ID to update     * @param token The token address     * @param newLimit The new spending limit     */    function updateSpendingLimit(        address keyId,        address token,        uint256 newLimit    ) external;    /*//////////////////////////////////////////////////////////////                        VIEW FUNCTIONS    //////////////////////////////////////////////////////////////*/    /**     * @notice Get key information     * @param account The account address     * @param keyId The key ID     * @return Key information (returns default values if key doesn't exist)     */    function getKey(        address account,        address keyId    ) external view returns (KeyInfo memory);    /**     * @notice Get remaining spending limit for a key-token pair     * @param account The account address     * @param keyId The key ID     * @param token The token address     * @return Remaining spending amount     */    function getRemainingLimit(        address account,        address keyId,        address token    ) external view returns (uint256);    /**     * @notice Get the transaction key used in the current transaction     * @dev Returns Address::ZERO if the Root Key is being used     * @return The key ID that signed the transaction     */    function getTransactionKey() external view returns (address);}
Behavior
Key Authorization
         * Creates a new key entry with the specified signatureType, expiry, enforceLimits, and isRevoked set to false
         * If enforceLimits is true, initializes spending limits for each specified token
         * Emits KeyAuthorized event
Requirements:
         * MUST be called by Root Key only (verified by checking transactionKey[msg.sender] == 0)
         * keyId MUST NOT be address(0) (reverts with ZeroPublicKey)
         * keyId MUST NOT already be authorized with expiry > 0 (reverts with KeyAlreadyExists)
         * keyId MUST NOT have been previously revoked (reverts with KeyAlreadyRevoked - prevents replay attacks)
         * signatureType MUST be 0 (Secp256k1), 1 (P256), or 2 (WebAuthn) (reverts with InvalidSignatureType)
         * expiry CAN be any value (0 means never expires, stored as-is)
         * enforceLimits determines whether spending limits are enforced for this key
         * limits are only processed if enforceLimits is true
Key Revocation
         * Marks the key as revoked by setting isRevoked to true and expiry to 0
         * Once revoked, a keyId can NEVER be re-authorized for this account (prevents replay attacks)
         * Key can no longer be used for transactions
         * Emits KeyRevoked event
Requirements:
         * MUST be called by Root Key only (verified by checking transactionKey[msg.sender] == 0)
         * keyId MUST exist (key with expiry > 0) (reverts with KeyNotFound if not found)
Spending Limit Update
         * Updates the spending limit for a specific token on an authorized key
         * Allows Root Key to modify limits without revoking and re-authorizing the key
         * If the key had unlimited spending (enforceLimits == false), enables limits
         * Sets the new remaining limit to newLimit
         * Emits SpendingLimitUpdated event
Requirements:
         * MUST be called by Root Key only (verified by checking transactionKey[msg.sender] == 0)
         * keyId MUST exist and not be revoked (reverts with KeyNotFound or KeyAlreadyRevoked)
         * keyId MUST not be expired (reverts with KeyExpired)
Security Considerations
Access Key Storage
Access Keys should be securely stored to prevent unauthorized access:
         * Device and Application Scoping: Access Keys SHOULD be scoped to a specific client device AND application combination. Access Keys SHOULD NOT be shared between devices or applications, even if they belong to the same user.
         * Non-Extractable Keys: Access Keys SHOULD be generated and stored in a non-extractable format to prevent theft. For example, use WebCrypto API with extractable: false when generating Keys in web browsers.
         * Secure Storage: Private Keys MUST never be stored in plaintext. Private Keys SHOULD be encrypted and stored in a secure manner. For web applications, use browser-native secure storage mechanisms like IndexedDB with non-extractable WebCrypto keys rather than storing raw key material.
Privilege Escalation Prevention
Access Keys cannot escalate their own privileges because:
         1. Management functions (authorizeKey, revokeKey, updateSpendingLimit) are restricted to Root Key transactions
         2. The protocol sets transactionKey[account] during transaction validation to indicate which key signed the transaction
         3. These management functions check that transactionKey[msg.sender] == 0 (Root Key) before executing
         4. Access Keys cannot bypass this check - transactions will revert with UnauthorizedCaller
Spending Limit Enforcement
         * Spending limits are only enforced if enforceLimits == true for the key
         * Keys with enforceLimits == false have unlimited spending (no limits checked)
         * Spending limits are enforced by the protocol internally calling verify_and_update_spending() during execution
         * Limits are per-TIP20 token and deplete as TIP20 tokens are spent
         * Spending limits only track TIP20 token transfers (via transfer and transferFrom) and approvals
         * For approvals: only increases in approval amount count against the spending limit
         * Non-TIP20 asset movements (ETH, NFTs) are not subject to spending limits
         * Root keys (keyId == address(0)) have no spending limits - the function returns immediately
         * Failed limit checks revert the entire transaction with SpendingLimitExceeded
Key Expiry
         * Keys with expiry > 0 are checked against the current timestamp during validation
         * Expired keys cause transaction rejection with KeyExpired error (checked via validate_keychain_authorization())
         * expiry == 0 means the key never expires
         * Expiry is checked as: current_timestamp >= expiry (key is expired when current time reaches or exceeds expiry)
Usage Patterns
First-Time Access Key Authorization
         1. User signs Passkey prompt → signs over key_authorization for a new Access Key (e.g., WebCrypto P256 key)
         2. User's Access Key signs the transaction
         3. Transaction includes the key_authorization AND the Access Key signature
         4. Protocol validates Passkey signature on key_authorization, sets transactionKey[account] = 0, calls AccountKeychain.authorizeKey(), then validates Access Key signature
         5. Transaction executes with Access Key's spending limits enforced via internal verify_and_update_spending()
Subsequent Access Key Usage
         1. User's Access Key signs the transaction (no key_authorization needed)
         2. Protocol validates the Access Key via validate_keychain_authorization(), sets transactionKey[account] = keyId
         3. Transaction executes with spending limit enforcement via internal verify_and_update_spending()
Root Key Revoking an Access Key
         1. User signs Passkey prompt → signs transaction calling revokeKey(keyId)
         2. Transaction executes, marking the Access Key as inactive
         3. Future transactions signed by that Access Key will be rejected
Specification
Previousshift←
Accounts
Default Delegation (Experimental)
Note: This feature will likely be deprecated before mainnet launch. We recommend using the standard Tempo Transaction type instead if you need smart contract functionality.
Tempo uses a "Default Delegation" (DD) model for accounts on the Tempo blockchain. DD extends the Ethereum account model by allowing any externally owned account (EOA) to be seamlessly upgraded into a smart contract wallet, without requiring user intervention or setup.
The core mechanism is that, on first use (when an EOA sends its first transaction and has never been used before), the protocol automatically delegates the account to a canonical smart contract implementation by setting its code to a special format. This enables all EOAs to immediately benefit from smart wallet features, while preserving full backward compatibility with legacy ECDSA transactions and not affecting contract accounts.
Additionally, a registrar precompile is introduced to allow anyone to permissionlessly delegate an EOA to the default implementation by proving control of the address via a signature. The default implementation contract is treated as always warm for gas purposes.
Tempo's DD model is fully compatible with EIP-7702. For a detailed understanding of the underlying delegation format and semantics, see the EIP-7702 specification.
Features
Default Delegation (DD) allows any EOA to be used as a smart contract wallet.
It does so through two new behaviors in-protocol:
         1. Auto-delegation on first use. When a top-level transaction originates from an address A, nonce(A) == 0, and code(A) is empty, the protocol sets code(A) = 0xEF0100 || DEFAULT_7702_IMPL during execution, thereby delegating A to the default implementation per 7702 semantics. Legacy ECDSA tx validation is unchanged.
         2. Registrar precompile. A new precompile, DefaultAccountRegistrar, takes (hash, v, r, s), derives an authority address via ecrecover(hash, v, r, s), and delegates authority to DEFAULT_7702_IMPL. It reverts if that address is already delegated or is a contract.
Additionally, DEFAULT_7702_IMPL is treated as always warm for gas, like a precompile.
Motivation
         * Make EOAs immediately usable with a canonical smart-wallet implementation without user setup.
         * Preserve full backward compatibility with legacy ECDSA transactions.
         * Avoid changing any behavior of non-EOA addresses.
         * Provide a permissionless path to prove that an address is an EOA (via any prior ECDSA signature) and delegate an address to DEFAULT.
Specification
Notation & constants
         * EMPTY — empty byte array
         * EF_PREFIX — 0xEF0100 (EIP-7702 delegation prefix)
         * DEFAULT_7702_IMPL — 0x7702c00000000000… (20-byte, fixed in genesis)
         * DEFAULT_ACCOUNT_REGISTRAR — 0x7702ac00000000000… (20-byte precompile address)
         * “Delegated to X” ⇔ code(account) == EF_PREFIX || X (exact 7702 format)
         * “Plain EOA” ⇔ code(account) == EMPTY
Out of scope: The runtime behavior/ABI of DEFAULT_7702_IMPL itself (separate spec). DD only defines delegation mechanics.
1) Auto-delegation on first use
Trigger: When executing a top-level transaction with tx.from = A.
Preconditions (checked at transaction start, during execution):
         * code(A) == EMPTY
         * nonce_pre(A) == 0 (the nonce value read before nonce increment)
State transition:
         * Set code(A) := EF_PREFIX || DEFAULT_7702_IMPL.
Ordering / validation:
         * Legacy ECDSA tx admission and verification are unchanged.
         * The auto-delegation check uses nonce_pre(A) (the state prior to the normal nonce increment). This makes behavior deterministic across implementations.
Scope exclusions:
         * If code(A) != EMPTY (e.g., a contract), do nothing.
         * If nonce_pre(A) != 0, do nothing.
         * This rule does not prohibit later re-delegation or undelegation; those are governed by standard 7702 semantics (see Redelegation & undelegation below).
Gas:
         * The gas accounting for installing EF_PREFIX || DEFAULT_7702_IMPL matches the cost model for 7702 delegation on Tempo (same schedule as 7702 delegation).
2) DefaultAccountRegistrar precompile
Address: DEFAULT_ACCOUNT_REGISTRAR = 0x7702ac00000000000…
ABI (EVM call interface):
delegateToDefault(bytes32 hash, uint8 v, bytes32 r, bytes32 s)
         * Inputs:
         * hash: any 32-byte string, typically a hash of a message
         * (v, r, s): ECDSA signature parameters
         * Internal derivation:
         * pubkey = ecrecover(hash, v, r, s) with standard Ethereum constraints:
         * Accept v ∈ {27,28} or {0,1} (treated as 27/28, respectively)
         * Enforce EIP-2 style “low-s” (reject high-s)
         * Reject invalid points or failed recovery
         * authority = address(pubkey)
Effects (on success):
         * Require code(authority) == EMPTY. If not, revert.
         * Require nonce(authority) == 0. If not, revert.
         * Set code(authority) := EF_PREFIX || DEFAULT_7702_IMPL.
Outputs / logs:
         * Returns authority on success.
         * No event is emitted.
Gas:
         * Charge identical total gas as a 7702 delegation on Tempo (i.e., ecrecover cost + code-installation cost consistent with 7702). Exact numeric schedule is inherited from 7702 on Tempo.
Always-warm rule
         * DEFAULT_7702_IMPL is always warm (like a precompile). For gas, treat it as if it appears in the access list at the start of every transaction. This applies chain-wide and unconditionally.
Redelegation & undelegation
         * After auto-delegation or registrar delegation, an account may:
         * Re-delegate to another 7702 target, or
         * Delegate to nothing (undelegate),
         * …using the exact same mechanisms and semantics as EIP-7702.
Rationale
         * First-use default: Ensures EOAs are smart-wallet capable immediately without wallet migration UX, while preserving legacy tx signing.
         * Registrar “any message”: The design intentionally accepts any valid ECDSA signature to “prove EOA control,” enabling use of existing public signatures (tweets, GitHub sigs, old onchain proofs). Replay across chains or contexts is explicitly allowed by design (no domain binding).
         * Revert if nonce is not 0: Allows addresses to opt out (by delegating to some other 7702 contract or to empty code) and not be forcibly redelegated.
         * Revert if code is not empty: Prevents edge cases (including repeated auto-delegation of the same account).
         * Always-warm DEFAULT_7702_IMPL: Smooths gas, based on the assumption that many transactions will use the default contract.
Backwards Compatibility
         * Legacy ECDSA transactions: Unchanged validation. The only new effect is auto-delegation on the first tx for plain EOAs with nonce == 0.
         * Contracts / codeful accounts: Never auto-delegated; registrar reverts.
         * 7702 tooling: Fully compatible; DD uses the exact 7702 delegation bytecode format and override semantics.
Security Considerations
         * Forced delegation by third parties: Anyone can delegate an EOA via the registrar if they can produce any valid signature by that key (by design). This does not grant fund control if DEFAULT_7702_IMPL respects the original key, but it does change account semantics and may surprise tooling. Accepted as a trade-off.
         * Signature replay & no domain binding: Signatures from other chains or contexts can be reused. This is deliberate; downstream apps MUST NOT treat registrar delegation as consent for anything beyond delegation.
         * Malleability constraints: Enforce low-s and canonical v mapping to avoid malleability and recovery edge cases.
         * CREATE/CREATE2 & contracts at EOA addresses: DD never writes code to an account that already has code; changing a contract account’s code via registrar is disallowed (revert). Accounts created as contracts at genesis are unaffected.
Test Cases (illustrative)
         1. First legacy tx auto-delegates
         * Pre: code(A)=EMPTY, nonce(A)=0
         * Execute: valid legacy ECDSA tx from=A
         * Post: code(A)=EF_PREFIX||DEFAULT_7702_IMPL; tx body executes normally.
         2. First tx when nonce(A)=1 (e.g., state pre-set)
         * Pre: code(A)=EMPTY, nonce(A)=1
         * Execute: tx from=A
         * Post: No delegation performed.
         3. Address has code (contract)
         * Pre: code(A)=<non-empty>, nonce(A)=0
         * Execute: tx from=A
         * Post: No delegation performed.
         4. Registrar happy path
         * Input: (hash, v, r, s) where ecrecover(hash, v,r,s)=A
         * Pre: code(A)=EMPTY
         * Call: DEFAULT_ACCOUNT_REGISTRAR.delegateToDefault(...)
         * Post: code(A)=EF_PREFIX||DEFAULT_7702_IMPL; success (empty returndata).
         5. Registrar with reused public signature
         * As (4), but hash is a keccak hash of a known public message (e.g., a tweet contents). Same success outcome.
         6. Registrar when already delegated (to default or another impl)
         * Pre: code(A)=EF_PREFIX||X for any X
         * Call: registrar
         * Post: Revert.
         7. Registrar for contract address
         * Pre: code(A) != EMPTY
         * Call: registrar with signature yielding A
         * Post: Revert.
         8. Invalid signature
         * ecrecover fails or s is high
         * Post: Revert.
         9. Re-delegation via 7702
         * Pre: code(A)=EF_PREFIX||DEFAULT_7702_IMPL
         * Action: perform a standard 7702 redelegation of A to I2 (or to none)
         * Post: code(A)=EF_PREFIX||I2 (or EMPTY if undelegated)
         10. Gas warmness
         * Any tx executing a CALL/DELEGATECALL to DEFAULT_7702_IMPL treats it as warm without prior access-list touch.
Reference Pseudocode (consensus-level)
Auto-delegation on tx start
/// Executed at the beginning of a top-level tx, during execution:fn maybe_auto_delegate_on_first_use(sender: Address):    let code = state.get_code(sender)    let nonce_pre = state.get_nonce(sender)  // value before nonce increment    if code.length == 0 && nonce_pre == 0:        state.set_code(sender, EF_PREFIX ++ DEFAULT_7702_IMPL)
DefaultAccountRegistrar precompile
/// At address DEFAULT_ACCOUNT_REGISTRAR/// abi: delegateToDefault(bytes hash, uint8 v, bytes32 r, bytes32 s)fn delegateToDefault(message: bytes, v: u8, r: bytes32, s: bytes32):    let v_norm = if v in {27,28} then v else if v in {0,1} then (v + 27) else revert()    require(is_low_s(s)) // EIP-2 style    let authority = ecrecover(hash, v_norm, r, s) or revert()    require(state.get_code(authority).length == 0) // must be plain EOA    require(!is_7702_delegated(state.get_code(authority))) // no EF_PREFIX    state.set_code(authority, EF_PREFIX ++ DEFAULT_7702_IMPL)    return authority
Helpers
const EF_PREFIX = 0xEF0100const DEFAULT_7702_IMPL = 0x7702c00000000000... // 20 bytes fn is_7702_delegated(code: bytes) -> bool:    return code.length == 1+1+1+20  // 0xEF 0x01 0x00 || 20 bytes        && code[0..3] == EF_PREFIX
Deployment / Activation
         * Genesis: Insert DEFAULT_7702_IMPL as an immutable, predeployed contract at 0x7702c00000000000… with its code defined by the separate implementation spec.
         * Fork rules: DD is active from genesis on Tempo. Clients must include:
         * the auto-delegation state transition hook,
         * the DefaultAccountRegistrar precompile at 0x7702ac00000000000…,
         * the always-warm treatment for DEFAULT_7702_IMPL.
Account Keychain Precompile Specification
Previousshift←



Ask in ChatGPT
On this page
         * Features
         * Motivation
         * Specification
         * Notation & constants
         * 1) Auto-delegation on first use
         * 2) DefaultAccountRegistrar precompile
         * Always-warm rule
         * Redelegation & undelegation
         * Rationale
         * Backwards Compatibility
         * Security Considerations
         * Test Cases (illustrative)
         * Reference Pseudocode (consensus-level)
         * Deployment / Activation
Accounts
Default Delegation (Experimental)
Note: This feature will likely be deprecated before mainnet launch. We recommend using the standard Tempo Transaction type instead if you need smart contract functionality.
Tempo uses a "Default Delegation" (DD) model for accounts on the Tempo blockchain. DD extends the Ethereum account model by allowing any externally owned account (EOA) to be seamlessly upgraded into a smart contract wallet, without requiring user intervention or setup.
The core mechanism is that, on first use (when an EOA sends its first transaction and has never been used before), the protocol automatically delegates the account to a canonical smart contract implementation by setting its code to a special format. This enables all EOAs to immediately benefit from smart wallet features, while preserving full backward compatibility with legacy ECDSA transactions and not affecting contract accounts.
Additionally, a registrar precompile is introduced to allow anyone to permissionlessly delegate an EOA to the default implementation by proving control of the address via a signature. The default implementation contract is treated as always warm for gas purposes.
Tempo's DD model is fully compatible with EIP-7702. For a detailed understanding of the underlying delegation format and semantics, see the EIP-7702 specification.
Features
Default Delegation (DD) allows any EOA to be used as a smart contract wallet.
It does so through two new behaviors in-protocol:
         1. Auto-delegation on first use. When a top-level transaction originates from an address A, nonce(A) == 0, and code(A) is empty, the protocol sets code(A) = 0xEF0100 || DEFAULT_7702_IMPL during execution, thereby delegating A to the default implementation per 7702 semantics. Legacy ECDSA tx validation is unchanged.
         2. Registrar precompile. A new precompile, DefaultAccountRegistrar, takes (hash, v, r, s), derives an authority address via ecrecover(hash, v, r, s), and delegates authority to DEFAULT_7702_IMPL. It reverts if that address is already delegated or is a contract.
Additionally, DEFAULT_7702_IMPL is treated as always warm for gas, like a precompile.
Motivation
         * Make EOAs immediately usable with a canonical smart-wallet implementation without user setup.
         * Preserve full backward compatibility with legacy ECDSA transactions.
         * Avoid changing any behavior of non-EOA addresses.
         * Provide a permissionless path to prove that an address is an EOA (via any prior ECDSA signature) and delegate an address to DEFAULT.
Specification
Notation & constants
         * EMPTY — empty byte array
         * EF_PREFIX — 0xEF0100 (EIP-7702 delegation prefix)
         * DEFAULT_7702_IMPL — 0x7702c00000000000… (20-byte, fixed in genesis)
         * DEFAULT_ACCOUNT_REGISTRAR — 0x7702ac00000000000… (20-byte precompile address)
         * “Delegated to X” ⇔ code(account) == EF_PREFIX || X (exact 7702 format)
         * “Plain EOA” ⇔ code(account) == EMPTY
Out of scope: The runtime behavior/ABI of DEFAULT_7702_IMPL itself (separate spec). DD only defines delegation mechanics.
1) Auto-delegation on first use
Trigger: When executing a top-level transaction with tx.from = A.
Preconditions (checked at transaction start, during execution):
         * code(A) == EMPTY
         * nonce_pre(A) == 0 (the nonce value read before nonce increment)
State transition:
         * Set code(A) := EF_PREFIX || DEFAULT_7702_IMPL.
Ordering / validation:
         * Legacy ECDSA tx admission and verification are unchanged.
         * The auto-delegation check uses nonce_pre(A) (the state prior to the normal nonce increment). This makes behavior deterministic across implementations.
Scope exclusions:
         * If code(A) != EMPTY (e.g., a contract), do nothing.
         * If nonce_pre(A) != 0, do nothing.
         * This rule does not prohibit later re-delegation or undelegation; those are governed by standard 7702 semantics (see Redelegation & undelegation below).
Gas:
         * The gas accounting for installing EF_PREFIX || DEFAULT_7702_IMPL matches the cost model for 7702 delegation on Tempo (same schedule as 7702 delegation).
2) DefaultAccountRegistrar precompile
Address: DEFAULT_ACCOUNT_REGISTRAR = 0x7702ac00000000000…
ABI (EVM call interface):
delegateToDefault(bytes32 hash, uint8 v, bytes32 r, bytes32 s)
         * Inputs:
         * hash: any 32-byte string, typically a hash of a message
         * (v, r, s): ECDSA signature parameters
         * Internal derivation:
         * pubkey = ecrecover(hash, v, r, s) with standard Ethereum constraints:
         * Accept v ∈ {27,28} or {0,1} (treated as 27/28, respectively)
         * Enforce EIP-2 style “low-s” (reject high-s)
         * Reject invalid points or failed recovery
         * authority = address(pubkey)
Effects (on success):
         * Require code(authority) == EMPTY. If not, revert.
         * Require nonce(authority) == 0. If not, revert.
         * Set code(authority) := EF_PREFIX || DEFAULT_7702_IMPL.
Outputs / logs:
         * Returns authority on success.
         * No event is emitted.
Gas:
         * Charge identical total gas as a 7702 delegation on Tempo (i.e., ecrecover cost + code-installation cost consistent with 7702). Exact numeric schedule is inherited from 7702 on Tempo.
Always-warm rule
         * DEFAULT_7702_IMPL is always warm (like a precompile). For gas, treat it as if it appears in the access list at the start of every transaction. This applies chain-wide and unconditionally.
Redelegation & undelegation
         * After auto-delegation or registrar delegation, an account may:
         * Re-delegate to another 7702 target, or
         * Delegate to nothing (undelegate),
         * …using the exact same mechanisms and semantics as EIP-7702.
Rationale
         * First-use default: Ensures EOAs are smart-wallet capable immediately without wallet migration UX, while preserving legacy tx signing.
         * Registrar “any message”: The design intentionally accepts any valid ECDSA signature to “prove EOA control,” enabling use of existing public signatures (tweets, GitHub sigs, old onchain proofs). Replay across chains or contexts is explicitly allowed by design (no domain binding).
         * Revert if nonce is not 0: Allows addresses to opt out (by delegating to some other 7702 contract or to empty code) and not be forcibly redelegated.
         * Revert if code is not empty: Prevents edge cases (including repeated auto-delegation of the same account).
         * Always-warm DEFAULT_7702_IMPL: Smooths gas, based on the assumption that many transactions will use the default contract.
Backwards Compatibility
         * Legacy ECDSA transactions: Unchanged validation. The only new effect is auto-delegation on the first tx for plain EOAs with nonce == 0.
         * Contracts / codeful accounts: Never auto-delegated; registrar reverts.
         * 7702 tooling: Fully compatible; DD uses the exact 7702 delegation bytecode format and override semantics.
Security Considerations
         * Forced delegation by third parties: Anyone can delegate an EOA via the registrar if they can produce any valid signature by that key (by design). This does not grant fund control if DEFAULT_7702_IMPL respects the original key, but it does change account semantics and may surprise tooling. Accepted as a trade-off.
         * Signature replay & no domain binding: Signatures from other chains or contexts can be reused. This is deliberate; downstream apps MUST NOT treat registrar delegation as consent for anything beyond delegation.
         * Malleability constraints: Enforce low-s and canonical v mapping to avoid malleability and recovery edge cases.
         * CREATE/CREATE2 & contracts at EOA addresses: DD never writes code to an account that already has code; changing a contract account’s code via registrar is disallowed (revert). Accounts created as contracts at genesis are unaffected.
Test Cases (illustrative)
         1. First legacy tx auto-delegates
         * Pre: code(A)=EMPTY, nonce(A)=0
         * Execute: valid legacy ECDSA tx from=A
         * Post: code(A)=EF_PREFIX||DEFAULT_7702_IMPL; tx body executes normally.
         2. First tx when nonce(A)=1 (e.g., state pre-set)
         * Pre: code(A)=EMPTY, nonce(A)=1
         * Execute: tx from=A
         * Post: No delegation performed.
         3. Address has code (contract)
         * Pre: code(A)=<non-empty>, nonce(A)=0
         * Execute: tx from=A
         * Post: No delegation performed.
         4. Registrar happy path
         * Input: (hash, v, r, s) where ecrecover(hash, v,r,s)=A
         * Pre: code(A)=EMPTY
         * Call: DEFAULT_ACCOUNT_REGISTRAR.delegateToDefault(...)
         * Post: code(A)=EF_PREFIX||DEFAULT_7702_IMPL; success (empty returndata).
         5. Registrar with reused public signature
         * As (4), but hash is a keccak hash of a known public message (e.g., a tweet contents). Same success outcome.
         6. Registrar when already delegated (to default or another impl)
         * Pre: code(A)=EF_PREFIX||X for any X
         * Call: registrar
         * Post: Revert.
         7. Registrar for contract address
         * Pre: code(A) != EMPTY
         * Call: registrar with signature yielding A
         * Post: Revert.
         8. Invalid signature
         * ecrecover fails or s is high
         * Post: Revert.
         9. Re-delegation via 7702
         * Pre: code(A)=EF_PREFIX||DEFAULT_7702_IMPL
         * Action: perform a standard 7702 redelegation of A to I2 (or to none)
         * Post: code(A)=EF_PREFIX||I2 (or EMPTY if undelegated)
         10. Gas warmness
         * Any tx executing a CALL/DELEGATECALL to DEFAULT_7702_IMPL treats it as warm without prior access-list touch.
Reference Pseudocode (consensus-level)
Auto-delegation on tx start
/// Executed at the beginning of a top-level tx, during execution:fn maybe_auto_delegate_on_first_use(sender: Address):    let code = state.get_code(sender)    let nonce_pre = state.get_nonce(sender)  // value before nonce increment    if code.length == 0 && nonce_pre == 0:        state.set_code(sender, EF_PREFIX ++ DEFAULT_7702_IMPL)
DefaultAccountRegistrar precompile
/// At address DEFAULT_ACCOUNT_REGISTRAR/// abi: delegateToDefault(bytes hash, uint8 v, bytes32 r, bytes32 s)fn delegateToDefault(message: bytes, v: u8, r: bytes32, s: bytes32):    let v_norm = if v in {27,28} then v else if v in {0,1} then (v + 27) else revert()    require(is_low_s(s)) // EIP-2 style    let authority = ecrecover(hash, v_norm, r, s) or revert()    require(state.get_code(authority).length == 0) // must be plain EOA    require(!is_7702_delegated(state.get_code(authority))) // no EF_PREFIX    state.set_code(authority, EF_PREFIX ++ DEFAULT_7702_IMPL)    return authority
Helpers
const EF_PREFIX = 0xEF0100const DEFAULT_7702_IMPL = 0x7702c00000000000... // 20 bytes fn is_7702_delegated(code: bytes) -> bool:    return code.length == 1+1+1+20  // 0xEF 0x01 0x00 || 20 bytes        && code[0..3] == EF_PREFIX
Deployment / Activation
         * Genesis: Insert DEFAULT_7702_IMPL as an immutable, predeployed contract at 0x7702c00000000000… with its code defined by the separate implementation spec.
         * Fork rules: DD is active from genesis on Tempo. Clients must include:
         * the auto-delegation state transition hook,
         * the DefaultAccountRegistrar precompile at 0x7702ac00000000000…,
         * the always-warm treatment for DEFAULT_7702_IMPL.
Account Keychain Precompile Specification
Previousshift←



Ask in ChatGPT
On this page
         * Abstract
         * Motivation
         * Specification
         * Header fields
         * Block body
         * System transactions
Blockspace Overview
Abstract
This specification defines the structure of valid blocks in the Tempo blockchain.
Motivation
Tempo blocks extend the Ethereum block format in multiple ways: there are new header fields to account for payment lanes and sub-blocks, and system transactions are added to the block body for the fee AMM and other protocol operations. This specification contains all the modifications to the block format.
Specification
Header fields
Tempo extends an Ethereum header with three extra scalars.
Header struct
pub struct Header {    pub general_gas_limit: u64,    pub shared_gas_limit: u64,    pub timestamp_millis_part: u64,    pub inner: Header,}
         * inner is the canonical Ethereum header (parent_hash, state_root, gas_limit, etc.).
         * general_gas_limit and shared_gas_limit carve up the canonical gas_limit for payment and sub-block gas (see payment lane specification and sub-block specification).
         * timestamp_millis_part stores the sub‑second component; the full timestamp is inner.timestamp * 1000 + timestamp_millis_part .
Block body
The block body in Tempo retains the canonical Ethereum block body structure, with the addition of new system transactions. Transactions are ordered in the following sections:
         1. Start-of-block system transaction(s) (must begin with the rewards registry call).
         2. Proposer lane transactions, subject to general_gas_limit on non-payment transactions.
         3. Sub-block transactions, grouped by proposer and prefixed with the reserved nonce key.
         4. Gas incentive transactions that consume leftover shared gas.
         5. End-of-block system transactions (see below).
System transactions
A valid tempo block must contain the following new system transactions
         * Rewards Registry (start-of-block) — must be the first transaction in the block body; refreshes validator rewards metadata before user transactions begin. Detailed specification here.
         * Fee Manager (end-of-block 1/3) — settles block fee accounting. Detailed specification here.
         * Stablecoin DEX (end-of-block 2/3) — settles stablecoin exchange balances. Detailed specification here.
         * Subblock Metadata (end-of-block 3/3) — contains metadata about the sub-blocks included in the block. Detailed specification here.



Ask in ChatGPT
On this page
         * Abstract
         * Motivation
         * Terminology
         * Specification
         * 1. Transaction classification
         * 2. Ordering of Transactions
         * 3. Gas accounting & validity (consensus)
Payment Lane Specification
Abstract
This specification introduces a second consensus gas constraint for non-payment transactions. Transactions are classified as either payments or non-payments based solely on their transaction data, without requiring any access to blockchain state. For a block to be valid, total gas_used by the block must be less than the gas_limit. Non-payment transactions executed in the proposer's lane (i.e. before the gas incentive section) must consume at most general_gas_limit, a new field added to the header. Once that budget is exhausted, any additional inclusion must come via the gas incentive lane defined in the sub-blocks specification.
Motivation
Tempo ensures that payment transactions always have available blockspace, even during periods of high network congestion from DeFi activity or complex smart contracts. No action is required by the user to take advantage of this feature.
This is achieved through separate gas limits for payment and non-payment transactions. When blocks are constructed, validators enforce two separate gas constraints:
         1. gas_limit — The total gas available for all transactions (standard Ethereum behavior)
         2. general_gas_limit — The maximum gas that non-payment transactions can consume
Non-payment transactions in the proposer's lane can only fill up to general_gas_limit, payment transactions can still use the remaining capacity up.
Terminology
         * Payment transaction: Determined by a function, is_payment(tx) -> bool. This function returns true if the transaction is a payment transaction, false otherwise.
         * Non-payment transaction: !is_payment(tx).
Specification
1. Transaction classification
A transaction is classified as a payment transaction when:
         1. the recipient address (tx.to) starts with the TIP-20 payment prefix 0x20c0000000000000000000000000, or,
         2. for TempoTransactions, every entry in tx.calls targets an address starting with the TIP-20 payment prefix 0x20c0000000000000000000000000.
This classification is performed entirely on the transaction payload, no account state is consulted.
Later upgrades may enable other kinds of transactions to be classified as payment transactions as well.
2. Ordering of Transactions
The specification does not require any specific ordering of transactions: payment and non-payment transactions can be intermixed.
3. Gas accounting & validity (consensus)
Validity of a block requires that,
general_gas_limit >= Σ gas_consumed(tx[i])   for all i such that !is_payment(tx[i]) and tx[i] is in the proposer's lane
Where gas_consumed includes intrinsic gas and gas burned by reverts, as in the existing protocol.
Sub-block Specification
Abstract
This proposal allows non-proposing validators to propose a limited set of transactions in each block through signed sub-blocks. Sub-blocks are sent directly to the main proposer and their transactions are included in the block as described below. Consensus does not enforce inclusion. The proposer is incentivized to include sub-blocks by provisioning additional gas upon sub-block inclusion, which permits them to include additional transactions at the bottom of the block as described below.
Motivation
In traditional blockchains, only the current block proposer can include transactions. This means validators must wait for their scheduled slot to provide fast inclusion for their users. Tempo changes this by letting all validators contribute transactions to every block through sub-blocks.
For validators, this is good as they no longer have to wait for their turn as proposer to provide low-latency inclusion for their users. They have guaranteed access to blockspace in every block, allowing them to include transactions whenever needed. Validators can also ensure a specific transaction execution order within their sub-block, giving them controlled ordering of their transactions.
For users, this is good because transactions can be included faster since they can go through any validator, not just the current proposer. Access to blockspace becomes more predictable as it is smoothed across all validators rather than being concentrated with a single proposer. Time-sensitive transactions benefit from lower latency and can be included more quickly.
This proposal smooths access to blockspace across validators. It enables every validator to provide low-latency inclusion for themselves, their users, or their partners, without waiting for their turn as proposer.
Specification
This specification describes the process in temporal order.
0. Definitions
         * The gas limit of the whole block is G. There are n validators: 1 proposer and n-1 other non-proposers.
         * f fraction of the gas limit of the block, 0 < f < 1 is reserved for the main proposer.
1. Sub-blocks
         * Each validator can construct a sub-block. Sub-blocks follow this structure:
sub-block = rlp([version, parent_hash, fee_recipient, [transactions], signature])
where:
         * version = 1,
         * parent_hash is the parent hash of the previous block.
         * fee_recipient is the EOA at which this validator wants to receive the fees included in this block.
         * [transactions] is an ordered list of transactions. Transactions in a sub-block must satisfy additional conditions described below in Section 1.1. We explicitly allow for this list to be empty: a validator with no transactions to propose may still send a sub-block so that the proposer gets extra gas for the gas incentive region, described below.
         * The signature field is the validator signing over a hash computed as
keccak256(magic_byte || rlp([version, parent_hash, fee_recipient, [transactions]])), where magic_byte = 0x78, The signature ensures that this sub-block is valid only for the declared slot, and that the proposer cannot alter the order or set of transactions included in a sub-block.
         * The validator sends this sub-block directly to the next proposer.
For each validator i, define
unreservedGas[i] = (1 - f) * G / n - Σ(gasLimit of transactions in sub-block[i])
1.1 Sub-block Transactions
We use the two-dimensional nonce sequence to simplify transaction validity. In this construction, the nonce_key is a u256 value.
Let validatorPubKey be the public key of the validator proposing a given sub-block. Let validatorPubKey120 be the most significant 120 bits of the validator's public key.
We reserve sequence keys to each validator by requiring that the first (most significant) byte of the sequence key is the constant byte 0x5b, and the next 15 bytes (120 bits) encode validatorPubKey120.
Formally, we require that:
            1. The sequence key of any transaction in the sub-block is of the form (0x5b << 248) + (validatorPubKey120 << 128) + x, where x is a value between 0 and 2**128 - 1. In other words, the most significant byte of the sequence key is always 0x5b, the next 15 bytes are the most significant 120 bits of the validator's public key, and the final 32 bytes (128 bits) still allow for 2D-nonces.
            2. No two validators share the same validatorPubKey120; each validator's reserved space is distinct.
This explicit prefixing with 0x5b ensures the reserved sequence key space is unambiguous and disjoint across validators. Sub-block proposers control all sequence keys of the form above, and can ensure that nonces are sequential within their space.
Reserved Nonce Space
To prevent transaction conflicts, each validator has a reserved nonce space. Transactions in sub-blocks use special nonce sequence keys that identify which validator proposed them. This ensures that validators can't interfere with each other's transactions.
Further, we require that sub-block transactions are signed solely by the root EOA key of the address sending the transaction.
2. Block Construction
The proposer collects sub-blocks from other validators. It now constructs a block with the following contents:
transactions = [list of own transactions] | [sub-block transactions] | [gas incentive transactions]
            * list of own transactions are regular transactions from the proposer with f * G gas limit.
            * sub-block transactions are transactions from the included sub-blocks. This includes a sub-block from the proposer itself if the proposer desires. Nonce sequence keys with prefix 0x5b should only appear in this section.
            * gas incentive transactions are additional transactions that the proposer can include after the sub-block transactions, with additional gas defined below.
We have the following new header field:
shared_gas_limit  // The total gas limit allocated for the sub-blocks and gas incentive transactions
2.1 System transaction
The block includes a new system transaction, whose call data contains, for each included sub-block, the public key of the validator proposing, the feeRecipient for that sub-block and the signature of the sub-block. It is a no-op, and is there for execution layer blocks to be self-contained/carry all context.
Field
	Value / Requirement
	Notes / Validation
	Type
	Legacy transaction
	

	Position in Block
	Last transaction
	Block is invalid if absent.
	From (sender)
	0x0000000000000000000000000000000000000000
	Zero address
	To (recipient)
	0x0000000000000000000000000000000000000000
	No-op
	Calldata
	rlp([[version, validator_pubkey, fee_recipient, signature], ...])
	Sub-block version (currently = 1), each included sub-block's validator public key, fee_recipient, and signature.
	Value
	0
	No native token transfer.
	Nonce
	0
	

	Gas Limit
	0
	Does not contribute to block gas accounting.
	Gas Price
	0
	Independent of block base fee; does not pay fees.
	Signature
	r = 0, s = 0, yParity = false
	Empty signature designates system transaction.
	3. Proposer Behavior
            * Construct Main Block in the usual way.
            * Collect sub-blocks from validators, including from self. Verify signatures and gas bounds of sub-blocks. Skip (i.e., do not include) invalid or missing sub-blocks; include valid ones. Transactions from a sub-block must be contiguous in the block, but sub-blocks can be included in any order.
            * Compute proposer Gas Incentive section limit:
            * gasIncentiveLimit =  Σ(unreservedGas[i]) for all included sub-blocks [i]
            * Append transactions at the bottom up to this gas limit.
            * Construct and include the system transaction at the bottom of the block.
3.1 Proposer Incentives
            * We do not enforce censorship-resistance for the transactions at consensus layer.
            * Proposer is incentivized by additional gas from sub-blocks included and reciprocity.
            * Additional gas is unrestricted so it could include backruns etc from sub-block transactions.
4. Block Validity Rules:
We can now define what a valid block is:
            1. Gas Limits:
            * [list of own transactions] uses gas at most f * G.
            * [sub-block transactions]: the sum of gas_limits of all transactions in each sub-block is lower than the per-sub block gas limit: Σ(gasLimit of transactions in sub-block[i]) <= (1-f) * G / n.
            * [gas incentive transactions] use total gas <= gasIncentiveLimit.
            * General transactions gas limit from payments lane spec applies to [list of own transactions].
            2. Transactions with nonce sequence key prefix 0x5b appear only in the [sub-block transactions]. Transactions are contiguous by validator. The [list of own transactions] and [gas incentive transactions] can use any un-reserved sequence key.
            3. System transaction is present, in the correct position, and valid (matches contents of the block).
            4. Transactions in the main proposers's section and the gas incentive section are valid in the standard way (signature, nonce, can pay fees).
4.1 Failures for Sub-block Transactions
Even if a transaction can pay its fees when the sub-block is created (i.e., when the sub-block is sent to the proposer), it may not be able to pay its fees when the sub-block is included and the block is processed. Here is a list of possible scenarios:
            * Fee Failure Scenarios:
            * The Fee AMM liquidity for the user's fee_token is insufficient (e.g., it was used up by previous transactions in the block).
            * The user's balance of the fee_token is insufficient (e.g., the user spent that balance in previous transactions in the block).
            * The user or validator changed their fee_token preference in the block and the transaction cannot pay its fees because of the new preference.
In all these scenarios, transaction is considered valid, increments the nonce, skips fee payment and execution, and results in an exceptional halt.
5. Transaction Fee Accounting
The fee manager is updated to handle fee accounting across sub-blocks:
            * For the main proposer transactions, fees are paid to the main proposer's fee_recipient as usual.
            * For the sub-block transactions, fees are paid to the fee_recipient of the sub-block (available from the system transaction).
            * For the gas incentive transactions, fees are paid to the proposer's fee_recipient.
In all cases, the fee is paid in the preferred fee_token of the fee_recipient, using liquidity from the fee AMM as necessary (i.e., validatorTokens[fee_recipient] from the FeeManager contract). If the fee_recipient has not set a preferred fee_token, then we use pathUSD as a fallback.
Exchanging Stablecoins
Tempo features an enshrined decentralized exchange (DEX) designed specifically for trading between stablecoins of the same underlying asset (e.g., USDC to USDT). The exchange provides optimal pricing for cross-stablecoin payments while minimizing chain load from excessive market activity.
The exchange operates as a singleton precompiled contract at address 0xdec0000000000000000000000000000000000000. It maintains an orderbook with separate queues for each price tick, using price-time priority for order matching.
Trading pairs are determined by each token's quote token. All TIP-20 tokens specify a quote token for trading on the exchange. Tokens can choose pathUSD as their quote token. See the Stablecoin DEX Specification for detailed information on the exchange structure.
The exchange supports three types of orders, each with different execution behavior:
Order Type
	Description
	Limit Orders
	Place orders at specific price levels that wait in the book until matched or cancelled. New orders are queued and added to the book at the end of the block.
	Flip Orders
	Special orders that automatically reverse to the opposite side when completely filled, acting like a perpetual liquidity pool. Filled flip orders automatically create new orders on the opposite side during end-of-block settlement.
	Market Orders
	Execute immediately against the best available orders in the book (via swap functions). Swaps and cancellations execute immediately within the transaction.
	This execution model prevents MEV by making it impossible to backrun new orders or perform JIT liquidity attacks. For the complete execution mechanics, see the Stablecoin DEX Specification.
To get started with the exchange, explore these guides:
Executing Swaps
Quote prices and swap between stablecoins
Providing Liquidity
Place orders and flip orders to earn spreads
DEX Balance
Manage token balances on the DEX to save gas costs
Stablecoin DEX
Abstract
This specification defines an enshrined decentralized exchange for trading between TIP-20 stablecoins. The exchange currently only supports trading between TIP-20 stablecoins with USD as their currency. By only allowing each stablecoin to be paired against its designated "quote token" the exchange enforces that there is only one route for trading between any two tokens.
The exchange maintains price‑time priority at each discrete price tick, executes swaps immediately against the active book, and supports auto‑replenishing “flip orders” that recreate themselves on the opposite side after being fully filled.
Users maintain internal balances per token on the exchange. Order placement escrows funds from these balances (or transfers from the user if necessary), fills credit makers internally, and withdrawals transfer tokens out.
Motivation
Tempo aims to provide high‑quality execution for cross‑stablecoin payments while avoiding unnecessary chain load and minimizing mid‑block MEV surfaces.
A simple, on‑chain, price‑time‑priority orderbook tailored to stable pairs encourages passive liquidity to rest on chain and allows takers to execute deterministically at the best available ticks.
Another design goal is to avoid fragmentation of liquidity across many different pairs. By enforcing that each stablecoin only trades against a single quote token, the system guarantees that there is only one path between any two tokens.
Specification
Contract and scope
The exchange is a singleton contract deployed at 0xdec0000000000000000000000000000000000000. It exposes functions to create trading pairs, place and cancel orders (including flip orders), execute swaps, produce quotes, manage internal balances, and process end‑of‑block placement.
Key concepts
Internal balances
The contract maintains per‑user, per‑token internal balances. Order placement escrows funds from these balances (or transfers any shortfall from the user). When an order fills, the maker is credited internally with the counter‑asset at the order’s tick price. Users can withdraw available balances at any time.
Flip orders
A flip order behaves like a normal resting order until it is fully filled. When filled, the exchange places a new order for the same maker on the opposite side at a configured flipTick (which must be greater than tick for bids and less for asks). This enables passive liquidity with flexible strategies.
Pairs, ticks, and prices
Pairs are identified deterministically from the two token addresses (the base token is any TIP‑20, and its quoteToken() function points to the quote token). Prices are discretized into integer ticks with a tick size of 0.1 bps: with PRICE_SCALE = 100_000, price = PRICE_SCALE + tick. Orders may only be placed at ticks divisible by TICK_SPACING = 10 (effectively setting a 1 bp tick size). The orderbook tracks best bid (highest active bid tick) and best ask (lowest active ask tick), and uses bitmaps over tick words for efficient discovery of the next initialized tick.
Quote tokens
Each TIP‑20 token specifies a single quote token in its metadata via quoteToken(). A trading pair on the stablecoin exchange exists only between a base token and its designated quote token, and prices for the pair are denominated in units of the quote token.
This design reduces liquidity fragmentation by giving every token exactly one paired asset.
It also simplifies routing. We require that:
            1. each token picks a single other stablecoin as its quote token, and,
            2. quote token relationships cannot have circular dependencies.
This forces liquidity into a tree structure, which in turn implies that there is only one path between any two stablecoins
USD tokens can only choose USD tokens as their quote token. Non-USD TIP-20 tokens can pick any token as their quote token, but currently there is no support for cross-currency trading, or same-currency trading of non-USD tokens, on the DEX.
The platform offers a neutral USD stablecoin, pathUSD, as an option for quote token. PathUSD is the first stablecoin deployed on the chain, which means it has no quote token. Use of pathUSD is optional.
Swaps
Swaps execute immediately against the active book. Selling base for quote starts at the current best bid and walks downward as ticks are exhausted; selling quote for base starts at the best ask and walks upward. Within a tick, fills are FIFO and decrement the tick’s total liquidity. When a tick empties, it is de‑initialized.
Callers can swap between any two USD TIP-20 tokens. If tokenIn and tokenOut are not directly paired, the implementation finds the unique path between them through quote‑token relationships, and performs a multi‑hop swap/quote.
Crossed books
Crossed books are permitted; the implementation does not enforce that best bid ≤ best ask. This primarily supports flip‑order scenarios.
Constraints
            * Only USD‑denominated tokens are supported, and their quotes must also be USD
            * Orders must specify ticks within the configured bounds (±2000)
            * Tick spacing is 10: tick % 10 == 0 for orders and flip orders
            * Withdrawals require sufficient internal balance
Interface
Below is the complete on‑chain interface, organized by function. Behavior notes and constraints are included with each function where relevant.
Constants and pricing
function PRICE_SCALE() external view returns (uint32);
Scaling factor for tick‑based prices. One tick equals 1/PRICE_SCALE above or below the peg. Current value: 100_000 (0.001% per tick).
function TICK_SPACING() external view returns (int16);
Orders must be placed on ticks divisible by TICK_SPACING. Current value: 10 (i.e., 1 bp grid).
function MIN_TICK() external view returns (int16);function MAX_TICK() external view returns (int16);
Inclusive tick bounds for order placement. Current range: ±2000 ticks (±2%).
function MIN_PRICE() external view returns (uint32);function MAX_PRICE() external view returns (uint32);
Price bounds implied by tick bounds and PRICE_SCALE.
function tickToPrice(int16 tick) external pure returns (uint32 price);function priceToTick(uint32 price) external pure returns (int16 tick);
Convert between discrete ticks and scaled prices. priceToTick reverts if price is out of bounds.
Pairing and orderbook
function pairKey(address tokenA, address tokenB) external pure returns (bytes32 key);
Deterministic key for a pair derived from the two token addresses (order‑independent).
function createPair(address base) external returns (bytes32 key);
Creates the pair between base and its quoteToken() (from TIP‑20). Both must be USD‑denominated. Reverts if the pair already exists or tokens are not USD.
function books(bytes32 pairKey) external view returns (address base, address quote, int16 bestBidTick, int16 bestAskTick);
Returns pair metadata and current best‑of‑side ticks. Best ticks may be sentinel values when no liquidity exists.
function getTickLevel(address base, int16 tick, bool isBid) external view returns (uint128 head, uint128 tail, uint128 totalLiquidity);
Returns FIFO head/tail order IDs and aggregate liquidity for a tick on a side, allowing indexers to reconstruct the active book.
Internal balances
function balanceOf(address user, address token) external view returns (uint128);
Returns a user’s internal balance for token held on the exchange.
function withdraw(address token, uint128 amount) external;
Transfers amount of token from the caller’s internal balance to the caller. Reverts if insufficient internal balance.
Order placement and lifecycle
function place(address token, uint128 amount, bool isBid, int16 tick) external returns (uint128 orderId);
Places a limit order against the pair of token and its quote, immediately adding it to the active book. Escrows funds: bids escrow quote at tick price; asks escrow base.
Notes:
            * tick must be within [MIN_TICK, MAX_TICK] and divisible by TICK_SPACING (10).
function placeFlip(address token, uint128 amount, bool isBid, int16 tick, int16 flipTick) external returns (uint128 orderId);
Like place, but marks the order as a flip order. When fully filled, a new order for the same maker is scheduled on the opposite side at flipTick (which must be greater than tick for bids and less for asks).
Notes:
            * Both tick and flipTick must be within [MIN_TICK, MAX_TICK] and divisible by TICK_SPACING (10).
function cancel(uint128 orderId) external;
Cancels an order owned by the caller. When canceled, the order is removed from the tick queue, liquidity is decremented, and remaining escrow is refunded to the order owner's exchange balance which can then be withdrawn.
function nextOrderId() external view returns (uint128);
Monotonic counter for next orderId.
Swaps and quoting
function quoteSwapExactAmountIn(address tokenIn, address tokenOut, uint128 amountIn) external view returns (uint128 amountOut);
Simulates an exact‑in swap walking initialized ticks and returns the expected output. Reverts if the pair path lacks sufficient liquidity.
function quoteSwapExactAmountOut(address tokenIn, address tokenOut, uint128 amountOut) external view returns (uint128 amountIn);
Simulates an exact‑out swap and returns the required input. Reverts if insufficient liquidity.
function swapExactAmountIn(address tokenIn, address tokenOut, uint128 amountIn, uint128 minAmountOut) external returns (uint128 amountOut);
Executes an exact‑in swap against the active book. Deducts amountIn from caller’s internal balance (transferring any shortfall) and transfers output to the caller. Reverts if resulting amountOut is below minAmountOut or liquidity is insufficient.
function swapExactAmountOut(address tokenIn, address tokenOut, uint128 amountOut, uint128 maxAmountIn) external returns (uint128 amountIn);
Executes an exact‑out swap. Deducts the actual input from the caller’s internal balance (transferring any shortfall from the user) and transfers amountOut to the caller. Reverts if required input exceeds maxAmountIn or liquidity is insufficient.
Events
event PairCreated(bytes32 indexed key, address indexed base, address indexed quote);event OrderPlaced(uint128 indexed orderId, address indexed maker, address indexed token, uint128 amount, bool isBid, int16 tick);event FlipOrderPlaced(uint128 indexed orderId, address indexed maker, address indexed token, uint128 amount, bool isBid, int16 tick, int16 flipTick);event OrderCancelled(uint128 indexed orderId);event OrderFilled(uint128 indexed orderId, address indexed maker, address indexed taker, uint128 amountFilled, bool partialFill);
Errors
error Unauthorized();
            * Pair creation or usage: PAIR_EXISTS, PAIR_NOT_EXISTS, ONLY_USD_PAIRS
            * Bounds: TICK_OUT_OF_BOUNDS, FLIP_TICK_OUT_OF_BOUNDS, FLIP_TICK_MUST_BE_GREATER_FOR_BID, FLIP_TICK_MUST_BE_LESS_FOR_ASK, "Price out of bounds"
            * Tick spacing: TICK_NOT_MULTIPLE_OF_SPACING, FLIP_TICK_NOT_MULTIPLE_OF_SPACING
            * Liquidity and limits: INSUFFICIENT_LIQUIDITY, MAX_IN_EXCEEDED, INSUFFICIENT_OUTPUT
            * Authorization: UNAUTHORIZED (cancel not by maker)
            * Balance: INSUFFICIENT_BALANCE (withdraw)
Overview
Previousshift←
pathUSD
pathUSD
Abstract
pathUSD is a USD-denominated stablecoin that can be used as a quote token on Tempo's decentralized exchange. It is the first stablecoin deployed to the chain, and is used as a fallback gas token when the user or validator does not specify a gas token. Use of pathUSD is optional.
Motivation
Each USD TIP-20 on Tempo can choose any other USD TIP-20 as its quote token—the token it is paired against on the native decentralized exchange. This guarantees that there is one path between any two tokens, which reduces fragmentation of liquidity and simplifies routing.
While on other chains, most liquidity accrues to a few stablecoins, or even one, Tempo offers a USD-denominated stablecoin, pathUSD, that other stablecoins can choose as their quote token. PathUSD is not meant to compete as a consumer-facing stablecoin. Use of pathUSD is optional, and tokens are able to list any other token as their quote token if they choose.
PathUSD can also be accepted as a fee token by validators.
Specification
Contract
PathUSD is a predeployed TIP-20 at genesis. Note that since it is the first TIP-20 contract deployed, its quote token is the zero address.
Property
	Value
	address
	0x20c0000000000000000000000000000000000000
	name()
	"pathUSD"
	symbol()
	"pathUSD"
	currency()
	"USD"
	decimals()
	6
	quoteToken()
	address(0)
	How It Works
When you create a USD stablecoin on Tempo, you can set pathUSD as its quote token:
TIP20 token = factory.createToken(  "My Company USD",  "MCUSD",  "USD",  TIP20(0x20c0000000000000000000000000000000000000), // pathUSD  msg.sender);
This means:
            * Your token trades against pathUSD on the decentralized exchange
            * Users can swap between your token and other USD stablecoins that also use pathUSD, or ones that are connected to it by a multi-hop path
Tree Structure
This creates a tree structure where all USD stablecoins are connected via multi-hop paths.
              USDX                |             pathUSD -- USDY -- USDZ                |               USDA
The tree structure guarantees that there is a single path between any two USD stablecoins, ensuring simple routing, concentrated liquidity, and efficient pricing, even for thinly-traded pairs.
Example: Cross-Stablecoin Payment
            1. Market makers provide liquidity for USDX/pathUSD and USDY/pathUSD pairs
            2. User wants to send USDX to a merchant who prefers USDY
            3. DEX atomically routes: User's USDX → pathUSD → Merchant's USDY
            4. Single action, no manual swaps
This is critical for payments between parties with different stablecoin preferences. The user and merchant never touch pathUSD; it is used only as a routing mechanism.
Specification
Previousshift←
Executing Swaps
Swap Functions
The exchange provides two primary swap functions:
Swap Exact Amount In
Specify the exact amount of tokens you want to sell, and receive at least a minimum amount:
function swapExactAmountIn(    address tokenIn,    address tokenOut,    uint128 amountIn,    uint128 minAmountOut) external returns (uint128 amountOut)
Parameters:
            * tokenIn - The token address you're selling
            * tokenOut - The token address you're buying
            * amountIn - The exact amount of tokenIn to sell
            * minAmountOut - Minimum amount of tokenOut you'll accept (slippage protection)
Returns:
            * amountOut - The actual amount of tokenOut received
Example: Swap exactly 1000 USDC for at least 998 USDT:
uint128 amountOut = exchange.swapExactAmountIn(    USDC_ADDRESS,    USDT_ADDRESS,    1000e6,      // Sell exactly 1000 USDC    998e6        // Receive at least 998 USDT);
Swap Exact Amount Out
Specify the exact amount of tokens you want to receive, and pay at most a maximum amount:
function swapExactAmountOut(    address tokenIn,    address tokenOut,    uint128 amountOut,    uint128 maxAmountIn) external returns (uint128 amountIn)
Parameters:
            * tokenIn - The token address you're selling
            * tokenOut - The token address you're buying
            * amountOut - The exact amount of tokenOut to receive
            * maxAmountIn - Maximum amount of tokenIn you'll pay (slippage protection)
Returns:
            * amountIn - The actual amount of tokenIn spent
Example: Receive exactly 1000 USDT by spending at most 1002 USDC:
uint128 amountIn = exchange.swapExactAmountOut(    USDC_ADDRESS,    USDT_ADDRESS,    1000e6,      // Receive exactly 1000 USDT    1002e6       // Pay at most 1002 USDC);
Quoting Prices
Before executing a swap, you can query the expected price using view functions that simulate the swap without executing it:
Quote Exact Amount In
function quoteSwapExactAmountIn(    address tokenIn,    address tokenOut,    uint128 amountIn) external view returns (uint128 amountOut)
Returns how much tokenOut you would receive for a given amountIn.
Quote Exact Amount Out
function quoteSwapExactAmountOut(    address tokenIn,    address tokenOut,    uint128 amountOut) external view returns (uint128 amountIn)
Returns how much tokenIn you would need to spend to receive a given amountOut.
Example: Getting a price quote
// Check how much USDT you'd get for 1000 USDCuint128 expectedOut = exchange.quoteSwapExactAmountIn(    USDC_ADDRESS,    USDT_ADDRESS,    1000e6); // Only execute if the price is acceptableif (expectedOut >= 998e6) {    exchange.swapExactAmountIn(USDC_ADDRESS, USDT_ADDRESS, 1000e6, 998e6);}
How Swaps Execute
When you call a swap function:
            1. Balance Check: The contract first checks your balance on the DEX
            2. Transfer if Needed: If your DEX balance is insufficient, tokens are transferred from your wallet
            3. Order Matching: The DEX walks through orders at each price tick, from best to worst:
            * Orders are consumed in price-time priority order
            * Each filled order credits the maker's balance on the DEX
            * Continues until your swap is complete or limit price is reached
            4. Slippage Check: Reverts if minAmountOut (or maxAmountIn) constraints aren't met
            5. Settlement: Your output tokens are transferred to your wallet
Swaps will revert with an InsufficientLiquidity error if there isn't enough liquidity in the orderbook to satisfy your slippage constraints.
Gas Costs
Swap gas costs scale with the number of orders and ticks your trade crosses:
            * Base swap cost (transfers and setup)
            * Per-order cost (for each order filled)
            * Per-tick cost (for each price level crossed)
            * Per-flip cost (if any flip orders are triggered)
Larger swaps that cross more orders will cost more gas, but the cost per unit of volume decreases.
Token Balances on the DEX
The DEX allows you to track token balances directly within the DEX contract, which saves gas by avoiding ERC-20 transfers on every trade. When you execute a swap, the contract first checks your DEX balance and only transfers from your wallet if needed.
For complete details on checking balances, depositing, withdrawing, and managing your DEX balance, see the DEX Balance page.
pathUSD
Previousshift←
Providing Liquidity
Provide liquidity to the DEX by placing limit orders or flip orders in the onchain orderbook.
When your orders are filled, you earn the spread between bid and ask prices while helping facilitate trades for other users.
You can only place orders on pairs between a token and its designated quote token. All TIP-20 tokens specify a quote token for trading pairs. PathUSD can be used as a simple choice for a quote token.
Overview
The DEX uses an onchain orderbook where you can place orders at specific price ticks. Orders are matched using price-time priority, meaning better-priced orders fill first, and within the same price, earlier orders fill first.
Unlike traditional AMMs, you specify exact prices where you want to buy or sell, giving you more precise control over your liquidity provision strategy.
Order Types
Limit Orders
Standard orders that remain in the book at a specific price until filled or cancelled.
function place(    address token,    uint128 amount,    bool isBid,    int16 tick) external returns (uint128 orderId)
Parameters:
            * token - The token address you're trading (must trade against its quote token)
            * amount - The amount of the token denominated in token
            * isBid - true for a buy order, false for a sell order
            * tick - The price tick: (price - 1) * 100_000 where price is in quote token per token
Returns:
            * orderId - Unique identifier for this order
Example: Place a bid to buy 1000 USDC at $0.9990
// tick = (0.9990 - 1) * 100_000 = -10uint128 orderId = exchange.place(    USDC_ADDRESS,    1000e6,      // Amount: 1000 USDC    true,        // isBid: buying USDC    -10          // tick: price = $0.9990);
Example: Place an ask to sell 1000 USDC at $1.0010
// tick = (1.0010 - 1) * 100_000 = 10uint128 orderId = exchange.place(    USDC_ADDRESS,    1000e6,      // Amount: 1000 USDC    false,       // isBid: selling USDC    10           // tick: price = $1.0010);
Flip Orders
Special orders that automatically reverse to the opposite side when completely filled, creating perpetual liquidity similar to an automated market maker pool.
function placeFlip(    address token,    uint128 amount,    bool isBid,    int16 tick,    int16 flipTick) external returns (uint128 orderId)
Parameters:
            * All parameters from place(), plus:
            * flipTick - The price where the order will flip to when filled
            * Must be greater than tick if isBid is true
            * Must be less than tick if isBid is false
Returns:
            * orderId - Unique identifier for this flip order
Example: Place a flip order providing liquidity on both sides
// Place a bid at $0.9990 that flips to an ask at $1.0010uint128 orderId = exchange.placeFlip(    USDC_ADDRESS,    1000e6,      // Amount: 1000 USDC    true,        // isBid: start as a buy order    -10,         // tick: buy at $0.9990    10           // flipTick: sell at $1.0010 after filled);
When this order is completely filled:
            1. You buy 1000 USDC at $0.9990
            2. A new order automatically sells 1000 USDC at $1.0010
            3. When that fills, it flips back to a bid at $0.9990
            4. This continues indefinitely, earning the spread each time
Flip orders act like a liquidity pool position, automatically providing liquidity on both sides of the market as they're filled back and forth.
Understanding Ticks
Prices are specified using ticks with 0.1 basis point (0.001%) precision:
Tick Formula: tick = (price - 1) × 100_000
Price Formula: price = 1 + (tick / 100_000)
Where price is the token price in quote token units.
Example Tick Calculations
Price
	Tick
	Calculation
	$0.9990
	-100
	(0.9990 - 1) × 100_000 = -100
	$0.9998
	-20
	(0.9998 - 1) × 100_000 = -20
	$1.0000
	0
	(1.0000 - 1) × 100_000 = 0
	$1.0002
	20
	(1.0002 - 1) × 100_000 = 20
	$1.0010
	100
	(1.0010 - 1) × 100_000 = 100
	Price ticks are limited to ±2% from peg (±2000 ticks). Orders outside this range will be rejected.
Bid vs Ask
            * Bid (isBid = true): An order to buy the token using its quote token
            * Ask (isBid = false): An order to sell the token for its quote token
For a USDC/USD pair where USD is the quote:
            * A bid buys USDC with USD at your specified price
            * An ask sells USDC for USD at your specified price
Order Execution Timeline
Orders follow a specific lifecycle:
            1. Placement: When you call place() or placeFlip():
            * Tokens are debited from your DEX balance (or transferred if insufficient)
            * Order is queued but not yet visible to other contracts
            * Returns an order ID immediately
            2. End of Block: All queued orders are added to the book:
            * Processed in the order they were placed
            * Filled flip orders from this block are added first
            * Orders become visible and matchable
            3. Filling: As market orders execute against your order:
            * Your order fills partially or completely
            * Proceeds are credited to your DEX balance
            * If a flip order fills completely, it creates a new order on the opposite side
MEV Protection: The delayed execution prevents backrunning and JIT (Just-In-Time) liquidity attacks, since orders aren't visible until the block ends.
Cancelling Orders
Remove an order from the book before it's filled:
function cancel(    uint128 orderId) external
Example:
// Cancel order #12345exchange.cancel(12345);
Cancellations execute immediately, and any unfilled portion of your order is refunded to your DEX balance.
You can only cancel your own orders. Attempting to cancel another user's order will revert.
Executing Swaps
Previousshift←
DEX Balance
The Stablecoin DEX allows you to hold token balances directly using the DEX contract. This eliminates the need for token transfers on every trade, significantly reducing gas costs for active traders and liquidity providers.
Why DEX Balances?
When you trade or provide liquidity on the DEX, constantly transferring tokens between your wallet and the DEX contract wastes gas. By maintaining a balance via the DEX contract, you can:
            * Save on gas costs - Avoid ERC-20 transfer costs for each trade
            * Trade more efficiently - Execute multiple swaps without transfers between each trade
            * Receive maker proceeds automatically - When your limit orders are filled, proceeds are credited to your DEX balance instead of requiring a transfer for each fill
Checking Your Balance
Use the DEX contract to view your balance of any token held on the DEX:
function balanceOf(    address user,    address token) external view returns (uint128)
Example:
uint128 balance = exchange.balanceOf(msg.sender, USDC_ADDRESS);
Using Your DEX Balance
Each transaction that you authorize will use your DEX balance before using funds you approve from your wallet. When you execute a swap or place an order, the DEX contract automatically:
            1. Checks if you have sufficient balance in the DEX
            2. If insufficient, transfers the needed amount from your wallet to your DEX balance
            3. Uses your DEX balance for the operation
Withdrawing from the DEX
Transfer tokens from your DEX balance back to your wallet:
function withdraw(    address token,    uint128 amount) external
Parameters:
            * token - The token address to withdraw
            * amount - The amount to withdraw
Example:
// Withdraw 1000 USDC from exchange to your walletexchange.withdraw(USDC_ADDRESS, 1000e6);
The withdraw function will revert if you attempt to withdraw more than your available balance on the exchange.
How Balances Work
When Swapping
            * Before swap: Exchange checks your balance, transfers from wallet if needed
            * After swap: Output tokens are transferred directly to your wallet (not kept on exchange)
When Placing Orders
            * On placement: Required tokens are debited from your exchange balance (or transferred from wallet if insufficient)
            * When filled: Proceeds are credited to your exchange balance
            * On cancellation: Unfilled portion is refunded to your exchange balance
Providing Liquidity
Previousshift←
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


import { TIP20Factory } from "./TIP20Factory.sol";
import { TIP403Registry } from "./TIP403Registry.sol";
import { IStablecoinExchange } from "./interfaces/IStablecoinExchange.sol";
import { ITIP20 } from "./interfaces/ITIP20.sol";


contract StablecoinExchange is IStablecoinExchange {


    address internal constant FACTORY = 0x20Fc000000000000000000000000000000000000;
    TIP403Registry internal constant TIP403_REGISTRY =
        TIP403Registry(0x403c000000000000000000000000000000000000);


    /// @notice Minimum allowed tick
    int16 public constant MIN_TICK = -2000;


    /// @notice Maximum allowed tick
    int16 public constant MAX_TICK = 2000;


    /// @notice Allowed tick spacing for order placement (ticks must be divisible by this)
    int16 public constant TICK_SPACING = 10;


    /// @notice Price scaling factor (5 decimal places for 0.1 bps precision)
    uint32 public constant PRICE_SCALE = 100_000;


    /// @notice Minimum valid price (PRICE_SCALE + int16.min)
    uint32 public constant MIN_PRICE = 67_232;


    /// @notice Maximum valid price (PRICE_SCALE + int16.max)
    uint32 public constant MAX_PRICE = 132_767;


    /// @notice Minimum order amount (10 units with 6 decimals)
    uint128 public constant MIN_ORDER_AMOUNT = 10_000_000;


    /// @notice TIP20 token address prefix (12 bytes)
    bytes12 public constant TIP20_PREFIX = 0x20C000000000000000000000;


    /// @notice Orderbook for token pair with price-time priority
    /// @dev Uses tick-based pricing with bitmaps for price discovery
    /// @dev Order and TickLevel structs are inherited from IStablecoinExchange
    struct Orderbook {
        /// Base token address
        address base;
        /// Quote token address
        address quote;
        /// Bid orders by tick
        mapping(int16 => IStablecoinExchange.TickLevel) bids;
        /// Ask orders by tick
        mapping(int16 => IStablecoinExchange.TickLevel) asks;
        /// Best bid tick for highest bid price
        int16 bestBidTick;
        /// Best ask tick for lowest ask price
        int16 bestAskTick;
        /// Bid tick bitmaps for efficient price discovery
        mapping(int16 => uint256) bidBitmap;
        /// Ask tick bitmaps for efficient price discovery
        mapping(int16 => uint256) askBitmap;
    }


    /*//////////////////////////////////////////////////////////////
                              STORAGE
    //////////////////////////////////////////////////////////////*/


    /// Mapping of pair key to orderbook
    mapping(bytes32 pairKey => Orderbook orderbook) public books;


    /// Mapping of order ID to order data
    mapping(uint128 orderId => IStablecoinExchange.Order order) internal orders;


    /// User balances
    mapping(address user => mapping(address token => uint128 balance)) internal balances;


    /// Next order ID to be assigned
    uint128 public nextOrderId = 1;


    /*//////////////////////////////////////////////////////////////
                              Functions
    //////////////////////////////////////////////////////////////*/


    /// @notice Convert relative tick to scaled price
    function tickToPrice(int16 tick) public pure returns (uint32 price) {
        return uint32(int32(PRICE_SCALE) + int32(tick));
    }


    /// @notice Convert scaled price to relative tick
    function priceToTick(uint32 price) public pure returns (int16 tick) {
        if (price < MIN_PRICE || price > MAX_PRICE) {
            // Calculate the tick to include in the error
            tick = int16(int32(price) - int32(PRICE_SCALE));
            revert IStablecoinExchange.TickOutOfBounds(tick);
        }
        return int16(int32(price) - int32(PRICE_SCALE));
    }


    /// @notice Set bit in bitmap to mark tick as active
    function _setTickBit(bytes32 bookKey, int16 tick, bool isBid) internal {
        Orderbook storage book = books[bookKey];
        int16 wordIndex = tick >> 8;
        uint8 bitIndex = uint8(int8(tick));
        uint256 mask = (uint256(1) << bitIndex);
        if (isBid) {
            book.bidBitmap[wordIndex] |= mask;
        } else {
            book.askBitmap[wordIndex] |= mask;
        }
    }


    /// @notice Clear bit in bitmap to mark tick as inactive
    function _clearTickBit(bytes32 bookKey, int16 tick, bool isBid) internal {
        Orderbook storage book = books[bookKey];
        int16 wordIndex = tick >> 8;
        uint8 bitIndex = uint8(int8(tick));
        uint256 mask = ~(uint256(1) << bitIndex);
        if (isBid) {
            book.bidBitmap[wordIndex] &= mask;
        } else {
            book.askBitmap[wordIndex] &= mask;
        }
    }


    /// @notice Generate deterministic key for token pair
    /// @return key Deterministic pair key
    function pairKey(address tokenA, address tokenB) public pure returns (bytes32 key) {
        (tokenA, tokenB) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        key = keccak256(abi.encodePacked(tokenA, tokenB));
    }


    /// @notice Creates a new trading pair between base and quote tokens
    /// @param base Base token address
    /// @return key The orderbook key for the created pair
    /// @dev Automatically sets tick bounds to ±2% from the peg price of 1.0
    function createPair(address base) external returns (bytes32 key) {
        // Validate that base is a TIP20 token
        if (!TIP20Factory(FACTORY).isTIP20(base)) {
            revert ITIP20.InvalidBaseToken();
        }


        address quote = address(ITIP20(base).quoteToken());
        // Only USD-denominated tokens are supported, and their quotes must also be USD
        if (keccak256(bytes(ITIP20(base).currency())) != keccak256(bytes("USD"))) {
            revert ITIP20.InvalidCurrency();
        }
        if (keccak256(bytes(ITIP20(quote).currency())) != keccak256(bytes("USD"))) {
            revert ITIP20.InvalidCurrency();
        }


        key = pairKey(base, quote);


        // Create new orderbook for pair
        Orderbook storage book = books[key];
        if (book.base != address(0)) {
            revert IStablecoinExchange.PairAlreadyExists();
        }
        book.base = base;
        book.quote = quote;


        book.bestBidTick = type(int16).min;
        book.bestAskTick = type(int16).max;


        emit PairCreated(key, base, quote);
    }


    /// @notice Internal function to place order and immediately add to orderbook
    /// @param base Base token address
    /// @param quote Quote token address
    /// @param amount Order amount in base token
    /// @param isBid True for buy orders, false for sell orders
    /// @param tick Price tick for the order
    /// @param isFlip Whether this is a flip order
    /// @param flipTick Target tick for flip (ignored if not flip order)
    /// @return orderId The assigned order ID
    function _placeOrder(
        address base,
        address quote,
        uint128 amount,
        address maker,
        bool isBid,
        int16 tick,
        bool isFlip,
        int16 flipTick,
        bool revertOnTransferFail
    ) internal returns (uint128 orderId) {
        bytes32 key = pairKey(base, quote);
        Orderbook storage book = books[key];


        if (book.base == address(0)) {
            revert IStablecoinExchange.PairDoesNotExist();
        }


        if (tick < MIN_TICK || tick > MAX_TICK) {
            revert IStablecoinExchange.TickOutOfBounds(tick);
        }
        if (tick % TICK_SPACING != 0) revert IStablecoinExchange.InvalidTick();


        if (amount < MIN_ORDER_AMOUNT) {
            revert IStablecoinExchange.BelowMinimumOrderSize(amount);
        }


        if (isFlip) {
            if (flipTick < MIN_TICK || flipTick > MAX_TICK) {
                revert IStablecoinExchange.InvalidFlipTick();
            }
            if (flipTick % TICK_SPACING != 0) {
                revert IStablecoinExchange.InvalidFlipTick();
            }


            if (isBid) {
                if (flipTick <= tick) {
                    revert IStablecoinExchange.InvalidFlipTick();
                }
            } else {
                if (flipTick >= tick) {
                    revert IStablecoinExchange.InvalidFlipTick();
                }
            }
        }
        {
            // Calculate escrow amount and token
            uint128 escrowAmount;
            address escrowToken;
            if (isBid) {
                // For bids, escrow quote tokens based on price
                escrowToken = quote;
                uint32 price = tickToPrice(tick);
                escrowAmount = uint128((uint256(amount) * uint256(price)) / uint256(PRICE_SCALE));
            } else {
                // For asks, escrow base tokens
                escrowToken = base;
                escrowAmount = amount;
            }


            // Check if maker is authorized by the token's transfer policy before operating on internal balance
            uint64 policyId = ITIP20(escrowToken).transferPolicyId();
            if (
                !TIP403_REGISTRY.isAuthorized(policyId, maker)
                    || !TIP403_REGISTRY.isAuthorized(policyId, address(this))
            ) {
                revert ITIP20.PolicyForbids();
            }


            // Check if the user has a balance, transfer the rest
            uint128 userBalance = balances[maker][escrowToken];
            if (userBalance >= escrowAmount) {
                balances[maker][escrowToken] -= escrowAmount;
            } else {
                balances[maker][escrowToken] = 0;
                if (revertOnTransferFail) {
                    ITIP20(escrowToken)
                        .transferFrom(maker, address(this), escrowAmount - userBalance);
                } else {
                    try ITIP20(escrowToken)
                        .transferFrom(maker, address(this), escrowAmount - userBalance) { }
                    catch {
                        return 0;
                    }
                }
            }
        }
        orderId = nextOrderId;
        ++nextOrderId;


        orders[orderId] = IStablecoinExchange.Order({
            orderId: orderId,
            maker: maker,
            bookKey: key,
            isBid: isBid,
            tick: tick,
            amount: amount,
            remaining: amount,
            prev: 0,
            next: 0,
            isFlip: isFlip,
            flipTick: flipTick
        });


        // Immediately link order into the active orderbook
        _commitOrderToBook(orderId, key, tick, isBid, amount);


        emit OrderPlaced(orderId, maker, base, amount, isBid, tick);
        return orderId;
    }


    /// @notice Link an order into the active orderbook
    /// @param orderId The order ID to link
    /// @param bookKey The orderbook key
    /// @param tick The tick level
    /// @param isBid Whether this is a bid order
    /// @param amount The order amount (for liquidity tracking)
    function _commitOrderToBook(
        uint128 orderId,
        bytes32 bookKey,
        int16 tick,
        bool isBid,
        uint128 amount
    ) internal {
        Orderbook storage book = books[bookKey];
        IStablecoinExchange.TickLevel storage level = isBid ? book.bids[tick] : book.asks[tick];


        uint128 prevTail = level.tail;
        if (prevTail == 0) {
            level.head = orderId;
            level.tail = orderId;
            _setTickBit(bookKey, tick, isBid);


            // Update best bid/ask when new tick becomes active
            if (isBid) {
                if (tick > book.bestBidTick) {
                    book.bestBidTick = tick;
                }
            } else {
                if (tick < book.bestAskTick) {
                    book.bestAskTick = tick;
                }
            }
        } else {
            orders[prevTail].next = orderId;
            orders[orderId].prev = prevTail;
            level.tail = orderId;
        }


        // Increment total liquidity for this tick level
        level.totalLiquidity += amount;
    }


    /// @notice Place a limit order on the orderbook
    /// @param token Token address (system determines base/quote pairing)
    /// @param amount Order amount in base token
    /// @param isBid True for buy orders, false for sell orders
    /// @param tick Price tick for the order
    /// @return orderId The assigned order ID
    function place(address token, uint128 amount, bool isBid, int16 tick)
        external
        returns (uint128 orderId)
    {
        address quote = address(ITIP20(token).quoteToken());
        orderId = _placeOrder(token, quote, amount, msg.sender, isBid, tick, false, 0, true);
    }


    /// @notice Place a flip order that auto-flips when filled
    /// @param token Token address
    /// @param amount Order amount in base token
    /// @param isBid True for bid (buy), false for ask (sell)
    /// @param tick Price tick for the order
    /// @param flipTick Target tick to flip to when order is filled
    /// @return orderId The assigned order ID
    function placeFlip(address token, uint128 amount, bool isBid, int16 tick, int16 flipTick)
        external
        returns (uint128 orderId)
    {
        address quote = address(ITIP20(token).quoteToken());
        orderId = _placeOrder(token, quote, amount, msg.sender, isBid, tick, true, flipTick, true);
        emit FlipOrderPlaced(orderId, msg.sender, token, amount, isBid, tick, flipTick);
    }


    function cancel(uint128 orderId) external {
        IStablecoinExchange.Order storage order = orders[orderId];
        if (order.maker == address(0)) {
            revert IStablecoinExchange.OrderDoesNotExist();
        }
        if (order.maker != msg.sender) {
            revert IStablecoinExchange.Unauthorized();
        }


        Orderbook storage book = books[order.bookKey];
        address token = order.isBid ? book.quote : book.base;
        bool isBid = order.isBid;
        IStablecoinExchange.TickLevel storage level =
            isBid ? book.bids[order.tick] : book.asks[order.tick];


        if (order.prev != 0) {
            orders[order.prev].next = order.next;
        } else {
            level.head = order.next;
        }


        if (order.next != 0) {
            orders[order.next].prev = order.prev;
        } else {
            level.tail = order.prev;
        }


        // Decrement total liquidity
        level.totalLiquidity -= order.remaining;


        if (level.head == 0) {
            _clearTickBit(order.bookKey, order.tick, isBid);
        }


        // Credit escrow amount to user's withdrawable balance
        uint128 escrowAmount;
        if (order.isBid) {
            // For bids, escrow quote tokens based on price
            uint32 price = tickToPrice(order.tick);
            escrowAmount =
                uint128((uint256(order.remaining) * uint256(price)) / uint256(PRICE_SCALE));
        } else {
            // For asks, escrow base tokens
            escrowAmount = order.remaining;
        }
        balances[order.maker][token] += escrowAmount;


        delete orders[orderId];


        emit OrderCancelled(orderId);
    }


    /// @notice Withdraw tokens from exchange balance
    /// @param token Token address to withdraw
    /// @param amount Amount to withdraw
    function withdraw(address token, uint128 amount) external {
        uint128 balance = balances[msg.sender][token];
        if (balance < amount) revert IStablecoinExchange.InsufficientBalance();
        balances[msg.sender][token] -= amount;


        ITIP20(token).transfer(msg.sender, amount);
    }


    /// @notice Get user's token balance on the exchange
    /// @param user User address
    /// @param token Token address
    /// @return User's balance for the token
    function balanceOf(address user, address token) external view returns (uint128) {
        return balances[user][token];
    }


    /// @notice Get tick level information
    /// @param base Base token in pair
    /// @param tick Price tick
    /// @param isBid boolean to indicate bid/ask
    /// @return head First order ID tick
    /// @return tail Last order ID tick
    /// @return totalLiquidity Total liquidity at tick
    function getTickLevel(address base, int16 tick, bool isBid)
        external
        view
        returns (uint128 head, uint128 tail, uint128 totalLiquidity)
    {
        address quote = address(ITIP20(base).quoteToken());
        bytes32 key = pairKey(base, quote);
        Orderbook storage book = books[key];
        IStablecoinExchange.TickLevel memory level = isBid ? book.bids[tick] : book.asks[tick];
        return (level.head, level.tail, level.totalLiquidity);
    }


    /// @notice Get order information by order ID
    /// @param orderId The order ID to query
    /// @return order The order data
    function getOrder(uint128 orderId)
        external
        view
        returns (IStablecoinExchange.Order memory order)
    {
        IStablecoinExchange.Order storage o = orders[orderId];
        if (o.maker == address(0)) {
            revert IStablecoinExchange.OrderDoesNotExist();
        }
        return o;
    }


    /// @notice Quote swapping tokens for exact amount out (supports multi-hop routing)
    /// @param tokenIn Token to spend
    /// @param tokenOut Token to buy
    /// @param amountOut Amount of tokenOut to buy
    /// @return amountIn Amount of tokenIn needed
    function quoteSwapExactAmountOut(address tokenIn, address tokenOut, uint128 amountOut)
        external
        view
        returns (uint128 amountIn)
    {
        (bytes32[] memory route, bool[] memory directions) = findTradePath(tokenIn, tokenOut);


        // Work backwards from output to calculate input needed
        uint128 amount = amountOut;
        for (uint256 i = route.length; i > 0; i--) {
            bytes32 key = route[i - 1];
            bool baseForQuote = directions[i - 1];
            Orderbook storage book = books[key];
            amount = _quoteExactOut(key, book, baseForQuote, amount);
        }


        amountIn = amount;
    }


    /// @notice Fill an order and handle cleanup when fully filled
    /// @param orderId The order ID to fill
    /// @param fillAmount The amount to fill
    /// @return nextOrderAtTick The next order ID to process (0 if no more liquidity at this tick)
    function _fillOrder(uint128 orderId, uint128 fillAmount)
        internal
        returns (uint128 nextOrderAtTick)
    {
        // NOTE: This can be much more optimized but since this is only a reference contract, readability was prioritized
        IStablecoinExchange.Order storage order = orders[orderId];
        Orderbook storage book = books[order.bookKey];
        bool isBid = order.isBid;
        IStablecoinExchange.TickLevel storage level =
            isBid ? book.bids[order.tick] : book.asks[order.tick];


        // Fill the order
        order.remaining -= fillAmount;
        level.totalLiquidity -= fillAmount;


        emit OrderFilled(orderId, order.maker, msg.sender, fillAmount, order.remaining > 0);


        // Credit maker with appropriate tokens
        if (isBid) {
            // Bid order: maker gets base tokens
            balances[order.maker][book.base] += fillAmount;
        } else {
            // Ask order: maker gets quote tokens
            uint32 price = tickToPrice(order.tick);
            uint128 quoteAmount = (fillAmount * price) / PRICE_SCALE;
            balances[order.maker][book.quote] += quoteAmount;
        }


        if (order.remaining == 0) {
            // Order fully filled
            nextOrderAtTick = order.next;


            // Remove from linked list
            if (order.prev != 0) {
                orders[order.prev].next = order.next;
            } else {
                level.head = order.next;
            }


            if (order.next != 0) {
                orders[order.next].prev = order.prev;
            } else {
                level.tail = order.prev;
            }


            // If flip order, place order at flip tick on opposite side
            if (order.isFlip) {
                _placeOrder(
                    book.base,
                    book.quote,
                    order.amount,
                    order.maker,
                    !order.isBid,
                    order.flipTick,
                    true,
                    order.tick,
                    false
                );
            }


            delete orders[orderId];


            // Check if tick is exhausted and return 0 if so
            if (level.head == 0) {
                _clearTickBit(order.bookKey, order.tick, isBid);
                return 0;
            }
        } else {
            // Order partially filled, continue with same order
            nextOrderAtTick = orderId;
        }
    }


    /// @notice Decrement user's internal balance or transfer from external wallet
    /// @param user The user to transfer from
    /// @param token The token to transfer
    /// @param amount The amount to transfer
    function _decrementBalanceOrTransferFrom(address user, address token, uint128 amount) internal {
        // Check if user is authorized by the token's transfer policy before using internal balance
        uint64 policyId = ITIP20(token).transferPolicyId();
        if (
            !TIP403_REGISTRY.isAuthorized(policyId, user)
                || !TIP403_REGISTRY.isAuthorized(policyId, address(this))
        ) {
            revert ITIP20.PolicyForbids();
        }


        uint128 userBalance = balances[user][token];
        if (userBalance >= amount) {
            balances[user][token] -= amount;
        } else {
            balances[user][token] = 0;
            uint128 remaining = amount - userBalance;
            ITIP20(token).transferFrom(user, address(this), remaining);
        }
    }


    /// @notice Swap tokens for exact amount out (supports multi-hop routing)
    /// @param tokenIn Token to spend
    /// @param tokenOut Token to buy
    /// @param amountOut Amount of tokenOut to buy
    /// @param maxAmountIn Maximum amount of tokenIn to spend
    /// @return amountIn Actual amount of tokenIn spent
    function swapExactAmountOut(
        address tokenIn,
        address tokenOut,
        uint128 amountOut,
        uint128 maxAmountIn
    ) external returns (uint128 amountIn) {
        (bytes32[] memory route, bool[] memory directions) = findTradePath(tokenIn, tokenOut);


        // Work backwards from output to calculate input needed - intermediate amounts are TRANSITORY
        uint128 amount = amountOut;
        for (uint256 i = route.length; i > 0; i--) {
            bytes32 key = route[i - 1];
            bool baseForQuote = directions[i - 1];
            Orderbook storage book = books[key];
            amount = _fillOrdersExactOut(key, book, baseForQuote, amount);
        }


        amountIn = amount;
        if (amountIn > maxAmountIn) {
            revert IStablecoinExchange.MaxInputExceeded();
        }


        _decrementBalanceOrTransferFrom(msg.sender, tokenIn, amountIn);
        ITIP20(tokenOut).transfer(msg.sender, amountOut);
    }


    /// @notice Quote the proceeds from swapping a specific amount of tokens (supports multi-hop routing)
    /// @param tokenIn Token to sell
    /// @param tokenOut Token to receive
    /// @param amountIn Amount of tokenIn to sell
    /// @return amountOut Amount of tokenOut to receive
    function quoteSwapExactAmountIn(address tokenIn, address tokenOut, uint128 amountIn)
        external
        view
        returns (uint128 amountOut)
    {
        (bytes32[] memory route, bool[] memory directions) = findTradePath(tokenIn, tokenOut);


        // Work forwards from input to calculate output
        uint128 amount = amountIn;
        for (uint256 i = 0; i < route.length; i++) {
            bytes32 key = route[i];
            bool baseForQuote = directions[i];
            Orderbook storage book = books[key];
            amount = _quoteExactIn(key, book, baseForQuote, amount);
        }


        amountOut = amount;
    }


    /// @notice Swap tokens for exact amount in (supports multi-hop routing)
    /// @param tokenIn Token to sell
    /// @param tokenOut Token to receive
    /// @param amountIn Amount of tokenIn to sell
    /// @param minAmountOut Minimum amount of tokenOut to receive
    /// @return amountOut Actual amount of tokenOut received
    function swapExactAmountIn(
        address tokenIn,
        address tokenOut,
        uint128 amountIn,
        uint128 minAmountOut
    ) external returns (uint128 amountOut) {
        (bytes32[] memory route, bool[] memory directions) = findTradePath(tokenIn, tokenOut);


        // Work forwards from input to calculate output - intermediate amounts are TRANSITORY
        uint128 amount = amountIn;
        for (uint256 i = 0; i < route.length; i++) {
            bytes32 key = route[i];
            bool baseForQuote = directions[i];
            Orderbook storage book = books[key];
            amount = _fillOrdersExactIn(key, book, baseForQuote, amount);
        }


        amountOut = amount;
        if (amountOut < minAmountOut) {
            revert IStablecoinExchange.InsufficientOutput();
        }


        _decrementBalanceOrTransferFrom(msg.sender, tokenIn, amountIn);
        ITIP20(tokenOut).transfer(msg.sender, amountOut);
    }


    /// @notice Fill orders for exact output amount
    /// @param key Orderbook key
    /// @param book Orderbook storage reference
    /// @param baseForQuote True if spending base for quote, false if spending quote for base
    /// @param amountOut Exact amount of output tokens desired
    /// @return amountIn Actual amount of input tokens spent
    function _fillOrdersExactOut(
        bytes32 key,
        Orderbook storage book,
        bool baseForQuote,
        uint128 amountOut
    ) internal returns (uint128 amountIn) {
        uint128 remainingOut = amountOut;


        if (baseForQuote) {
            int16 currentTick = book.bestBidTick;
            // If there is no liquidity, revert
            if (currentTick == type(int16).min) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            IStablecoinExchange.TickLevel storage level = book.bids[currentTick];
            uint128 orderId = level.head;


            while (remainingOut > 0) {
                // Get the price at the current tick and fetch the current order from storage
                uint32 price = tickToPrice(currentTick);
                IStablecoinExchange.Order memory currentOrder = orders[orderId];


                // For bids, we want remainingOut quote tokens
                uint128 baseNeeded = (remainingOut * PRICE_SCALE) / price;
                uint128 fillAmount;


                // Calculate how much quote to receive for fillAmount of base
                if (baseNeeded > currentOrder.remaining) {
                    fillAmount = currentOrder.remaining;
                    remainingOut -= (fillAmount * price) / PRICE_SCALE;
                } else {
                    fillAmount = baseNeeded;
                    remainingOut = 0;
                }
                amountIn += fillAmount;


                // Fill the order and get next order
                orderId = _fillOrder(orderId, fillAmount);


                if (remainingOut == 0) {
                    return amountIn;
                }


                // If tick is exhausted, move to next tick
                if (orderId == 0) {
                    bool initialized;
                    (currentTick, initialized) = nextInitializedBidTick(key, currentTick);
                    if (!initialized) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }


                    level = book.bids[currentTick];
                    book.bestBidTick = currentTick;
                    orderId = level.head;
                }
            }
        } else {
            // quote for base
            int16 currentTick = book.bestAskTick;
            // If there is no liquidity, revert
            if (currentTick == type(int16).max) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            IStablecoinExchange.TickLevel storage level = book.asks[currentTick];
            uint128 orderId = level.head;


            while (remainingOut > 0) {
                uint32 price = tickToPrice(currentTick);
                IStablecoinExchange.Order memory currentOrder = orders[orderId];


                uint128 fillAmount;


                if (remainingOut > currentOrder.remaining) {
                    fillAmount = currentOrder.remaining;
                    remainingOut -= fillAmount;
                } else {
                    fillAmount = remainingOut;
                    remainingOut = 0;
                }


                // Calculate how much quote to pay for fillAmount of base
                uint128 quoteIn = (fillAmount * price) / PRICE_SCALE;
                amountIn += quoteIn;


                // Fill the order and get next order
                orderId = _fillOrder(orderId, fillAmount);


                if (remainingOut == 0) {
                    return amountIn;
                }


                // If tick is exhausted, move to next tick
                if (orderId == 0) {
                    bool initialized;
                    (currentTick, initialized) = nextInitializedAskTick(key, currentTick);
                    if (!initialized) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }


                    level = book.asks[currentTick];
                    book.bestAskTick = currentTick;
                    orderId = level.head;
                }
            }
        }
    }


    /// @notice Fill orders for exact input amount
    /// @param key Orderbook key
    /// @param book Orderbook storage reference
    /// @param baseForQuote True if spending base for quote, false if spending quote for base
    /// @param amountIn Exact amount of input tokens to spend
    /// @return amountOut Actual amount of output tokens received
    function _fillOrdersExactIn(
        bytes32 key,
        Orderbook storage book,
        bool baseForQuote,
        uint128 amountIn
    ) internal returns (uint128 amountOut) {
        uint128 remainingIn = amountIn;


        if (baseForQuote) {
            int16 currentTick = book.bestBidTick;
            // If there is no liquidity, revert
            if (currentTick == type(int16).min) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            IStablecoinExchange.TickLevel storage level = book.bids[currentTick];
            uint128 orderId = level.head;


            while (remainingIn > 0) {
                uint32 price = tickToPrice(currentTick);
                IStablecoinExchange.Order memory currentOrder = orders[orderId];


                uint128 fillAmount;


                if (remainingIn > currentOrder.remaining) {
                    fillAmount = currentOrder.remaining;
                    remainingIn -= fillAmount;
                } else {
                    fillAmount = remainingIn;
                    remainingIn = 0;
                }


                // Calculate how much quote to receive for fillAmount of base
                uint128 quoteOut = (fillAmount * price) / PRICE_SCALE;
                amountOut += quoteOut;


                // Fill the order and get next order
                orderId = _fillOrder(orderId, fillAmount);


                if (remainingIn == 0) {
                    return amountOut;
                }


                // If tick is exhausted (orderId == 0), move to next tick
                if (orderId == 0) {
                    bool initialized;
                    (currentTick, initialized) = nextInitializedBidTick(key, currentTick);
                    if (!initialized) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }


                    level = book.bids[currentTick];
                    book.bestBidTick = currentTick;
                    orderId = level.head;
                }
            }
        } else {
            // quote for base
            int16 currentTick = book.bestAskTick;
            // If there is no liquidity, revert
            if (currentTick == type(int16).max) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            IStablecoinExchange.TickLevel storage level = book.asks[currentTick];
            uint128 orderId = level.head;


            while (remainingIn > 0) {
                uint32 price = tickToPrice(currentTick);
                IStablecoinExchange.Order memory currentOrder = orders[orderId];


                // For asks, calculate how much base we can get for remainingIn quote
                uint128 baseOut = (remainingIn * PRICE_SCALE) / price;
                uint128 fillAmount;


                // Calculate actual quote needed for fillAmount of base
                if (baseOut > currentOrder.remaining) {
                    fillAmount = currentOrder.remaining;
                    remainingIn -= (fillAmount * price) / PRICE_SCALE;
                } else {
                    fillAmount = baseOut;
                    remainingIn = 0;
                }
                amountOut += fillAmount;


                // Fill the order and get next order
                orderId = _fillOrder(orderId, fillAmount);


                if (remainingIn == 0) {
                    return amountOut;
                }


                // If tick is exhausted (orderId == 0), move to next tick
                if (orderId == 0) {
                    bool initialized;
                    (currentTick, initialized) = nextInitializedAskTick(key, currentTick);
                    if (!initialized) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }


                    level = book.asks[currentTick];
                    book.bestAskTick = currentTick;
                    orderId = level.head;
                }
            }
        }
    }


    /// @notice Quote exact output amount
    /// @param book Orderbook storage reference
    /// @param baseForQuote True if spending base for quote, false if spending quote for base
    /// @param amountOut Exact amount of output tokens desired
    /// @return amountIn Amount of input tokens needed
    function _quoteExactOut(
        bytes32 key,
        Orderbook storage book,
        bool baseForQuote,
        uint128 amountOut
    ) internal view returns (uint128 amountIn) {
        uint128 remainingOut = amountOut;


        if (baseForQuote) {
            int16 currentTick = book.bestBidTick;
            if (currentTick == type(int16).min) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            while (remainingOut > 0) {
                IStablecoinExchange.TickLevel storage level = book.bids[currentTick];


                uint32 price = tickToPrice(currentTick);


                uint128 baseNeeded = (remainingOut * PRICE_SCALE) / price;
                uint128 fillAmount;


                if (baseNeeded > level.totalLiquidity) {
                    fillAmount = level.totalLiquidity;
                    remainingOut -= (fillAmount * price) / PRICE_SCALE;
                } else {
                    fillAmount = baseNeeded;
                    remainingOut = 0;
                }


                amountIn += fillAmount;


                if (fillAmount == level.totalLiquidity) {
                    // Move to next tick if we exhaust this level
                    bool initialized;
                    (currentTick, initialized) = nextInitializedBidTick(key, currentTick);
                    if (!initialized && remainingOut > 0) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }
                }
            }
        } else {
            int16 currentTick = book.bestAskTick;
            if (currentTick == type(int16).max) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            while (remainingOut > 0) {
                IStablecoinExchange.TickLevel storage level = book.asks[currentTick];
                uint32 price = tickToPrice(currentTick);


                uint128 fillAmount;


                if (remainingOut > level.totalLiquidity) {
                    fillAmount = level.totalLiquidity;
                    remainingOut -= fillAmount;
                } else {
                    fillAmount = remainingOut;
                    remainingOut = 0;
                }


                uint128 quoteIn = (fillAmount * price) / PRICE_SCALE;
                amountIn += quoteIn;


                if (fillAmount == level.totalLiquidity) {
                    // Move to next tick if we exhaust this level
                    bool initialized;
                    (currentTick, initialized) = nextInitializedAskTick(key, currentTick);
                    if (!initialized && remainingOut > 0) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }
                }
            }
        }
    }


    /// @notice Quote exact input amount
    /// @param book Orderbook storage reference
    /// @param baseForQuote True if spending base for quote, false if spending quote for base
    /// @param amountIn Exact amount of input tokens to spend
    /// @return amountOut Amount of output tokens received
    function _quoteExactIn(bytes32 key, Orderbook storage book, bool baseForQuote, uint128 amountIn)
        internal
        view
        returns (uint128 amountOut)
    {
        uint128 remainingIn = amountIn;


        if (baseForQuote) {
            int16 currentTick = book.bestBidTick;
            if (currentTick == type(int16).min) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            while (remainingIn > 0) {
                IStablecoinExchange.TickLevel storage level = book.bids[currentTick];
                uint32 price = tickToPrice(currentTick);


                uint128 fillAmount;


                if (remainingIn > level.totalLiquidity) {
                    fillAmount = level.totalLiquidity;
                    remainingIn -= fillAmount;
                } else {
                    fillAmount = remainingIn;
                    remainingIn = 0;
                }


                amountOut += (fillAmount * price) / PRICE_SCALE;


                if (fillAmount == level.totalLiquidity) {
                    // Move to next tick if we exhaust this level
                    bool initialized;
                    (currentTick, initialized) = nextInitializedBidTick(key, currentTick);
                    if (!initialized && remainingIn > 0) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }
                }
            }
        } else {
            int16 currentTick = book.bestAskTick;
            if (currentTick == type(int16).max) {
                revert IStablecoinExchange.InsufficientLiquidity();
            }


            while (remainingIn > 0) {
                IStablecoinExchange.TickLevel storage level = book.asks[currentTick];
                uint32 price = tickToPrice(currentTick);


                // Calculate how much base we can get for remainingIn quote
                uint128 baseOut = (remainingIn * PRICE_SCALE) / price;
                uint128 fillAmount;


                if (baseOut > level.totalLiquidity) {
                    fillAmount = level.totalLiquidity;
                    remainingIn -= (fillAmount * price) / PRICE_SCALE;
                } else {
                    fillAmount = baseOut;
                    remainingIn = 0;
                }
                amountOut += fillAmount;


                if (fillAmount == level.totalLiquidity) {
                    // Move to next tick if we exhaust this level
                    bool initialized;
                    (currentTick, initialized) = nextInitializedAskTick(key, currentTick);
                    if (!initialized && remainingIn > 0) {
                        revert IStablecoinExchange.InsufficientLiquidity();
                    }
                }
            }
        }
    }


    /// @notice Find next initialized ask tick higher than current tick
    function nextInitializedAskTick(bytes32 bookKey, int16 tick)
        internal
        view
        returns (int16 nextTick, bool initialized)
    {
        Orderbook storage book = books[bookKey];
        nextTick = tick + 1;
        while (nextTick <= MAX_TICK) {
            int16 wordIndex = nextTick >> 8;
            uint8 bitIndex = uint8(int8(nextTick));
            if ((book.askBitmap[wordIndex] >> bitIndex) & 1 != 0) {
                return (nextTick, true);
            }
            ++nextTick;
        }
        return (nextTick, false);
    }


    /// @notice Find next initialized bid tick lower than current tick
    function nextInitializedBidTick(bytes32 bookKey, int16 tick)
        internal
        view
        returns (int16 nextTick, bool initialized)
    {
        Orderbook storage book = books[bookKey];
        nextTick = tick - 1;
        while (nextTick >= MIN_TICK) {
            int16 wordIndex = nextTick >> 8;
            uint8 bitIndex = uint8(int8(nextTick));
            if ((book.bidBitmap[wordIndex] >> bitIndex) & 1 != 0) {
                return (nextTick, true);
            }
            --nextTick;
        }
        return (nextTick, false);
    }


    /*//////////////////////////////////////////////////////////////
                        MULTI-HOP ROUTING
    //////////////////////////////////////////////////////////////*/


    /// @notice Check if an address is a TIP20 token by verifying its prefix
    /// @param token The address to check
    /// @return True if the address has the TIP20 prefix
    function isTIP20(address token) internal pure returns (bool) {
        bytes12 tokenPrefix;
        assembly {
            tokenPrefix := shl(96, token)
        }
        return tokenPrefix == TIP20_PREFIX;
    }


    /// @notice Find trade path between two tokens using LCA (Lowest Common Ancestor) algorithm
    /// @param tokenIn Input token address
    /// @param tokenOut Output token address
    /// @return route Array of (bookKey, baseForQuote) tuples representing the trade path
    function findTradePath(address tokenIn, address tokenOut)
        internal
        view
        returns (bytes32[] memory, bool[] memory)
    {
        if (tokenIn == tokenOut) revert IStablecoinExchange.IdenticalTokens();


        // Validate that both tokens are TIP20 tokens
        if (!isTIP20(tokenIn)) revert IStablecoinExchange.InvalidToken();
        if (!isTIP20(tokenOut)) revert IStablecoinExchange.InvalidToken();


        // Check if direct or reverse pair exists
        address inQuote = address(ITIP20(tokenIn).quoteToken());
        address outQuote = address(ITIP20(tokenOut).quoteToken());


        if (inQuote == tokenOut || outQuote == tokenIn) {
            address[] memory directPath = new address[](2);
            directPath[0] = tokenIn;
            directPath[1] = tokenOut;
            return validateAndBuildRoute(directPath);
        }


        // Multi-hop: Find LCA and build path
        address[] memory pathIn = findPathToRoot(tokenIn);
        address[] memory pathOut = findPathToRoot(tokenOut);


        // Find the lowest common ancestor (LCA)
        address lca = address(0);
        for (uint256 i = 0; i < pathIn.length; i++) {
            for (uint256 j = 0; j < pathOut.length; j++) {
                if (pathIn[i] == pathOut[j]) {
                    lca = pathIn[i];
                    break;
                }
            }
            if (lca != address(0)) break;
        }


        if (lca == address(0)) revert IStablecoinExchange.PairDoesNotExist();


        // Build the trade path: tokenIn -> ... -> LCA -> ... -> tokenOut
        uint256 pathInLength = 0;
        for (uint256 i = 0; i < pathIn.length; i++) {
            pathInLength++;
            if (pathIn[i] == lca) break;
        }


        uint256 pathOutLength = 0;
        for (uint256 i = 0; i < pathOut.length; i++) {
            if (pathOut[i] == lca) break;
            pathOutLength++;
        }


        address[] memory tradePath = new address[](pathInLength + pathOutLength);


        // Add path from tokenIn up to and including LCA
        for (uint256 i = 0; i < pathInLength; i++) {
            tradePath[i] = pathIn[i];
        }


        // Add path from LCA down to tokenOut (excluding LCA itself, in reverse)
        for (uint256 i = 0; i < pathOutLength; i++) {
            tradePath[pathInLength + i] = pathOut[pathOutLength - 1 - i];
        }


        return validateAndBuildRoute(tradePath);
    }


    /// @notice Validates that all pairs in the path exist and returns book keys with direction info
    /// @param path Array of token addresses representing the trade path
    /// @return bookKeys Array of orderbook keys for each hop
    /// @return baseForQuote Array of direction indicators (true if selling base for quote)
    function validateAndBuildRoute(address[] memory path)
        internal
        view
        returns (bytes32[] memory bookKeys, bool[] memory baseForQuote)
    {
        if (path.length < 2) revert IStablecoinExchange.PairDoesNotExist();


        bookKeys = new bytes32[](path.length - 1);
        baseForQuote = new bool[](path.length - 1);


        for (uint256 i = 0; i < path.length - 1; i++) {
            address hopTokenIn = path[i];
            address hopTokenOut = path[i + 1];


            bytes32 bookKey = pairKey(hopTokenIn, hopTokenOut);
            Orderbook storage orderbook = books[bookKey];


            // Validate pair exists
            if (orderbook.base == address(0)) {
                revert IStablecoinExchange.PairDoesNotExist();
            }


            // Determine direction
            bool isBaseForQuote = (hopTokenIn == orderbook.base);


            bookKeys[i] = bookKey;
            baseForQuote[i] = isBaseForQuote;
        }


        return (bookKeys, baseForQuote);
    }


    /// @notice Find the path from a token to the root (PathUSD)
    /// @param token Starting token address
    /// @return path Array of addresses starting with the token and ending with PathUSD
    function findPathToRoot(address token) internal view returns (address[] memory path) {
        // First, count the path length
        uint256 length = 1;
        address current = token;
        address pathUSD = 0x20C0000000000000000000000000000000000000;


        while (current != pathUSD) {
            current = address(ITIP20(current).quoteToken());
            length++;
        }


        // Now build the path
        path = new address[](length);
        current = token;
        for (uint256 i = 0; i < length; i++) {
            path[i] = current;
            if (current == pathUSD) break;
            current = address(ITIP20(current).quoteToken());
        }


        return path;
    }


}



Ask in ChatGPT
On this page
            * SDKs
SDKs
Tempo is building clients in multiple languages to make integration as easy as possible.
Tempo distributes TypeScript SDKs for:
            * Viem: TypeScript interface for EVM blockchains
            * Wagmi: React Hooks (and reactive primitives) for EVM blockchains
The Tempo extensions can be used to perform common operations with the chain, such as: querying the chain, sending Tempo transactions, managing tokens & their AMM pools, and more.
 Viem 

Viem Setup
Set up a Viem client to interact with Tempo

Wagmi Setup
Set up a Wagmi configuration with Tempo
When should I use Wagmi vs. Viem?
            * Viem is best suited for libraries, tooling, servers, scripting, etc – a low-level and stateless interface for the EVM
            * Wagmi is best suited for applications & wallets – a high-level and stateful interface for the EVM (React Hooks, Vanilla JS, etc)
Viem
Actions
Viem Actions for querying data, sending transactions, managing tokens & AMM pools, and more
Transports
Viem Transports for adding Tempo abstractions to RPC requests
Wagmi
Hooks
Wagmi React Hooks for building apps on Tempo
Connectors
Wagmi Connectors for connecting between wallets, apps, and Tempo
Actions
Wagmi Actions for querying data, sending transactions, managing tokens & AMM pools, and more
Setup
Setup
Setup the Tempo extension for Viem by following the steps below.
Install
To install the Tempo extension, you will need to install Viem and Tempo:
npmpnpm
npm i tempo.ts viem
Configure
Next, we will configure a Viem Client.
viem.config.ts
import { tempo } from 'tempo.ts/chains'import { tempoActions } from 'tempo.ts/viem'import { createClient, http, publicActions, walletActions } from 'viem'import { privateKeyToAccount } from 'viem/accounts' export const client = createClient({  account: privateKeyToAccount('0x...'),  chain: tempo({ feeToken: '0x20c0000000000000000000000000000000000001' }),  transport: http(),})  .extend(publicActions)  .extend(walletActions)  .extend(tempoActions())
Use Viem Actions
Once we have configured our Viem client with Tempo, we can then use regular Viem actions (e.g. sendTransactionSync) that are decorated with Tempo properties like calls (batch transactions), feePayer (fee sponsorship), nonceKey (concurrent transactions) and more!
example.tsviem.config.ts
import { client } from './viem.config' const receipt = await client.sendTransactionSync({  calls: [    {      data: '0xcafebabe00000000000000000000000000000001',      to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'    },    {      data: '0xdeadbeef00000000000000000000000000000002',      to: '0xfeedfacefeedfacefeedfacefeedfacefeedface'    },    {      data: '0xfeedface00000000000000000000000000000003',      to: '0xfeedfacefeedfacefeedfacefeedfacefeedface'    },  ],  feePayer: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',  nonceKey: 1337n,})
See all Viem Actions
Use Tempo Actions
You can also use Tempo-specific Actions:
example.tsviem.config.ts
import { client } from './viem.config' const alphaUsd = '0x20c0000000000000000000000000000000000001' const metadata = await client.token.getMetadata({  token: alphaUsd }) console.log(  'Alpha USD Metadata:',  metadata.name,  metadata.symbol,  metadata.decimals,  metadata.totalSupply)
Alpha USD Metadata: Alpha USD, AlphaUSD, 6, 1000000000000000000000n
See all Tempo Actions
Next Steps
After you have set up Tempo with Viem, you can now:
            * Follow a guide on how to use accounts, make payments, issue stablecoins, exchange stablecoins, and more.
            * Use the suite of Tempo Actions
Overview
Previousshift←
Setup
Setup the Tempo extension for Viem by following the steps below.
Install
To install the Tempo extension, you will need to install Viem and Tempo:
npmpnpm
npm i tempo.ts viem
Configure
Next, we will configure a Viem Client.
viem.config.ts
import { tempo } from 'tempo.ts/chains'import { tempoActions } from 'tempo.ts/viem'import { createClient, http, publicActions, walletActions } from 'viem'import { privateKeyToAccount } from 'viem/accounts' export const client = createClient({  account: privateKeyToAccount('0x...'),  chain: tempo({ feeToken: '0x20c0000000000000000000000000000000000001' }),  transport: http(),})  .extend(publicActions)  .extend(walletActions)  .extend(tempoActions())
Use Viem Actions
Once we have configured our Viem client with Tempo, we can then use regular Viem actions (e.g. sendTransactionSync) that are decorated with Tempo properties like calls (batch transactions), feePayer (fee sponsorship), nonceKey (concurrent transactions) and more!
example.tsviem.config.ts
import { client } from './viem.config' const receipt = await client.sendTransactionSync({  calls: [    {      data: '0xcafebabe00000000000000000000000000000001',      to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'    },    {      data: '0xdeadbeef00000000000000000000000000000002',      to: '0xfeedfacefeedfacefeedfacefeedfacefeedface'    },    {      data: '0xfeedface00000000000000000000000000000003',      to: '0xfeedfacefeedfacefeedfacefeedfacefeedface'    },  ],  feePayer: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',  nonceKey: 1337n,})
See all Viem Actions
Use Tempo Actions
You can also use Tempo-specific Actions:
example.tsviem.config.ts
import { client } from './viem.config' const alphaUsd = '0x20c0000000000000000000000000000000000001' const metadata = await client.token.getMetadata({  token: alphaUsd }) console.log(  'Alpha USD Metadata:',  metadata.name,  metadata.symbol,  metadata.decimals,  metadata.totalSupply)
Alpha USD Metadata: Alpha USD, AlphaUSD, 6, 1000000000000000000000n
See all Tempo Actions
Next Steps
After you have set up Tempo with Viem, you can now:
            * Follow a guide on how to use accounts, make payments, issue stablecoins, exchange stablecoins, and more.
            * Use the suite of Tempo Actions
Instantiates an Account from a WebAuthn credential (passkey).
Usage
Creating Credentials
Create a credential with WebAuthnP256.createCredential and then instantiate a Viem Account with Account.fromWebAuthnP256.
It is highly recommended to store the credential's public key in an external store for future use (ie. for future calls to WebAuthnP256.getCredential).
import { Account, WebAuthnP256 } from 'tempo.ts/viem'import { store } from './store' // 1. Create credentialconst credential = await WebAuthnP256.createCredential({ name: 'Example' }) // 2. Instantiate accountconst account = Account.fromWebAuthnP256(credential) // 3. Store public keyawait store.set(credential.id, credential.publicKey) console.log('Address:', account.address)
Address: 0x...
Loading Credentials
Get a credential from WebAuthnP256.getCredential and then instantiate an account with Account.fromWebAuthnP256.
The getPublicKey function is required to fetch the public key paired with the credential from an external store. The public key is required to derive the account's address.
import { Account, WebAuthnP256 } from 'tempo.ts/viem'import { store } from './store' // 1. Get credentialconst credential = await WebAuthnP256.getCredential({  async getPublicKey(credential) {    // 2. Get public key from external store.    return await store.get(credential.id)  }}) // 3. Instantiate accountconst account = Account.fromWebAuthnP256(credential) console.log('Address:', account.address)
Address: 0x...
Return Type
The return type of Account.fromWebAuthnP256 is backwards compatible with Viem's Account type.
type ReturnType = Account type Account = {  /** Account address */  address: Address  /** Key type */  keyType: string  /** Public key (hex) */  publicKey: Hex  /** Account source */  source: string  /** Account storage */  storage: Storage  /** Account type */  type: 'local'   /** Signs a raw digest */  sign: (parameters: { hash: Hex }) => Promise<Hex>  /** Signs an EIP-7702 authorization */  signAuthorization: (parameters: SignAuthorizationParameters) => Promise<Authorization>  /** Signs a EIP-191 `personal_sign` message */  signMessage: (parameters: { message: string | { raw: Hex } }) => Promise<Hex>  /** Signs a transaction */  signTransaction: (transaction: TransactionRequest) => Promise<Hex>  /** Signs a EIP-712 typed data */  signTypedData: (typedData: TypedData) => Promise<Hex>}
Parameters
credential
            * Type: { id: string; publicKey: Hex }
The WebAuthn credential object containing:
            * id - The credential ID
            * publicKey - The public key as a hex string
options (optional)
options.getFn
            * Type: (options: CredentialRequestOptions) => Promise<Credential | null>
Custom function to get the WebAuthn credential. Use this to override the default navigator.credentials.get behavior.
options.rpId
            * Type: string
The relying party ID. This should match the domain of your application.
options.storage
            * Type: Storage
            * Default: Storage.memory()
Account storage for pending key authorizations and metadata.
Overview
Previousshift←
Account.fromWebCryptoP256
Instantiates an Account from a WebCrypto P256 key pair.
Usage
import { Account } from 'tempo.ts/viem'import { WebCryptoP256 } from 'ox' const keyPair = await WebCryptoP256.createKeyPair() const account = Account.fromWebCryptoP256(keyPair) console.log('Address:', account.address)
Address: 0x...
Access Keys
Create an account that acts as an access key for a parent account:
example.tsviem.config.ts
import { Account, WebCryptoP256 } from 'tempo.ts/viem'import { client } from './viem.config' // Create root accountconst account = Account.fromSecp256k1(  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80') // Create access key const keyPair = await WebCryptoP256.createKeyPair()const accessKey = Account.fromWebCryptoP256(keyPair, { access: account }) // Sign a key authorizationconst keyAuthorization = await account.signKeyAuthorization(accessKey, {  expiry: Math.floor(Date.now() / 1000) + 86400, // 24 hour expiry}) // Attach to next transactionconst receipt = await client.sendTransactionSync({  account: accessKey,  keyAuthorization,  to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',}) // Now any subsequent transaction can be used with `accessKey`// WITHOUT the `keyAuthorization` parameter!
Return Type
The return type of Account.fromWebCryptoP256 is backwards compatible with Viem's Account type.
type ReturnType = Account type Account = {  /** Account address */  address: Address  /** Key type */  keyType: string  /** Public key (hex) */  publicKey: Hex  /** Account source */  source: string  /** Account storage */  storage: Storage  /** Account type */  type: 'local'   /** Assigns a key authorization to the next transaction */  assignKeyAuthorization: (keyAuthorization: KeyAuthorization) => Promise<void>  /** Signs a raw digest */  sign: (parameters: { hash: Hex }) => Promise<Hex>  /** Signs an EIP-7702 authorization */  signAuthorization: (parameters: SignAuthorizationParameters) => Promise<Authorization>  /** Signs a key authorization */  signKeyAuthorization: (    key: { accessKeyAddress: Address; keyType: string },    parameters?: { expiry?: bigint; limits?: Limits }  ) => Promise<KeyAuthorization>  /** Signs a EIP-191 `personal_sign` message */  signMessage: (parameters: { message: string | { raw: Hex } }) => Promise<Hex>  /** Signs a transaction */  signTransaction: (transaction: TransactionRequest) => Promise<Hex>  /** Signs a EIP-712 typed data */  signTypedData: (typedData: TypedData) => Promise<Hex>}
Parameters
keyPair
            * Type: { publicKey: PublicKey; privateKey: CryptoKey }
The WebCrypto P256 key pair from WebCryptoP256.createKeyPair().
options (optional)
options.access
            * Type: Address | Account
Parent account to access.
options.storage
            * Type: Storage
            * Default: Storage.memory()
Account storage for pending key authorizations and metadata.
fromWebAuthnP256
Previousshift←
Account.fromSecp256k1
Instantiates an Account from a secp256k1 private key (standard Ethereum signature scheme).
Usage
import { Account } from 'tempo.ts/viem' const account = Account.fromSecp256k1(  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80') console.log('Address:', account.address)
Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Access Keys
Create an account that acts as an access key for a parent account:
example.tsviem.config.ts
import { Account, Secp256k1 } from 'tempo.ts/viem'import { client } from './viem.config' // Create root accountconst account = Account.fromSecp256k1(  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80') // Create access key const accessKey = Account.fromSecp256k1(  Secp256k1.randomPrivateKey(),  { access: account }) // Sign a key authorizationconst keyAuthorization = await account.signKeyAuthorization(accessKey, {  expiry: Math.floor(Date.now() / 1000) + 86400, // 24 hour expiry}) // Attach to next transactionconst receipt = await client.sendTransactionSync({  account: accessKey,  keyAuthorization,  to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',}) // Now any subsequent transaction can be used with `accessKey`// WITHOUT the `keyAuthorization` parameter!
Return Type
The return type of Account.fromSecp256k1 is backwards compatible with Viem's Account type.
type ReturnType = Account type Account = {  /** Account address */  address: Address  /** Key type */  keyType: string  /** Public key (hex) */  publicKey: Hex  /** Account source */  source: string  /** Account storage */  storage: Storage  /** Account type */  type: 'local'   /** Assigns a key authorization to the next transaction */  assignKeyAuthorization: (keyAuthorization: KeyAuthorization) => Promise<void>  /** Signs a raw digest */  sign: (parameters: { hash: Hex }) => Promise<Hex>  /** Signs an EIP-7702 authorization */  signAuthorization: (parameters: SignAuthorizationParameters) => Promise<Authorization>  /** Signs a key authorization */  signKeyAuthorization: (    key: { accessKeyAddress: Address; keyType: string },    parameters?: { expiry?: bigint; limits?: Limits }  ) => Promise<KeyAuthorization>  /** Signs a EIP-191 `personal_sign` message */  signMessage: (parameters: { message: string | { raw: Hex } }) => Promise<Hex>  /** Signs a transaction */  signTransaction: (transaction: TransactionRequest) => Promise<Hex>  /** Signs a EIP-712 typed data */  signTypedData: (typedData: TypedData) => Promise<Hex>}
Parameters
privateKey
            * Type: Hex
The secp256k1 private key as a hex string.
options (optional)
options.access
            * Type: Address | Account
Parent account to access.
options.storage
            * Type: Storage
            * Default: Storage.memory()
Account storage for key authorizations and metadata.
fromWebCryptoP256
Previousshift←
Account.fromP256
Instantiates an Account from a P256 private key.
Usage
import { Account } from 'tempo.ts/viem' const account = Account.fromP256(  '0x...') console.log('Address:', account.address)
Address: 0x...
Access Keys
Create an account that acts as an access key for a parent account:
example.tsviem.config.ts
import { Account, P256 } from 'tempo.ts/viem'import { client } from './viem.config' // Create root accountconst account = Account.fromSecp256k1(  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80') // Create access key const accessKey = Account.fromP256(  P256.randomPrivateKey(),  { access: account }) // Sign a key authorizationconst keyAuthorization = await account.signKeyAuthorization(accessKey, {  expiry: Math.floor(Date.now() / 1000) + 86400, // 24 hour expiry}) // Attach to next transactionconst receipt = await client.sendTransactionSync({  account: accessKey,  keyAuthorization,  to: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',}) // Now any subsequent transaction can be used with `accessKey`// WITHOUT the `keyAuthorization` parameter!
Return Type
The return type of Account.fromP256 is backwards compatible with Viem's Account type.
type ReturnType = Account type Account = {  /** Account address */  address: Address  /** Key type */  keyType: string  /** Public key (hex) */  publicKey: Hex  /** Account source */  source: string  /** Account storage */  storage: Storage  /** Account type */  type: 'local'   /** Assigns a key authorization to the next transaction */  assignKeyAuthorization: (keyAuthorization: KeyAuthorization) => Promise<void>  /** Signs a raw digest */  sign: (parameters: { hash: Hex }) => Promise<Hex>  /** Signs an EIP-7702 authorization */  signAuthorization: (parameters: SignAuthorizationParameters) => Promise<Authorization>  /** Signs a key authorization */  signKeyAuthorization: (    key: { accessKeyAddress: Address; keyType: string },    parameters?: { expiry?: bigint; limits?: Limits }  ) => Promise<KeyAuthorization>  /** Signs a EIP-191 `personal_sign` message */  signMessage: (parameters: { message: string | { raw: Hex } }) => Promise<Hex>  /** Signs a transaction */  signTransaction: (transaction: TransactionRequest) => Promise<Hex>  /** Signs a EIP-712 typed data */  signTypedData: (typedData: TypedData) => Promise<Hex>}
Parameters
privateKey
            * Type: Hex
The P256 private key as a hex string.
options (optional)
options.access
            * Type: Address | Account
Parent account to access.
options.storage
            * Type: Storage
            * Default: Storage.memory()
Account storage for key authorizations and metadata.
fromSecp256k1
Previousshift←
Overview
Actions
Action
	Description
	AMM Actions
	

	amm.burn
	Burns liquidity tokens and receives the underlying token pair
	amm.getLiquidityBalance
	Gets the liquidity balance for an address in a specific pool
	amm.getPool
	Gets the reserves for a liquidity pool
	amm.mint
	Mints liquidity tokens by providing a token pair
	amm.rebalanceSwap
	Performs a rebalance swap between user and validator tokens
	amm.watchBurn
	Watches for liquidity burn events
	amm.watchFeeSwap
	Watches for fee swap events
	amm.watchMint
	Watches for liquidity mint events
	amm.watchRebalanceSwap
	Watches for rebalance swap events
	Faucet Actions
	

	faucet.fund
	Funds an account with testnet tokens
	Fee Actions
	

	fee.getUserToken
	Gets the user's default fee token preference
	fee.setUserToken
	Sets the user's default fee token preference
	fee.watchSetUserToken
	Watches for user token set events
	Nonce Actions
	

	nonce.getNonce
	Gets the nonce for an account and nonce key
	nonce.getNonceKeyCount
	Gets the number of active nonce keys for an account
	nonce.watchActiveKeyCountChanged
	Watches for active key count changed events
	nonce.watchNonceIncremented
	Watches for nonce incremented events
	Policy Actions
	

	policy.create
	Creates a new transfer policy for token access control
	policy.getData
	Gets the data for a transfer policy, including its type and admin address
	policy.isAuthorized
	Checks if an address is authorized by a transfer policy
	policy.modifyBlacklist
	Modifies the blacklist for a blacklist-type transfer policy
	policy.modifyWhitelist
	Modifies the whitelist for a whitelist-type transfer policy
	policy.setAdmin
	Sets the admin for a transfer policy
	policy.watchAdminUpdated
	Watches for policy admin update events
	policy.watchBlacklistUpdated
	Watches for blacklist update events
	policy.watchCreate
	Watches for policy creation events
	policy.watchWhitelistUpdated
	Watches for whitelist update events
	Reward Actions
	

	reward.claim
	Claims accumulated rewards for the caller
	reward.getTotalPerSecond
	Gets the total reward per second rate for all active streams
	reward.getUserRewardInfo
	Gets reward information for a specific account
	reward.setRecipient
	Sets or changes the reward recipient for a token holder
	reward.start
	Starts a new reward stream that distributes tokens to opted-in holders
	reward.watchRewardRecipientSet
	Watches for reward recipient set events
	reward.watchRewardScheduled
	Watches for reward scheduled events
	Stablecoin DEX Actions
	

	dex.buy
	Buys a specific amount of tokens from the Stablecoin DEX orderbook
	dex.cancel
	Cancels an order from the orderbook
	dex.createPair
	Creates a new trading pair on the DEX
	dex.getBalance
	Gets a user's token balance on the Stablecoin DEX
	dex.getBuyQuote
	Gets the quote for buying a specific amount of tokens
	dex.getOrder
	Gets an order's details from the orderbook
	dex.getTickLevel
	Gets the price level information at a specific tick
	dex.getSellQuote
	Gets the quote for selling a specific amount of tokens
	dex.place
	Places a limit order on the orderbook
	dex.placeFlip
	Places a flip order that automatically flips when filled
	dex.sell
	Sells a specific amount of tokens from the Stablecoin DEX orderbook
	dex.watchFlipOrderPlaced
	Watches for flip order placed events
	dex.watchOrderCancelled
	Watches for order cancelled events
	dex.watchOrderFilled
	Watches for order filled events
	dex.watchOrderPlaced
	Watches for order placed events
	dex.withdraw
	Withdraws tokens from the DEX to the caller's wallet
	Token Actions
	

	token.approve
	Approves a spender to transfer TIP-20 tokens on behalf of the caller
	token.burn
	Burns TIP-20 tokens from the caller's balance
	token.burnBlocked
	Burns TIP-20 tokens from a blocked address
	token.changeTransferPolicy
	Changes the transfer policy for a TIP-20 token
	token.create
	Creates a new TIP-20 token and assigns the admin role to the calling account
	token.getAllowance
	Gets the amount of tokens that a spender is approved to transfer on behalf of an owner
	token.getBalance
	Gets the token balance of an address
	token.getMetadata
	Gets the metadata for a TIP-20 token, including name, symbol, decimals, currency, and total supply
	token.grantRoles
	Grants one or more roles to an address
	token.mint
	Mints new TIP-20 tokens to a recipient
	token.pause
	Pauses a TIP-20 token, preventing all transfers
	token.renounceRoles
	Renounces one or more roles from the caller's address
	token.revokeRoles
	Revokes one or more roles from an address
	token.setRoleAdmin
	Sets the admin role for another role
	token.setSupplyCap
	Sets the supply cap for a TIP-20 token
	token.transfer
	Transfers TIP-20 tokens from the caller to a recipient
	token.unpause
	Unpauses a TIP-20 token, allowing transfers to resume
	token.watchAdminRole
	Watches for role admin update events
	token.watchApprove
	Watches for token approval events
	token.watchBurn
	Watches for token burn events
	token.watchCreate
	Watches for new token creation events
	token.watchMint
	Watches for token mint events
	token.watchRole
	Watches for role membership update events
	token.watchTransfer
	Watches for token transfer events
	Transports
Transport
	Description
	withFeePayer
	Creates a transport that routes requests to a fee payer service when a feePayer is requested on an action
	fromP256
Previousshift←
burn
amm.burn
Burns liquidity tokens and receives the underlying token pair. Learn more about the Fee AMM
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { amountUserToken, amountValidatorToken, receipt } =  await client.amm.burnSync({    liquidity: parseUnits('10.5', 18),    to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',    userToken: '0x20c0000000000000000000000000000000000000',    validatorToken: '0x20c0000000000000000000000000000000000001',  }) console.log('Received user tokens:', amountUserToken)
Received user tokens: 5250000000000000000n
console.log('Received validator tokens:', amountValidatorToken)
Received validator tokens: 5250000000000000000n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync amm.burn action and wait for inclusion manually:
import { parseUnits } from 'viem'import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.amm.burn({  liquidity: parseUnits('10.5', 18),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  userToken: '0x20c0000000000000000000000000000000000000',  validatorToken: '0x20c0000000000000000000000000000000000001',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { amountUserToken, amountValidatorToken } }  = Actions.amm.burn.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of user tokens received */  amountUserToken: bigint  /** Amount of validator tokens received */  amountValidatorToken: bigint  /** Amount of liquidity tokens burned */  liquidity: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that initiated the burn */  sender: Address  /** Address that received the underlying tokens */  to: Address  /** Address of the user token */  userToken: Address  /** Address of the validator token */  validatorToken: Address}
Parameters
liquidity
            * Type: bigint
Amount of LP tokens to burn.
to
            * Type: Address
Address to send tokens to.
userToken
            * Type: Address | bigint
Address or ID of the user token.
validatorToken
            * Type: Address | bigint
Address or ID of the validator token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
Overview
Previousshift←
getLiquidityBalance
amm.getLiquidityBalance
Gets the liquidity balance for an address in a specific pool.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const balance = await client.amm.getLiquidityBalance({  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  userToken: '0x20c0000000000000000000000000000000000000',  validatorToken: '0x20c0000000000000000000000000000000000001',}) console.log('Liquidity balance:', balance)
Liquidity balance: 10500000000000000000n
Return Type
type ReturnType = bigint // Liquidity balance
Parameters
address
            * Type: Address
Address to check balance for.
poolId (optional)
            * Type: Hex
Pool ID.
userToken (optional)
            * Type: Address | bigint
User token.
validatorToken (optional)
            * Type: Address | bigint
Validator token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
burn
Previousshift←
amm.getPool
Gets the reserves for a liquidity pool.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const pool = await client.amm.getPool({  userToken: '0x20c0000000000000000000000000000000000000',  validatorToken: '0x20c0000000000000000000000000000000000001',}) console.log('User token reserve:', pool.reserveUserToken)
User token reserve: 1000000000000000000000n
console.log('Validator token reserve:', pool.reserveValidatorToken)
Validator token reserve: 1000000000000000000000n
console.log('Total supply:', pool.totalSupply)
Total supply: 1000000000000000000000n
Return Type
type ReturnType = {  /** Reserve of user token */  reserveUserToken: bigint  /** Reserve of validator token */  reserveValidatorToken: bigint  /** Total supply of LP tokens */  totalSupply: bigint}
Parameters
userToken
            * Type: Address | bigint
Address or ID of the user token.
validatorToken
            * Type: Address | bigint
Address or ID of the validator token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getLiquidityBalance
Previousshift←
amm.mint
Mints liquidity tokens by providing a token pair. Learn more about the Fee AMM
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { liquidity, receipt } = await client.amm.mintSync({  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  userTokenAddress: '0x20c0000000000000000000000000000000000000',  validatorTokenAddress: '0x20c0000000000000000000000000000000000001',  validatorTokenAmount: parseUnits('100', 6),}) console.log('Liquidity minted:', liquidity)
Liquidity minted: 100000000n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync amm.mint action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.amm.mint({  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  userTokenAddress: '0x20c0000000000000000000000000000000000000',  validatorTokenAddress: '0x20c0000000000000000000000000000000000001',  validatorTokenAmount: parseUnits('100', 6),})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { liquidity } }  = Actions.amm.mint.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of user tokens provided */  amountUserToken: bigint  /** Amount of validator tokens provided */  amountValidatorToken: bigint  /** Amount of liquidity tokens minted */  liquidity: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that initiated the mint */  sender: Address  /** Address of the user token */  userToken: Address  /** Address of the validator token */  validatorToken: Address}
Parameters
to
            * Type: Address
Address to mint the liquidity tokens to.
userTokenAddress
            * Type: Address | bigint
User token address.
validatorTokenAddress
            * Type: Address | bigint
Validator token address.
validatorTokenAmount
            * Type: bigint
Amount of validator tokens to provide.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
getPool
Previousshift←
amm.rebalanceSwap
Performs a rebalance swap between user and validator tokens. Learn more about the Fee AMM
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { amountIn, receipt } = await client.amm.rebalanceSwapSync({  amountOut: parseUnits('10.5', 6),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  userToken: '0x20c0000000000000000000000000000000000000',  validatorToken: '0x20c0000000000000000000000000000000000001',}) console.log('Amount in:', amountIn)
10605000n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync amm.rebalanceSwap action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.amm.rebalanceSwap({  amountOut: parseUnits('10.5', 6),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  userToken: '0x20c0000000000000000000000000000000000000',  validatorToken: '0x20c0000000000000000000000000000000000001',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { amountIn } }  = Actions.amm.rebalanceSwap.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of tokens required for the swap */  amountIn: bigint  /** Amount of output tokens received */  amountOut: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that initiated the swap */  swapper: Address  /** Address of the user token */  userToken: Address  /** Address of the validator token */  validatorToken: Address}
Parameters
amountOut
            * Type: bigint
Amount of user token to receive.
to
            * Type: Address
Address to send the user token to.
userToken
            * Type: Address | bigint
Address or ID of the user token.
validatorToken
            * Type: Address | bigint
Address or ID of the validator token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
mint
Previousshift←
amm.watchBurn
Watches for liquidity burn events on the Fee AMM.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.amm.watchBurn({  onBurn: (args, log) => {    console.log('User token amount:', args.amountUserToken)    console.log('Validator token amount:', args.amountValidatorToken)    console.log('Liquidity burned:', args.liquidity)    console.log('Sender:', args.sender)    console.log('Recipient:', args.to)    console.log('User token:', args.userToken)    console.log('Validator token:', args.validatorToken)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onBurn
            * Type: function
declare function onBurn(args: Args, log: Log): void type Args = {  /** Amount of user token received */  amountUserToken: bigint  /** Amount of validator token received */  amountValidatorToken: bigint  /** Amount of LP tokens burned */  liquidity: bigint  /** Address that removed liquidity */  sender: Address  /** Address that received the tokens */  to: Address  /** Address of the user token */  userToken: Address  /** Address of the validator token */  validatorToken: Address}
Callback to invoke when liquidity is removed.
args (optional)
            * Type: object
type Args = {  /** Filter by sender address */  sender?: Address | Address[] | null  /** Filter by user token address */  userToken?: Address | Address[] | null  /** Filter by validator token address */  validatorToken?: Address | Address[] | null}
Filter events by indexed parameters.
userToken (optional)
            * Type: Address | bigint
Address or ID of the user token to filter events.
validatorToken (optional)
            * Type: Address | bigint
Address or ID of the validator token to filter events.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Enable polling mode.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
rebalanceSwap
Previousshift←
amm.watchFeeSwap
Watches for fee swap events on the Fee AMM.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.amm.watchFeeSwap({  onFeeSwap: (args, log) => {    console.log('User token:', args.userToken)    console.log('Validator token:', args.validatorToken)    console.log('Amount in:', args.amountIn)    console.log('Amount out:', args.amountOut)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onFeeSwap
            * Type: function
declare function onFeeSwap(args: Args, log: Log): void type Args = {  /** Address of the user token */  userToken: Address  /** Address of the validator token */  validatorToken: Address  /** Amount of user token swapped in */  amountIn: bigint  /** Amount of validator token received */  amountOut: bigint}
Callback to invoke when a fee swap occurs.
userToken (optional)
            * Type: Address | bigint
Address or ID of the user token to filter events.
validatorToken (optional)
            * Type: Address | bigint
Address or ID of the validator token to filter events.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: (error: Error) => void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchBurn
Previousshift←
amm.watchRebalanceSwap
Watches for rebalance swap events on the Fee AMM.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.amm.watchRebalanceSwap({  onRebalanceSwap: (args, log) => {    console.log('Amount in:', args.amountIn)    console.log('Amount out:', args.amountOut)    console.log('Swapper:', args.swapper)    console.log('User token:', args.userToken)    console.log('Validator token:', args.validatorToken)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onRebalanceSwap
            * Type: function
declare function onRebalanceSwap(args: Args, log: Log): void type Args = {  /** Address of the user token */  userToken: Address  /** Address of the validator token */  validatorToken: Address  /** Address of the swapper */  swapper: Address  /** Amount of validator token swapped in */  amountIn: bigint  /** Amount of user token received */  amountOut: bigint}
Callback to invoke when a rebalance swap occurs.
userToken (optional)
            * Type: Address | bigint
Address or ID of the user token to filter events.
validatorToken (optional)
            * Type: Address | bigint
Address or ID of the validator token to filter events.
args (optional)
            * Type: object
type Args = {  /** Filter by user token address */  userToken?: Address | Address[] | null  /** Filter by validator token address */  validatorToken?: Address | Address[] | null  /** Filter by swapper address */  swapper?: Address | Address[] | null}
Filter parameters for the event.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchMint
Previousshift←
getUserToken
Nextshift
fee.getUserToken
Gets the user's default fee token preference. Learn more about fees
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { address, id } = await client.fee.getUserToken({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',}) console.log('Fee token address:', address)
Fee token address: 0x20c0000000000000000000000000000000000000
console.log('Fee token ID:', id)
Fee token ID: 0n
Return Type
type ReturnType = {  /** Address of the fee token */  address: Address  /** ID of the fee token */  id: bigint} | null
Returns null if the user has not set a default fee token.
Parameters
account
            * Type: Address
Account address.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
watchRebalanceSwap
Previousshift←
setUserToken
Nextshift
fee.setUserToken
Sets the user's default fee token preference. Learn more about fees
Usage
example.tsviem.config.ts
import { client } from './viem.config'
Cannot find module './viem.config' or its corresponding type declarations.
const { receipt } = await client.fee.setUserTokenSync({  token: '0x20c0000000000000000000000000000000000001',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync fee.setUserToken action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.fee.setUserToken({  token: '0x20c0000000000000000000000000000000000001',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.fee.setUserToken.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Address of the user */  user: Address  /** Address of the token set */  token: Address  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
token
            * Type: Address | bigint
Address or ID of the TIP-20 token to use for fees.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
getUserToken
Previousshift←
watchSetUserToken
Nextshift
fee.watchSetUserToken
Watches for user token set events on the Fee Manager.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.fee.watchSetUserToken({  onUserTokenSet: (args, log) => {    console.log('User:', args.user)    console.log('New fee token:', args.token)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onUserTokenSet
            * Type: function
declare function onUserTokenSet(args: Args, log: Log): void type Args = {  /** Address of the user */  user: Address  /** Address of the new fee token */  token: Address}
Callback to invoke when a user token is set.
args (optional)
            * Type: object
type Args = {  /** Address of the user to filter by */  user?: Address | Address[] | null  /** Address of the token to filter by */  token?: Address | Address[] | null}
Optional filters for the event.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
setUserToken
Previousshift←
getNonce
Nextshift
nonce.getNonce
Gets the nonce for an account and nonce key. This is useful for managing multiple nonce lanes for parallel transaction submission.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const nonce = await client.nonce.getNonce({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  nonceKey: 1n,}) console.log('Nonce:', nonce)
Nonce: 42n
Return Type
type ReturnType = bigint
The current nonce value for the given account and nonce key.
Parameters
account
            * Type: Address
Account address to get the nonce for.
nonceKey
            * Type: bigint
Nonce key (must be > 0, key 0 is reserved for protocol nonces).
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
watchSetUserToken
Previousshift←
getNonceKeyCount
Nextshift
nonce.getNonceKeyCount
Gets the number of active nonce keys for an account. Active nonce keys are keys that have been used at least once.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const count = await client.nonce.getNonceKeyCount({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',}) console.log('Active nonce keys:', count)
Active nonce keys: 3n
Return Type
type ReturnType = bigint
The number of active nonce keys for the account.
Parameters
account
            * Type: Address
Account address to get the active nonce key count for.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getNonce
Previousshift←
watchActiveKeyCountChanged
Nextshift
nonce.watchActiveKeyCountChanged
Watches for active key count changed events. This event is emitted when an account starts using a new nonce key for the first time.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.nonce.watchActiveKeyCountChanged({  onActiveKeyCountChanged: (args, log) => {    console.log('Account:', args.account)    console.log('New active key count:', args.newCount)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onActiveKeyCountChanged
            * Type: function
declare function onActiveKeyCountChanged(args: Args, log: Log): void type Args = {  /** Address of the account */  account: Address  /** New count of active nonce keys */  newCount: bigint}
Callback to invoke when the active key count changes.
args (optional)
            * Type: object
type Args = {  /** Address of the account to filter by */  account?: Address | Address[] | null}
Optional filters for the event.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
getNonceKeyCount
Previousshift←
watchNonceIncremented
Nextshift
nonce.watchNonceIncremented
Watches for nonce incremented events. This event is emitted whenever a transaction is executed using a specific nonce key.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.nonce.watchNonceIncremented({  onNonceIncremented: (args, log) => {    console.log('Account:', args.account)    console.log('Nonce key:', args.nonceKey)    console.log('New nonce:', args.newNonce)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onNonceIncremented
            * Type: function
declare function onNonceIncremented(args: Args, log: Log): void type Args = {  /** Address of the account */  account: Address  /** Nonce key that was incremented */  nonceKey: bigint  /** New nonce value after increment */  newNonce: bigint}
Callback to invoke when a nonce is incremented.
args (optional)
            * Type: object
type Args = {  /** Address of the account to filter by */  account?: Address | Address[] | null  /** Nonce key to filter by */  nonceKey?: bigint | bigint[] | null}
Optional filters for the event.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchActiveKeyCountChanged
Previousshift←
create
Nextshift
policy.create
Creates a new transfer policy for token access control. Learn more about transfer policies
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { policyId, policyType, receipt } = await client.policy.createSync({  admin: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  addresses: [    '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',  ],  type: 'whitelist',}) console.log('Policy ID:', policyId)
Policy ID: 1n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync policy.create action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.policy.create({  admin: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  addresses: [    '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',  ],  type: 'whitelist',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { policyId } }  = Actions.policy.create.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** ID of the created policy */  policyId: bigint  /** Type of the policy (0 = whitelist, 1 = blacklist) */  policyType: number  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that created the policy */  updater: Address}
Parameters
type
            * Type: 'whitelist' | 'blacklist'
Type of policy to create. A whitelist policy only allows listed addresses, while a blacklist policy allows all except listed addresses.
addresses (optional)
            * Type: Address[]
Optional array of addresses to initialize the policy with.
admin
            * Type: Address
Address of the policy admin.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
watchNonceIncremented
Previousshift←
getData
Nextshift
policy.getData
Gets the data for a transfer policy, including its type and admin address.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { admin, type } = await client.policy.getData({  policyId: 1n,}) console.log('Policy admin:', admin)
Policy admin: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb
console.log('Policy type:', type)
Policy type: whitelist
Return Type
type ReturnType = {  /** Address of the policy admin */  admin: Address  /** Type of policy */  type: PolicyType}
Parameters
policyId
            * Type: bigint
ID of the policy to query.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
create
Previousshift←
isAuthorized
Nextshift
policy.isAuthorized
Checks if an address is authorized by a transfer policy.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const isAuthorized = await client.policy.isAuthorized({  user: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  policyId: 1n,}) console.log('Is authorized:', isAuthorized)
Is authorized: true
Return Type
type ReturnType = boolean
Parameters
policyId
            * Type: bigint
Policy ID.
user
            * Type: Address
User address to check.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getData
Previousshift←
modifyBlacklist
Nextshift
policy.modifyBlacklist
Modifies the blacklist for a blacklist-type transfer policy. Requires policy admin role.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt } = await client.policy.modifyBlacklistSync({  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  policyId: 1n,  restricted: true,}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync policy.modifyBlacklist action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.policy.modifyBlacklist({  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  policyId: 1n,  restricted: true,})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.policy.modifyBlacklist.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Address that was added/removed from blacklist */  account: Address  /** ID of the policy */  policyId: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Whether the address is restricted */  restricted: boolean  /** Address that modified the blacklist */  updater: Address}
Parameters
address
            * Type: Address
Target account address to add or remove from the blacklist.
policyId
            * Type: bigint
ID of the blacklist policy to modify.
restricted
            * Type: boolean
Whether the address should be restricted (true) or unrestricted (false).
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
isAuthorized
Previousshift←
modifyWhitelist
Nextshift
policy.modifyWhitelist
Modifies the whitelist for a whitelist-type transfer policy. Requires policy admin role.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt } = await client.policy.modifyWhitelistSync({  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  allowed: true,  policyId: 1n,}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync policy.modifyWhitelist action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.policy.modifyWhitelist({  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  allowed: true,  policyId: 1n,})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.policy.modifyWhitelist.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Address that was added/removed from whitelist */  account: Address  /** Whether the address is allowed */  allowed: boolean  /** ID of the policy */  policyId: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that modified the whitelist */  updater: Address}
Parameters
address
            * Type: Address
Target account address to add or remove from the whitelist.
allowed
            * Type: boolean
Whether the address should be allowed (true) or disallowed (false).
policyId
            * Type: bigint
ID of the whitelist policy to modify.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
modifyBlacklist
Previousshift←
setAdmin
Nextshift
policy.setAdmin
Sets the admin for a transfer policy. Requires current policy admin role.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt } = await client.policy.setAdminSync({  admin: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  policyId: 1n,}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync policy.setAdmin action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.policy.setAdmin({  admin: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  policyId: 1n,})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.policy.setAdmin.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Address of the new admin */  admin: Address  /** ID of the policy */  policyId: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that updated the admin */  updater: Address}
Parameters
admin
            * Type: Address
Address to set as the new policy admin.
policyId
            * Type: bigint
ID of the policy to update.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
modifyWhitelist
Previousshift←
watchAdminUpdated
Nextshift
policy.watchAdminUpdated
Watches for policy admin update events on the TIP403 Registry.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.policy.watchAdminUpdated({  onAdminUpdated: (args, log) => {    console.log('Admin:', args.admin)    console.log('Policy ID:', args.policyId)    console.log('Updater:', args.updater)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onAdminUpdated
            * Type: function
declare function onAdminUpdated(args: Args, log: Log): void type Args = {  /** ID of the policy */  policyId: bigint  /** Address that updated the admin */  updater: Address  /** Address of the admin */  admin: Address}
Callback to invoke when a policy admin is updated.
args (optional)
            * Type: object
type Args = {  /** Filter by policy ID */  policyId?: bigint | bigint[] | null  /** Filter by updater address */  updater?: Address | Address[] | null  /** Filter by admin address */  admin?: Address | Address[] | null}
Optional filter arguments for the event.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
setAdmin
Previousshift←
watchBlacklistUpdated
Nextshift
policy.watchBlacklistUpdated
Watches for blacklist update events on the TIP403 Registry.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.policy.watchBlacklistUpdated({  onBlacklistUpdated: (args, log) => {    console.log('Account:', args.account)    console.log('Policy ID:', args.policyId)    console.log('Restricted:', args.restricted)    console.log('Updater:', args.updater)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onBlacklistUpdated
            * Type: function
declare function onBlacklistUpdated(args: Args, log: Log): void type Args = {  /** Address of the account */  account: Address  /** ID of the policy */  policyId: bigint  /** Whether the account is restricted */  restricted: boolean  /** Address that updated the blacklist */  updater: Address}
Callback to invoke when a blacklist is updated.
args (optional)
            * Type: object
type Args = {  /** Filter by policy ID */  policyId?: bigint | bigint[] | null  /** Filter by updater address */  updater?: Address | Address[] | null  /** Filter by account address */  account?: Address | Address[] | null}
Optional filter arguments to narrow the events being watched.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchAdminUpdated
Previousshift←
watchCreate
Nextshift
policy.watchCreate
Watches for policy creation events on the TIP403 Registry.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.policy.watchCreate({  onPolicyCreated: (args, log) => {    console.log('Policy ID:', args.policyId)    console.log('Type:', args.type)    console.log('Updater:', args.updater)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onPolicyCreated
            * Type: function
declare function onPolicyCreated(args: Args, log: Log): void type Args = {  /** ID of the created policy */  policyId: bigint  /** Type of policy */  type: PolicyType  /** Address that created the policy */  updater: Address}
Callback to invoke when a policy is created.
args (optional)
            * Type: object
type Args = {  /** Filter by policy ID */  policyId?: bigint | bigint[] | null  /** Filter by updater address */  updater?: Address | Address[] | null}
Optional filter arguments to narrow which events to watch.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchBlacklistUpdated
Previousshift←
watchWhitelistUpdated
Nextshift
policy.watchWhitelistUpdated
Watches for whitelist update events on the TIP403 Registry.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.policy.watchWhitelistUpdated({  onWhitelistUpdated: (args, log) => {    console.log('Account:', args.account)    console.log('Allowed:', args.allowed)    console.log('Policy ID:', args.policyId)    console.log('Updater:', args.updater)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onWhitelistUpdated
            * Type: function
declare function onWhitelistUpdated(args: Args, log: Log): void type Args = {  /** Address of the account */  account: Address  /** Whether the account is allowed */  allowed: boolean  /** ID of the policy */  policyId: bigint  /** Address that updated the whitelist */  updater: Address}
Callback to invoke when a whitelist is updated.
args (optional)
            * Type: object
type Args = {  /** Filter by policy ID */  policyId?: bigint | bigint[] | null  /** Filter by updater address */  updater?: Address | Address[] | null  /** Filter by account address */  account?: Address | Address[] | null}
Optional filter arguments for the watch.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchCreate
Previousshift←
fund
Nextshift
faucet.fund
Funds an account with an initial amount of tokens on Tempo's testnet.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const hashes = await client.faucet.fund({  account: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',}) console.log('Transaction hashes:', hashes)
Transaction hashes: ['0x...', '0x...']
Synchronous Usage
Use fundSync to wait for the transactions to be included on a block before returning:
import { client } from './viem.config' const receipts = await client.faucet.fundSync({  account: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',}) console.log('Receipts:', receipts)
Receipts: [{ blockNumber: 123n, ... }, { blockNumber: 123n, ... }]
Return Type
fund
type ReturnType = readonly Hash[]
Returns an array of transaction hashes for the funding transactions.
fundSync
type ReturnType = readonly TransactionReceipt[]
Returns an array of transaction receipts after the transactions are confirmed.
Parameters
account
            * Type: Account | Address
Account to fund with testnet tokens.
timeout (fundSync only)
            * Type: number
            * Default: 10000
Timeout in milliseconds to wait for transaction confirmation.
watchWhitelistUpdated
Previousshift←
claim
Nextshift
reward.claim
Claims accumulated rewards for the caller.
Usage
Use the reward.claim action on the Viem client to claim rewards that have accumulated for your address.
example.tsviem.config.ts
import { client, token } from './viem.config' const { receipt } = await client.reward.claimSync({  token,}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync reward.claim action and wait for inclusion manually:
import { client, token } from './viem.config' const hash = await client.reward.claim({  token,})const receipt = await client.waitForTransactionReceipt({ hash })
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
token
            * Type: Address
Address of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
fund
Previousshift←
getTotalPerSecond
Nextshift
reward.getTotalPerSecond
Gets the total reward per second rate for all active streams.
Usage
example.tsviem.config.ts
import { client, token } from './viem.config' const rate = await client.reward.getTotalPerSecond({  token,}) console.log('Total rate per second:', rate)
Total rate per second: 385802469135802469135n
Return Type
type ReturnValue = bigint
Returns the current aggregate per-second emission rate scaled by ACC_PRECISION (1e18). This value represents the sum of all active reward streams' emission rates.
The rate decreases when streams end (via finalizeStreams) or are canceled.
Parameters
token
            * Type: Address
Address of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
claim
Previousshift←
getUserRewardInfo
Nextshift
reward.getUserRewardInfo
Gets reward information for a specific account.
Usage
example.tsviem.config.ts
import { client, token } from './viem.config' const { rewardBalance, rewardPerToken, rewardRecipient } =  await client.reward.getUserRewardInfo({    account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',    token,  }) console.log('Reward recipient:', rewardRecipient)
Reward recipient: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb
console.log('Reward balance:', rewardBalance)
Reward balance: 1000000000000000000n
console.log('Reward per token:', rewardPerToken)
Reward per token: 385802469135802469135n
Return Type
type ReturnType = {  /** Accumulated reward balance claimable by the account */  rewardBalance: bigint  /** Reward per token checkpoint for the account */  rewardPerToken: bigint  /** Current reward recipient address (zero address if opted out) */  rewardRecipient: Address}
Parameters
account
            * Type: Address
Address of the account to get reward info for.
token
            * Type: Address
Address of the TIP-20 token.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getTotalPerSecond
Previousshift←
setRecipient
Nextshift
reward.setRecipient
Sets or changes the reward recipient for a token holder.
Usage
Use the reward.setRecipient action on the Viem client to opt in to rewards or change your reward recipient.
example.tsviem.config.ts
import { client, token } from './viem.config' const { holder, receipt, recipient } = await client.reward.setRecipientSync({  recipient: client.account.address, // receive rewards directly  token,}) console.log('Holder:', holder)
Holder: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
console.log('Recipient:', recipient)
Recipient: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Opt Out of Rewards
Set recipient to the zero address to opt out from rewards distribution:
import { client, token } from './viem.config' await client.reward.setRecipientSync({  recipient: '0x0000000000000000000000000000000000000000',  token,})
Delegate Rewards
Set recipient to another address to delegate your rewards to them:
import { client, token } from './viem.config' await client.reward.setRecipientSync({  recipient: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',  token,})
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync reward.setRecipient action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client, token } from './viem.config' const hash = await client.reward.setRecipient({  recipient: client.account.address,  token,})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { holder, recipient } }  = Actions.reward.setRecipient.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Token holder address who set their reward recipient */  holder: Address  /** Transaction receipt */  receipt: TransactionReceipt  /** Reward recipient address (zero address indicates opt-out) */  recipient: Address}
Rewards are automatically distributed to the current recipient before changing. This happens during any balance-changing operation (transfers, mints, burns).
Parameters
recipient
            * Type: Address
The reward recipient address. Use zero address to opt out of rewards.
token
            * Type: Address
The TIP20 token address.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
getUserRewardInfo
Previousshift←
start
Nextshift
reward.start
Starts a new reward stream that distributes tokens to opted-in holders.
Usage
Use the reward.start action on the Viem client to start a reward distribution stream.
example.tsviem.config.ts
import { parseEther } from 'viem'import { client, token } from './viem.config' const { amount, durationSeconds, funder, id, receipt } =  await client.reward.startSync({    amount: parseEther('1000'),    token,  }) console.log('Stream ID:', id)
Stream ID: 1n
console.log('Amount:', amount)
Amount: 1000000000000000000000n
console.log('Duration:', durationSeconds, 'seconds')
Duration: 2592000 seconds
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync reward.start action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseEther } from 'viem'import { client, token } from './viem.config' const hash = await client.reward.start({  amount: parseEther('1000'),  token,})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { id, funder, amount, durationSeconds } }  = Actions.reward.start.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Total amount allocated to the stream */  amount: bigint  /** Duration of the stream in seconds (0 for immediate distributions) */  durationSeconds: number  /** Address that funded the stream */  funder: Address  /** Unique stream ID (0 for immediate distributions; all that is currently supported) */  id: bigint  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
The amount of tokens to distribute. Must be greater than 0.
token
            * Type: Address
Address of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
setRecipient
Previousshift←
reward.watchRewardRecipientSet
Watches for reward recipient set events when token holders change their reward recipient.
Usage
example.tsviem.config.ts
import { client, token } from './viem.config' const unwatch = client.reward.watchRewardRecipientSet({  onRewardRecipientSet: (args, log) => {    console.log('Holder:', args.holder)    console.log('Recipient:', args.recipient)  },  token,}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onRewardRecipientSet
            * Type:
declare function onRewardRecipientSet(args: Args, log: Log): void type Args = {  /** Token holder address who set their reward recipient */  holder: Address  /** New reward recipient address (zero address indicates opt-out) */  recipient: Address}
Callback to invoke when a reward recipient is set.
token
            * Type: Address
Address of the TIP-20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter events by holder address */  holder?: Address  /** Filter events by recipient address */  recipient?: Address}
Optional filters for the event.
start
Previousshift←
reward.watchRewardScheduled
Watches for reward scheduled events when new reward streams are started.
Usage
example.tsviem.config.ts
import { client, token } from './viem.config' const unwatch = client.reward.watchRewardScheduled({  onRewardScheduled: (args, log) => {    console.log('Stream ID:', args.id)    console.log('Funder:', args.funder)    console.log('Amount:', args.amount)    console.log('Duration:', args.durationSeconds, 'seconds')  },  token,}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onRewardScheduled
            * Type: function
declare function onRewardScheduled(args: Args, log: Log): void type Args = {  /** Total amount allocated to the stream */  amount: bigint  /** Duration of the stream in seconds (0 for immediate distributions) */  durationSeconds: number  /** Address that funded the stream */  funder: Address  /** Unique stream ID (0 for immediate distributions) */  id: bigint}
Callback to invoke when a reward stream is scheduled.
token
            * Type: Address
Address of the TIP-20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter by funder address */  funder?: Address | Address[]  /** Filter by stream ID */  id?: bigint | bigint[]}
Optional filters to narrow down events by funder address or stream ID.
watchRewardRecipientSet
Previousshift←
dex.buy
Buys a specific amount of tokens from the Stablecoin DEX orderbook.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.dex.buySync({  amountOut: parseUnits('100', 6),  maxAmountIn: parseUnits('105', 6),  tokenIn: '0x20c0000000000000000000000000000000000001',  tokenOut: '0x20c0000000000000000000000000000000000002',}) console.log('Transaction hash:', receipt.transactionHash)
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.buy action and wait for inclusion manually:
import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.dex.buy({  amountOut: parseUnits('100', 6),  maxAmountIn: parseUnits('105', 6),  tokenIn: '0x20c0000000000000000000000000000000000001',  tokenOut: '0x20c0000000000000000000000000000000000002',})const receipt = await client.waitForTransactionReceipt({ hash })
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amountOut
            * Type: bigint
Amount of tokenOut to buy.
maxAmountIn
            * Type: bigint
Maximum amount of tokenIn to spend.
tokenIn
            * Type: Address
Address of the token to spend.
tokenOut
            * Type: Address
Address of the token to buy.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
watchRewardScheduled
Previousshift←
dex.cancel
Cancels an order from the Stablecoin DEX orderbook.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { orderId, receipt } = await client.dex.cancelSync({  orderId: 123n,}) console.log('Cancelled order ID:', orderId)
Cancelled order ID: 123n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.cancel action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.dex.cancel({  orderId: 123n,})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { orderId } }  = Actions.dex.cancel.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** ID of the cancelled order */  orderId: bigint  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
orderId
            * Type: bigint
ID of the order to cancel.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
buy
Previousshift←
dex.createPair
Creates a new trading pair on the Stablecoin DEX.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { key, base, quote, receipt } = await client.dex.createPairSync({  base: '0x20c0000000000000000000000000000000000001',}) console.log('Pair key:', key)console.log('Base token:', base)console.log('Quote token:', quote)
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.createPair action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.dex.createPair({  base: '0x20c0000000000000000000000000000000000001',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { base, quote } }  = Actions.dex.createPair.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Key of the trading pair */  key: Hex  /** Address of the base token */  base: Address  /** Address of the quote token */  quote: Address  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
base
            * Type: Address
Address of the base token for the pair. The quote token is determined by the base token's quote token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
cancel
Previousshift←
dex.getBalance
Gets a user's token balance on the Stablecoin DEX.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const balance = await client.dex.getBalance({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000001',}) console.log('DEX balance:', balance)
DEX balance: 1000000000n
Return Type
type ReturnType = bigint
Parameters
account
            * Type: Address
Address of the account.
token
            * Type: Address
Address of the token.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
createPair
Previousshift←
dex.getBuyQuote
Gets the quote for buying a specific amount of tokens.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const amountIn = await client.dex.getBuyQuote({  amountOut: parseUnits('100', 6),  tokenIn: '0x20c0000000000000000000000000000000000001',  tokenOut: '0x20c0000000000000000000000000000000000002',}) console.log('Amount needed:', amountIn)
Amount needed: 100300000n
Return Type
type ReturnType = bigint
Returns the amount of tokenIn needed to buy the specified amountOut of tokenOut.
Parameters
amountOut
            * Type: bigint
Amount of tokenOut to buy.
tokenIn
            * Type: Address
Address of the token to spend.
tokenOut
            * Type: Address
Address of the token to buy.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getBalance
Previousshift←
dex.getOrder
Gets an order's details from the Stablecoin DEX orderbook.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const order = await client.dex.getOrder({  orderId: 123n,}) console.log('Order details:', order)
Order details: { amount: 100000000n, maker: '0x...', isBid: true, ... }
Return Type
type ReturnType = {  /** Original order amount */  amount: bigint  /** Orderbook key (identifies the trading pair) */  bookKey: Hex  /** Tick to flip to when fully filled (for flip orders). For bid flips: must be > tick. For ask flips: must be < tick */  flipTick: number  /** Whether this is a bid (true) or ask (false) order */  isBid: boolean  /** Whether this is a flip order */  isFlip: boolean  /** Address of the user who placed this order */  maker: Address  /** Next order ID in the doubly linked list (0 if tail) */  next: bigint  /** The order ID */  orderId: bigint  /** Previous order ID in the doubly linked list (0 if head) */  prev: bigint  /** Remaining amount to be filled */  remaining: bigint  /** Price tick */  tick: number}
Returns the complete order details including the maker's address, order amounts, price tick, linked list pointers, and flip order information.
Parameters
orderId
            * Type: bigint
Order ID to query.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getBuyQuote
Previousshift←
dex.getTickLevel
Gets the tick level information at a specific tick on the Stablecoin DEX orderbook.
Usage
example.tsviem.config.ts
import { client } from './viem.config'import { Tick } from 'tempo.ts/viem' const level = await client.dex.getTickLevel({  base: '0x20c0000000000000000000000000000000000001',  tick: Tick.fromPrice('1.001'),  isBid: true,}) console.log('Tick level:', level)
Tick level: { head: 1n, tail: 5n, totalLiquidity: 1000000000n }
Return Type
type ReturnType = {  /** Order ID of the first order at this tick (0 if empty) */  head: bigint  /** Order ID of the last order at this tick (0 if empty) */  tail: bigint  /** Total liquidity available at this tick level */  totalLiquidity: bigint}
Returns the price level information including the order IDs for the head and tail of the FIFO queue at this price level, and the total liquidity available.
Parameters
base
            * Type: Address
Address of the base token.
isBid
            * Type: boolean
Whether to query the bid side (true) or ask side (false).
tick
            * Type: number
Price tick to query. Can be created using Tick.fromPrice().
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getOrder
Previousshift←
dex.getSellQuote
Gets the quote for selling a specific amount of tokens.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const amountOut = await client.dex.getSellQuote({  amountIn: parseUnits('100', 6),  tokenIn: '0x20c0000000000000000000000000000000000001',  tokenOut: '0x20c0000000000000000000000000000000000002',}) console.log('Amount received:', amountOut)
Amount received: 99700000n
Return Type
type ReturnType = bigint
Returns the amount of tokenOut received for selling the specified amountIn of tokenIn.
Parameters
amountIn
            * Type: bigint
Amount of tokenIn to sell.
tokenIn
            * Type: Address
Address of the token to sell.
tokenOut
            * Type: Address
Address of the token to receive.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getTickLevel
Previousshift←
dex.place
Places a limit order on the Stablecoin DEX orderbook.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { Tick } from 'tempo.ts/viem'import { client } from './viem.config' const { orderId, receipt } = await client.dex.placeSync({  amount: parseUnits('100', 6),  tick: Tick.fromPrice('0.99'),  token: '0x20c0000000000000000000000000000000000001',  type: 'buy',}) console.log('Order ID:', orderId)
Order ID: 123n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.place action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { Tick } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.dex.place({  amount: parseUnits('100', 6),  tick: Tick.fromPrice('0.99'),  token: '0x20c0000000000000000000000000000000000001',  type: 'buy',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { orderId } }  = Actions.dex.place.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** ID of the placed order */  orderId: bigint  /** Address of the order maker */  maker: Address  /** Address of the base token */  token: Address  /** Amount of tokens in the order */  amount: bigint  /** Whether this is a buy order */  isBid: boolean  /** Price tick for the order */  tick: number  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to place in the order.
tick
            * Type: number
Price tick for the order. Use Tick.fromPrice() to convert from a price string.
token
            * Type: Address
Address of the base token.
type
            * Type: OrderType
Order type - 'buy' to buy the token, 'sell' to sell it.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
getSellQuote
Previousshift←
dex.placeFlip
Places a flip order that automatically flips to the opposite side when filled.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { Tick } from 'tempo.ts/viem'import { client } from './viem.config' const { orderId, receipt } = await client.dex.placeFlipSync({  amount: parseUnits('100', 6),  flipTick: Tick.fromPrice('1.01'),  tick: Tick.fromPrice('0.99'),  token: '0x20c0000000000000000000000000000000000001',  type: 'buy',}) console.log('Flip order ID:', orderId)
Flip order ID: 456n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.placeFlip action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { Tick } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.dex.placeFlip({  amount: parseUnits('100', 6),  flipTick: Tick.fromPrice('1.01'),  tick: Tick.fromPrice('0.99'),  token: '0x20c0000000000000000000000000000000000001',  type: 'buy',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { orderId } }  = Actions.dex.placeFlip.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** ID of the placed flip order */  orderId: bigint  /** Address of the order maker */  maker: Address  /** Address of the base token */  token: Address  /** Amount of tokens in the order */  amount: bigint  /** Whether this is a buy order */  isBid: boolean  /** Price tick for the order */  tick: number  /** Target tick to flip to when order is filled */  flipTick: number  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to place in the order.
flipTick
            * Type: number
Target tick to flip to when order is filled. Must be greater than tick for buy orders, less than tick for sell orders.
tick
            * Type: number
Price tick for the order. Use Tick.fromPrice() to convert from a price string.
token
            * Type: Address
Address of the base token.
type
            * Type: 'buy' | 'sell'
Order type - 'buy' to buy the token, 'sell' to sell it.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
place
Previousshift←
dex.sell
Sells a specific amount of tokens on the Stablecoin DEX orderbook.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.dex.sellSync({  amountIn: parseUnits('100', 6),  minAmountOut: parseUnits('95', 6),  tokenIn: '0x20c0000000000000000000000000000000000001',  tokenOut: '0x20c0000000000000000000000000000000000002',}) console.log('Transaction hash:', receipt.transactionHash)
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.sell action and wait for inclusion manually:
import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.dex.sell({  amountIn: parseUnits('100', 6),  minAmountOut: parseUnits('95', 6),  tokenIn: '0x20c0000000000000000000000000000000000001',  tokenOut: '0x20c0000000000000000000000000000000000002',})const receipt = await client.waitForTransactionReceipt({ hash })
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amountIn
            * Type: bigint
Amount of tokenIn to sell.
minAmountOut
            * Type: bigint
Minimum amount of tokenOut to receive.
tokenIn
            * Type: Address
Address of the token to sell.
tokenOut
            * Type: Address
Address of the token to receive.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
placeFlip
Previousshift←
dex.watchFlipOrderPlaced
Watches for flip order placed events on the Stablecoin DEX.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.dex.watchFlipOrderPlaced({  onFlipOrderPlaced: (args, log) => {    console.log('Flip order placed:', args.orderId)    console.log('Maker:', args.maker)    console.log('Amount:', args.amount)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onFlipOrderPlaced
            * Type: function
declare function onFlipOrderPlaced(args: Args, log: Log): void type Args = {  /** ID of the placed order */  orderId: bigint  /** Address that placed the order */  maker: Address  /** Address of the base token */  token: Address  /** Amount of tokens in the order */  amount: bigint  /** Whether this is a buy order */  isBid: boolean  /** Price tick for the order */  tick: number  /** Target tick to flip to when filled */  flipTick: number}
Callback to invoke when a flip order is placed.
args (optional)
            * Type: object
type Args = {  /** Filter by order ID */  orderId?: bigint | bigint[] | null  /** Filter by maker address */  maker?: Address | Address[] | null  /** Filter by token address */  token?: Address | Address[] | null}
Filter parameters for the event subscription.
maker (optional)
            * Type: Address
Address of the maker to filter events.
token (optional)
            * Type: Address
Address of the token to filter events.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: (error: Error) => void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
sell
Previousshift←
dex.watchOrderCancelled
Watches for order cancelled events on the Stablecoin DEX.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.dex.watchOrderCancelled({  onOrderCancelled: (args, log) => {    console.log('Order cancelled:', args.orderId)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onOrderCancelled
            * Type: function
declare function onOrderCancelled(args: Args, log: Log): void type Args = {  /** ID of the cancelled order */  orderId: bigint}
Callback to invoke when an order is cancelled.
args (optional)
            * Type: object
type Args = {  /** Order ID to filter events */  orderId?: bigint | bigint[] | null}
Filter options for the event.
orderId (optional)
            * Type: bigint
Order ID to filter events.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Enable polling mode.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchFlipOrderPlaced
Previousshift←
dex.watchOrderFilled
Watches for order filled events on the Stablecoin DEX.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.dex.watchOrderFilled({  onOrderFilled: (args, log) => {    console.log('Order filled:', args.orderId)    console.log('Maker:', args.maker)    console.log('Amount filled:', args.amountFilled)    console.log('Partial fill:', args.partialFill)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onOrderFilled
            * Type: function
declare function onOrderFilled(args: Args, log: Log): void type Args = {  /** ID of the filled order */  orderId: bigint  /** Address that placed the order */  maker: Address  /** Amount of tokens filled */  amountFilled: bigint  /** Whether the order was partially filled */  partialFill: boolean}
Callback to invoke when an order is filled.
maker (optional)
            * Type: Address
Address of the maker to filter events.
orderId (optional)
            * Type: bigint
Order ID to filter events.
taker (optional)
            * Type: Address
Address of the taker to filter events.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchOrderCancelled
Previousshift←
dex.watchOrderPlaced
Watches for order placed events on the Stablecoin DEX.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.dex.watchOrderPlaced({  onOrderPlaced: (args, log) => {    console.log('Order placed:', args.orderId)    console.log('Maker:', args.maker)    console.log('Token:', args.token)    console.log('Amount:', args.amount)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onOrderPlaced
            * Type: function
declare function onOrderPlaced(args: Args, log: Log): void type Args = {  /** ID of the placed order */  orderId: bigint  /** Address that placed the order */  maker: Address  /** Address of the base token */  token: Address  /** Amount of tokens in the order */  amount: bigint  /** Whether this is a buy order */  isBid: boolean  /** Price tick for the order */  tick: number}
Callback to invoke when an order is placed.
args (optional)
            * Type: object
type Args = {  /** Filter by order ID */  orderId?: bigint | bigint[] | null  /** Filter by maker address */  maker?: Address | Address[] | null  /** Filter by token address */  token?: Address | Address[] | null}
Filter parameters for the watch subscription.
maker (optional)
            * Type: Address
Address of the maker to filter events.
token (optional)
            * Type: Address
Address of the token to filter events.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: (error: Error) => void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Enable polling mode.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchOrderFilled
Previousshift←
dex.withdraw
Withdraws tokens from the Stablecoin DEX to your wallet.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.dex.withdrawSync({  amount: parseUnits('100', 6),  token: '0x20c0000000000000000000000000000000000001',}) console.log('Transaction hash:', receipt.transactionHash)
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync dex.withdraw action and wait for inclusion manually:
import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.dex.withdraw({  amount: parseUnits('100', 6),  token: '0x20c0000000000000000000000000000000000001',})const receipt = await client.waitForTransactionReceipt({ hash })
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to withdraw.
token
            * Type: Address
Address of the token to withdraw.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
watchOrderPlaced
Previousshift←
token.approve
Approves a spender to transfer TIP-20 tokens on behalf of the caller.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.token.approveSync({  amount: parseUnits('10.5', 6),  spender: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.approve action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.approve({  amount: parseUnits('10.5', 6),  spender: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.approve.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Address of the token owner */  owner: Address  /** Address of the spender */  spender: Address  /** Amount of tokens approved */  amount: bigint  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to approve.
spender
            * Type: Address
Address of the spender.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
withdraw
Previousshift←
token.burn
Burns TIP-20 tokens from the caller's balance.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.token.burnSync({  amount: parseUnits('10.5', 6),  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.burn action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.burn({  amount: parseUnits('10.5', 6),  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.burn.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of tokens burned */  amount: bigint  /** Address tokens were burned from */  from: Address  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to burn.
memo (optional)
            * Type: Hex
Memo to include in the transfer.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
approve
Previousshift←
token.burnBlocked
Burns TIP-20 tokens from a blocked address. Requires the BURN_BLOCKED role. Learn more about token roles
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.token.burnBlockedSync({  amount: parseUnits('10.5', 6),  from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.burnBlocked action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.burnBlocked({  amount: parseUnits('10.5', 6),  from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.burnBlocked.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of tokens burned */  amount: bigint  /** Address tokens were burned from */  from: Address  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to burn.
from
            * Type: Address
Address to burn tokens from.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
burn
Previousshift←
token.burnBlocked
Burns TIP-20 tokens from a blocked address. Requires the BURN_BLOCKED role. Learn more about token roles
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.token.burnBlockedSync({  amount: parseUnits('10.5', 6),  from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.burnBlocked action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.burnBlocked({  amount: parseUnits('10.5', 6),  from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.burnBlocked.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of tokens burned */  amount: bigint  /** Address tokens were burned from */  from: Address  /** Transaction receipt */  receipt: TransactionReceipt}
Parameters
amount
            * Type: bigint
Amount of tokens to burn.
from
            * Type: Address
Address to burn tokens from.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
burn
Previousshift←
token.changeTransferPolicy
Changes the transfer policy for a TIP-20 token. Requires the default admin role. Learn more about transfer policies
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt } = await client.token.changeTransferPolicySync({  policyId: 1n,  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.changeTransferPolicy action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.changeTransferPolicy({  policyId: 1n,  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.changeTransferPolicy.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** ID of the new transfer policy */  newPolicyId: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that updated the policy */  updater: Address}
Parameters
policyId
            * Type: bigint
New transfer policy ID.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
burnBlocked
Previousshift←
token.create
Creates a new TIP-20 token, and assigns the admin role to the calling account. Learn more
Usage
Use the token.create action on the Viem client to create and deploy a new TIP-20 token.
example.tsviem.config.ts
import { client } from './viem.config' const { admin, receipt, token, tokenId } = await client.token.createSync({  admin: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  currency: 'USD',  name: 'My Company USD',  symbol: 'CUSD',}) console.log('Address:', token)
Address: 0x20c0000000000000000000000000000000000004
console.log('Admin:', admin)
Admin: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb
console.log('ID:', tokenId)
ID: 4n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.create action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.create({  admin: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  currency: 'USD',  name: 'My Company USD',  symbol: 'CUSD',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args: { token, tokenId } }  = Actions.token.create.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Address of the admin that was granted the admin role */  admin: Address  /** Currency code of the token */  currency: string  /** Name of the token */  name: string  /** Address of the quote token */  quoteToken: Address  /** Transaction receipt */  receipt: TransactionReceipt  /** Symbol of the token */  symbol: string  /** Address of the deployed TIP-20 token */  token: Address  /** ID of the deployed TIP-20 token */  tokenId: bigint}
Parameters
admin
            * Type: Address
Admin address for the token.
currency
            * Type: string
Currency code for the token.
name
            * Type: string
Name of the token.
quoteToken (optional)
            * Type: Address | bigint
Quote token address or ID.
symbol
            * Type: string
Symbol of the token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
changeTransferPolicy
Previousshift←
token.getAllowance
Gets the amount of tokens that a spender is approved to transfer on behalf of an owner.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const allowance = await client.token.getAllowance({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  spender: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Allowance:', allowance)
Allowance: 10500000n
Return Type
type ReturnType = bigint // Allowance amount
Parameters
account
            * Type: Address
Account address.
spender
            * Type: Address
Address of the spender.
token
            * Type: Address | bigint
Address or ID of the TIP20 token.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
create
Previousshift←
token.getBalance
Gets the token balance of an address.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const balance = await client.token.getBalance({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Balance:', balance)
Balance: 10500000n
Return Type
type ReturnType = bigint // Balance amount
Parameters
account
            * Type: Address
Account address.
token
            * Type: Address | bigint
Address or ID of the TIP20 token.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getAllowance
Previousshift←
token.getMetadata
Gets the metadata for a TIP-20 token, including name, symbol, decimals, currency, and total supply.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const metadata = await client.token.getMetadata({  token: '0x20c0000000000000000000000000000000000000',}) console.log('Currency:', metadata.currency)
Currency: USD
console.log('Decimals:', metadata.decimals)
Decimals: 18
console.log('Name:', metadata.name)
Name: United States Dollar
console.log('Symbol:', metadata.symbol)
Symbol: USD
console.log('Total Supply:', metadata.totalSupply)
Total Supply: 1000000000000000000000n
Return Type
type ReturnType = {  currency: string  decimals: number  name: string  paused?: boolean  quoteToken?: Address  supplyCap?: bigint  symbol: string  totalSupply: bigint  transferPolicyId?: bigint}
Parameters
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
getBalance
Previousshift←
token.grantRoles
Grants a role to an address. Requires the admin role for the role being granted. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt, value } = await client.token.grantRolesSync({  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',}) console.log('Role granted:', value[0].hasRole)
Role granted: true
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.grantRoles action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.grantRoles({  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',})const receipt = await client.waitForTransactionReceipt({ hash }) const events = Actions.token.grantRoles.extractEvents(receipt.logs)
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt  /** Array of role membership update events */  value: readonly {    /** Role identifier */    role: Hex    /** Address that received the role */    account: Address    /** Address that granted the role */    sender: Address    /** Whether the role was granted (true) or revoked (false) */    hasRole: boolean  }[]}
Parameters
role
            * Type: "defaultAdmin" | "pause" | "unpause" | "issuer" | "burnBlocked"
Role to grant.
token
            * Type: Address | bigint
Address or ID of the TIP20 token.
to
            * Type: Address
Address to grant the role to.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
getMetadata
Previousshift←
token.hasRole
Checks if an address has a specific role for a TIP-20 token. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const hasRole = await client.token.hasRole({  account: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  role: 'issuer',  token: '0x20c0000000000000000000000000000000000011',}) console.log('Has issuer role:', hasRole)
Has issuer role: true
Return Type
type ReturnType = boolean // Whether the account has the role
Parameters
account
            * Type: Address
Address to check for the role.
role
            * Type: "defaultAdmin" | "pause" | "unpause" | "issuer" | "burnBlocked"
Role to check.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
blockNumber (optional)
            * Type: bigint
Block number to read the state from.
blockOverrides (optional)
            * Type: BlockOverrides
Block overrides to apply to the state.
blockTag (optional)
            * Type: BlockTag
Block tag to read the state from.
stateOverride (optional)
            * Type: StateOverride
State override to apply.
grantRoles
Previousshift←
token.mint
Mints new TIP-20 tokens to a recipient. Requires the ISSUER role. Learn more about roles
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.token.mintSync({  amount: parseUnits('10.5', 6),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.mint action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.mint({  amount: parseUnits('10.5', 6),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.mint.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of tokens minted */  amount: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address tokens were minted to */  to: Address}
Parameters
amount
            * Type: bigint
Amount of tokens to mint.
memo (optional)
            * Type: Hex
Memo to include in the mint.
to
            * Type: Address
Address to mint tokens to.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
hasRole
Previousshift←
token.pause
Pauses a TIP-20 token, preventing all transfers. Requires the PAUSE role. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { isPaused, receipt } = await client.token.pauseSync({  token: '0x20c0000000000000000000000000000000000000',}) console.log('Is paused:', isPaused)
Is paused: true
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.pause action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.pause({  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.pause.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Whether the token is paused */  isPaused: boolean  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that paused the token */  updater: Address}
Parameters
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
mint
Previousshift←
token.renounceRoles
Renounces one or more roles from the caller's address. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt, value } = await client.token.renounceRolesSync({  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Roles renounced:', value.length)
Roles renounced: 1
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.renounceRoles action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.renounceRoles({  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const events = Actions.token.renounceRoles.extractEvents(receipt.logs)
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt  /** Array of role membership update events */  value: readonly {    /** Address that renounced the role */    account: Address    /** Whether the role was granted (true) or revoked (false) */    hasRole: boolean    /** Role identifier */    role: Hex    /** Address that initiated the change */    sender: Address  }[]}
Parameters
role
            * Type: "defaultAdmin" | "pause" | "unpause" | "issuer" | "burnBlocked"
Role to renounce.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
pause
Previousshift←
token.revokeRoles
Revokes one or more roles from an address. Requires the admin role for each role being revoked. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt, value } = await client.token.revokeRolesSync({  from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Roles revoked:', value.length)
Roles revoked: 1
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.revokeRoles action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.revokeRoles({  from: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const events = Actions.token.revokeRoles.extractEvents(receipt.logs)
Return Type
type ReturnType = {  /** Transaction receipt */  receipt: TransactionReceipt  /** Array of role membership update events */  value: readonly {    /** Role identifier */    role: Hex    /** Address that had role revoked */    account: Address    /** Address that revoked the role */    sender: Address    /** Whether the role was granted (true) or revoked (false) */    hasRole: boolean  }[]}
Parameters
from
            * Type: Address
Address to revoke the role from.
role
            * Type: "defaultAdmin" | "pause" | "unpause" | "issuer" | "burnBlocked"
Role to revoke.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
renounceRoles
Previousshift←
token.setRoleAdmin
Sets the admin role for another role. Requires the current admin role for the target role. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { receipt } = await client.token.setRoleAdminSync({  adminRole: 'defaultAdmin',  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.setRoleAdmin action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.setRoleAdmin({  adminRole: 'defaultAdmin',  role: 'issuer',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.setRoleAdmin.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** New admin role identifier */  newAdminRole: Hex  /** Transaction receipt */  receipt: TransactionReceipt  /** Role identifier that had its admin updated */  role: Hex  /** Address that updated the role admin */  sender: Address}
Parameters
adminRole
            * Type: "defaultAdmin" | "pause" | "unpause" | "issuer" | "burnBlocked"
New admin role.
role
            * Type: "defaultAdmin" | "pause" | "unpause" | "issuer" | "burnBlocked"
Role to set admin for.
token
            * Type: Address | bigint
Address or ID of the TIP20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
revokeRoles
Previousshift←
token.setSupplyCap
Sets the supply cap for a TIP-20 token. Requires the default admin role.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { newSupplyCap, receipt } = await client.token.setSupplyCapSync({  supplyCap: parseUnits('1000000', 6),  token: '0x20c0000000000000000000000000000000000000',}) console.log('New supply cap:', newSupplyCap)
New supply cap: 1000000000000n
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.setSupplyCap action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.setSupplyCap({  supplyCap: parseUnits('1000000', 6),  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.setSupplyCap.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** New supply cap value */  newSupplyCap: bigint  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that updated the supply cap */  updater: Address}
Parameters
supplyCap
            * Type: bigint
Maximum total supply allowed for the token.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
setRoleAdmin
Previousshift←
token.transfer
Transfers TIP-20 tokens from the caller to a recipient.
Usage
example.tsviem.config.ts
import { parseUnits } from 'viem'import { client } from './viem.config' const { receipt } = await client.token.transferSync({  amount: parseUnits('10.5', 6),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',}) console.log('Transaction hash:', receipt.transactionHash)
Transaction hash: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.transfer action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { parseUnits } from 'viem'import { client } from './viem.config' const hash = await client.token.transfer({  amount: parseUnits('10.5', 6),  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.transfer.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Amount of tokens transferred */  amount: bigint  /** Address tokens were transferred from */  from: Address  /** Transaction receipt */  receipt: TransactionReceipt  /** Address tokens were transferred to */  to: Address}
Parameters
amount
            * Type: bigint
Amount of tokens to transfer.
to
            * Type: Address
Address to transfer tokens to.
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
memo (optional)
            * Type: Hex
Optional memo to attach to the transfer event.
from (optional)
            * Type: Address
Address to transfer tokens from. When specified, transfers tokens from the given address (requires prior approval). Defaults to the caller's address.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
setSupplyCap
Previousshift←
token.unpause
Unpauses a TIP-20 token, allowing transfers to resume. Requires the UNPAUSE role. Learn more about token roles
Usage
example.tsviem.config.ts
import { client } from './viem.config' const { isPaused, receipt } = await client.token.unpauseSync({  token: '0x20c0000000000000000000000000000000000000',}) console.log('Is paused:', isPaused)
Is paused: false
Asynchronous Usage
The example above uses a *Sync variant of the action, that will wait for the transaction to be included before returning.
If you are optimizing for performance, you should use the non-sync token.unpause action and wait for inclusion manually:
import { Actions } from 'tempo.ts/viem'import { client } from './viem.config' const hash = await client.token.unpause({  token: '0x20c0000000000000000000000000000000000000',})const receipt = await client.waitForTransactionReceipt({ hash }) const { args }  = Actions.token.unpause.extractEvent(receipt.logs)
Return Type
type ReturnType = {  /** Whether the token is paused */  isPaused: boolean  /** Transaction receipt */  receipt: TransactionReceipt  /** Address that unpaused the token */  updater: Address}
Parameters
token
            * Type: Address | bigint
Address or ID of the TIP-20 token.
account (optional)
            * Type: Account | Address
Account that will be used to send the transaction.
feeToken (optional)
            * Type: Address | bigint
Fee token for the transaction.
Can be a TIP-20 token address or ID.
feePayer (optional)
            * Type: Account | true
Fee payer for the transaction.
Can be a Viem Account, or true if a Fee Payer Service will be used.
gas (optional)
            * Type: bigint
Gas limit for the transaction.
maxFeePerGas (optional)
            * Type: bigint
Max fee per gas for the transaction.
maxPriorityFeePerGas (optional)
            * Type: bigint
Max priority fee per gas for the transaction.
nonce (optional)
            * Type: number
Nonce for the transaction.
nonceKey (optional)
            * Type: 'random' | bigint
Nonce key for the transaction. Use 'random' to generate a random nonce key.
validBefore (optional)
            * Type: number
Unix timestamp before which the transaction must be included.
validAfter (optional)
            * Type: number
Unix timestamp after which the transaction can be included.
throwOnReceiptRevert (optional)
            * Type: boolean
            * Default: true
Whether to throw an error if the transaction receipt indicates a revert. Only applicable to *Sync actions.
transfer
Previousshift←
token.watchAdminRole
Watches for role admin update events on TIP20 tokens.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchAdminRole({  token: 1n, // Token ID or address  onRoleAdminUpdated: (args, log) => {    console.log('Role:', args.role)    console.log('New admin role:', args.newAdminRole)    console.log('Sender:', args.sender)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onRoleAdminUpdated
            * Type: function
declare function onRoleAdminUpdated(args: Args, log: Log): void type Args = {  /** The role whose admin role is being changed */  role: Hex  /** The new admin role */  newAdminRole: Hex  /** The address that initiated the change */  sender: Address}
Callback to invoke when a role admin is updated.
token
            * Type: Address | bigint
Address or ID of the TIP20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter by role */  role?: Hex | Hex[] | null  /** Filter by new admin role */  newAdminRole?: Hex | Hex[] | null  /** Filter by sender */  sender?: Address | Address[] | null}
Optional filter arguments to narrow down the events to watch.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: (error: Error) => void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
unpause
Previousshift←
token.watchApprove
Watches for token approval events on TIP20 tokens.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchApprove({  token: 0n,  onApproval: (args, log) => {    console.log('Amount:', args.amount)    console.log('Owner:', args.owner)    console.log('Spender:', args.spender)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onApproval
            * Type: function
declare function onApproval(args: Args, log: Log): void type Args = {  /** Amount approved */  amount: bigint  /** Address of the token owner */  owner: Address  /** Address of the spender */  spender: Address}
Callback to invoke when tokens are approved.
token
            * Type: Address | bigint
Address or ID of the TIP20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter by token owner address */  owner?: Address | Address[] | null  /** Filter by spender address */  spender?: Address | Address[] | null}
Filter events by owner and/or spender addresses.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchAdminRole
Previousshift←
token.watchApprove
Watches for token approval events on TIP20 tokens.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchApprove({  token: 0n,  onApproval: (args, log) => {    console.log('Amount:', args.amount)    console.log('Owner:', args.owner)    console.log('Spender:', args.spender)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onApproval
            * Type: function
declare function onApproval(args: Args, log: Log): void type Args = {  /** Amount approved */  amount: bigint  /** Address of the token owner */  owner: Address  /** Address of the spender */  spender: Address}
Callback to invoke when tokens are approved.
token
            * Type: Address | bigint
Address or ID of the TIP20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter by token owner address */  owner?: Address | Address[] | null  /** Filter by spender address */  spender?: Address | Address[] | null}
Filter events by owner and/or spender addresses.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchAdminRole
Previousshift←
token.watchCreate
Watches for new TIP20 token creation events on the TIP20 Factory.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchCreate({  onTokenCreated: (args, log) => {    console.log('Token:', args.token)    console.log('Token ID:', args.tokenId)    console.log('Name:', args.name)    console.log('Symbol:', args.symbol)    console.log('Currency:', args.currency)    console.log('Quote Token:', args.quoteToken)    console.log('Admin:', args.admin)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onTokenCreated
            * Type: function
declare function onTokenCreated(args: Args, log: Log): void type Args = {  /** Address of the created token */  token: Address  /** ID of the created token */  tokenId: bigint  /** Name of the token */  name: string  /** Symbol of the token */  symbol: string  /** Currency of the token */  currency: string  /** Quote token address */  quoteToken: Address  /** Admin address */  admin: Address}
Callback to invoke when a new TIP20 token is created.
args (optional)
            * Type: object
type Args = {  /** Filter by token address(es) */  token?: Address | Address[] | null  /** Filter by token ID(s) */  tokenId?: bigint | bigint[] | null}
Optional filter arguments to watch for specific tokens.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchBurn
Previousshift←
token.watchMint
Watches for token mint events on TIP20 tokens.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchMint({  token: '0x20c0000000000000000000000000000000000001',  onMint: (args, log) => {    console.log('To:', args.to)    console.log('Amount:', args.amount)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onMint
            * Type: function
declare function onMint(args: Args, log: Log): void type Args = {  /** Address that received the tokens */  to: Address  /** Amount minted */  amount: bigint}
Callback to invoke when tokens are minted.
token
            * Type: Address | bigint
Address or ID of the TIP20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter by recipient address */  to?: Address | Address[] | null}
Optional filter arguments.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchCreate
Previousshift←
token.watchRole
Watches for role membership update events on TIP20 tokens.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchRole({  token: '0x...', // Address or ID of the TIP20 token  onRoleUpdated: (args, log) => {    console.log('Account:', args.account)    console.log('Has role:', args.hasRole)    console.log('Role:', args.role)    console.log('Type:', args.type) // 'granted' or 'revoked'    console.log('Sender:', args.sender)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onRoleUpdated
            * Type: function
declare function onRoleUpdated(args: Args, log: Log): void type Args = {  /** Role being updated */  role: Hex  /** Account receiving or losing the role */  account: Address  /** Address that updated the role */  sender: Address  /** Whether the account has the role */  hasRole: boolean  /** Type of role update */  type: 'granted' | 'revoked'}
Callback to invoke when a role membership is updated.
token
            * Type: Address | bigint
Address or ID of the TIP20 token.
args (optional)
            * Type: object
type Args = {  /** Filter by role */  role?: Hex | Hex[] | null  /** Filter by account */  account?: Address | Address[] | null  /** Filter by sender */  sender?: Address | Address[] | null}
Filter parameters for the watch subscription.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
The callback to call when an error occurred when trying to get for a new block.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchMint
Previousshift←
token.watchTransfer
Watches for token transfer events on TIP20 tokens.
Usage
example.tsviem.config.ts
import { client } from './viem.config' const unwatch = client.token.watchTransfer({  token: 1n,  onTransfer: (args, log) => {    console.log('Amount:', args.amount)    console.log('From:', args.from)    console.log('To:', args.to)  },}) // Later, stop watchingunwatch()
Return Type
type ReturnType = () => void
Returns a function to unsubscribe from the event.
Parameters
onTransfer
            * Type: function
declare function onTransfer(args: Args, log: Log): void type Args = {  /** Amount transferred */  amount: bigint  /** Address sending the tokens */  from: Address  /** Address receiving the tokens */  to: Address}
Callback to invoke when tokens are transferred.
token
            * Type: Address | bigint
Address or ID of the TIP20 token to watch.
args (optional)
            * Type: object
type Args = {  /** Filter by sender address(es) */  from?: Address | Address[] | null  /** Filter by recipient address(es) */  to?: Address | Address[] | null}
Optional filter to watch only transfers from or to specific addresses.
fromBlock (optional)
            * Type: bigint
Block to start listening from.
onError (optional)
            * Type: function
declare function onError(error: Error): void
Callback to invoke when an error occurs while watching for new blocks.
poll (optional)
            * Type: true
Whether to use polling.
pollingInterval (optional)
            * Type: number
Polling frequency (in ms). Defaults to Client's pollingInterval config.
watchRole
Previousshift←
withFeePayer
Creates a transport that routes transactions to a fee payer service when a feePayer is requested on an action. Learn more about Fee Sponsorship
Usage
example.tsviem.config.ts
import { createClient, http, walletActions } from 'viem'import { privateKeyToAccount } from 'viem/accounts'import { tempo } from 'tempo.ts/chains'import { withFeePayer } from 'tempo.ts/viem' const client = createClient({  account: privateKeyToAccount('0x...'),  chain: tempo({ feeToken: '0x20c0000000000000000000000000000000000001' }),  transport: withFeePayer(    http(),    http('http://localhost:3000'),    { policy: 'sign-only' },  ), }).extend(walletActions) // Regular transactionconst receipt1 = await client.sendTransactionSync({  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb',}) // Sponsored transaction const receipt2 = await client.sendTransactionSync({  feePayer: true,  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEbb', })
Example Fee Payer Service
Below is an end-to-end example of a client/server fee payer setup.
See server.ts for the server-side implementation. It uses Handler.feePayer provided by tempo.ts/server to handle fee payer requests.
client.tsserver.ts
import { createClient, http, walletActions } from 'viem'import { privateKeyToAccount } from 'viem/accounts'import { tempo } from 'tempo.ts/chains'import { withFeePayer } from 'tempo.ts/viem' const client = createClient({  account: privateKeyToAccount('0x...'),  chain: tempo({ feeToken: '0x20c0000000000000000000000000000000000001' }),  transport: withFeePayer(    http(),    http('http://localhost:3000'),    { policy: 'sign-only' },  ), }).extend(walletActions) const hash = await client.sendTransactionSync({  feePayer: true,  to: '0x0000000000000000000000000000000000000000',})
Return Type
type ReturnType = Transport<'feePayer'>
Parameters
defaultTransport
            * Type: Transport
The default transport to use for regular (non-sponsored) transactions.
relayTransport
            * Type: Transport
The relay transport to use for sponsored transactions. This should point to a fee payer service that will sign and submit the transaction with a fee payer signature.
Parameters (optional)
            * Type: withFeePayer.Parameters
Options for withFeePayer usage.
policy (optional)
            * Type: 'sign-only' | 'sign-and-broadcast'
            * Default: 'sign-only'
Controls how the fee payer handles sponsored transactions:
            * 'sign-only': Fee payer co-signs the transaction and returns it to the client transport, which then broadcasts it via the default transport.
            * 'sign-and-broadcast': Fee payer co-signs and broadcasts the transaction directly. The fee payer service handles both signing and submission to the blockchain.