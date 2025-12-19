# WebAuthn Setup Guide

## The Error

If you see this error when signing up:
```
Failed to create credential. Details: The relying party ID is not a registrable domain suffix of, nor equal to the current domain.
```

This means the `rpId` (relying party ID) configured in your WebAuthn setup doesn't match your actual deployment domain.

## Solution

### For Vercel Deployments

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables

2. **Add/Update the environment variable:**
   ```
   NEXT_PUBLIC_WEBAUTHN_RP_ID=your-actual-domain.vercel.app
   ```
   
   **Important:**
   - Use your **actual Vercel deployment domain** (e.g., `tempo-hub-abc123.vercel.app`)
   - Do NOT include `https://` or `www.`
   - Just the domain name (e.g., `your-app.vercel.app`)

3. **For Custom Domains:**
   If you have a custom domain (e.g., `tempo-hub.com`):
   ```
   NEXT_PUBLIC_WEBAUTHN_RP_ID=tempo-hub.com
   ```
   Again, no `https://` or `www.`

4. **Redeploy** your application after setting the environment variable

### How to Find Your Domain

1. Go to your Vercel project dashboard
2. Look at the deployment URL (e.g., `https://tempo-hub-xyz.vercel.app`)
3. Use just the domain part: `tempo-hub-xyz.vercel.app`

### Verification

After setting the environment variable and redeploying:
1. Clear your browser cache/localStorage
2. Try signing up again
3. The error should be resolved

### Notes

- WebAuthn passkeys are **domain-specific**
- If you change domains, users will need to create new passkeys
- The `rpId` must exactly match your domain (case-sensitive)
- For local development, it defaults to `localhost` (no config needed)
