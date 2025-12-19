# TempoHub

A modern stablecoin payment application built on Tempo blockchain, featuring passkey authentication, instant finality, and gasless transactions.

## Features

### Phase 0 - Identity & Account ✅
- **Passkey Authentication**: Create and sign in with FaceID/TouchID using WebAuthn
- **Token Balances**: View all TIP-20 stablecoin balances
- **Faucet Integration**: Get testnet tokens easily
- **MetaMask Support**: Fallback to traditional wallets

### Phase 1 - Payments ✅
- **Send Payments**: Transfer TIP-20 tokens with memos
- **Fee Selection**: Pay transaction fees in any stablecoin
- **Gasless Transactions**: Sponsor transactions for users
- **Transaction Status**: Real-time status with ~0.5s finality

## Tech Stack

- **Runtime**: Bun
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Web3**: Wagmi v3 + tempo.ts SDK
- **State Management**: TanStack Query
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed
- Modern browser with WebAuthn support (Chrome, Safari, Edge)

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

### Environment Variables

Create a `.env.local` file (see `.env.example` for reference):

```env
NEXT_PUBLIC_TEMPO_RPC_URL=https://rpc.testnet.tempo.xyz
NEXT_PUBLIC_TEMPO_EXPLORER_URL=https://explore.tempo.xyz
NEXT_PUBLIC_WEBAUTHN_RP_ID=localhost
```

**Note**: For production, set `NEXT_PUBLIC_WEBAUTHN_RP_ID` to your actual domain.

## Project Structure

```
tempo-hub/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── auth/        # Authentication components
│   │   ├── wallet/      # Wallet & balance components
│   │   ├── payments/    # Payment form components
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities & configs
│   └── providers/       # React context providers
```

## Development

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Formatting**: Prettier (via ESLint)

### React Best Practices

- ✅ Proper dependency arrays in hooks
- ✅ Error boundaries for error handling
- ✅ Accessibility (ARIA labels, roles)
- ✅ Client-only rendering for Web3 hooks
- ✅ Memoization where needed
- ✅ Type safety throughout

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

### Other Platforms

The app is a standard Next.js application and can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Node.js

## Security

- **Environment Variables**: Never commit `.env.local` files
- **WebAuthn**: Requires HTTPS in production (localhost is secure)
- **Error Handling**: Errors logged only in development
- **Type Safety**: Full TypeScript coverage

## License

MIT

## Resources

- [Tempo Documentation](https://docs.tempo.xyz)
- [tempo.ts SDK](https://github.com/tempoxyz/tempo-ts)
- [Wagmi Documentation](https://wagmi.sh)
