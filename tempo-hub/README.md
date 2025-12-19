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

Vercel is the recommended deployment platform as it's made by the Next.js creators and provides seamless integration.

#### Prerequisites

- Code pushed to GitHub (already done)
- Vercel account (free tier is sufficient)

#### Step-by-Step Deployment

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Authorize Vercel to access your repositories

2. **Import Project**
   - Click "Add New Project" in Vercel dashboard
   - Select the `tempo-capabilities` repository
   - Configure project settings:
     - **Framework Preset**: Next.js (auto-detected)
     - **Root Directory**: `tempo-hub`
     - **Build Command**: `npm run build` (default)
     - **Output Directory**: `.next` (default)
     - **Install Command**: `npm install` (default)

3. **Configure Environment Variables**
   
   In Vercel Dashboard → Project Settings → Environment Variables, add these for **Production**, **Preview**, and **Development**:
   
   ```
   NEXT_PUBLIC_TEMPO_RPC_URL=https://rpc.testnet.tempo.xyz
   NEXT_PUBLIC_TEMPO_EXPLORER_URL=https://explore.tempo.xyz
   NEXT_PUBLIC_WEBAUTHN_RP_ID=your-app-name.vercel.app
   ```
   
   **Important Notes**:
   - Initially, use the auto-generated Vercel domain (e.g., `tempo-hub-xyz.vercel.app`)
   - After first deployment, update `NEXT_PUBLIC_WEBAUTHN_RP_ID` to match your actual Vercel domain
   - For custom domains, update `NEXT_PUBLIC_WEBAUTHN_RP_ID` to match your custom domain
   - WebAuthn passkeys are domain-specific, so users will need to create new passkeys if the domain changes

4. **Deploy**
   - Click "Deploy" in Vercel dashboard
   - Wait for build to complete (usually 2-5 minutes)
   - Check build logs for any errors
   - Visit the deployment URL

5. **Post-Deployment**
   - Verify app loads correctly
   - Test WebAuthn passkey creation (requires HTTPS - automatic on Vercel)
   - Test wallet connection
   - Test payment flow
   - Update `NEXT_PUBLIC_WEBAUTHN_RP_ID` to match your actual domain if needed

#### Custom Domain (Optional)

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `tempo-hub.com`)
3. Update DNS records as instructed by Vercel
4. Wait for SSL certificate (automatic, usually < 1 minute)
5. Update `NEXT_PUBLIC_WEBAUTHN_RP_ID` environment variable to match custom domain
6. Redeploy

**Note**: Users who created passkeys on the Vercel domain will need to create new ones for the custom domain (WebAuthn is domain-specific).

#### Vercel Free Tier

- Unlimited personal projects
- 100GB bandwidth/month
- Automatic HTTPS/SSL
- Custom domains
- Preview deployments for every push
- Automatic deployments from GitHub

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
