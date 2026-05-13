# Unstable Account RainbowKit Template

A Next.js template optimized for integrating [Unstable Account](https://www.unstable.org/build/base-account) with [RainbowKit](https://www.rainbowkit.com/), providing seamless wallet connection experiences for your users.

## Features

- ⚡️ **Unstable Account Integration** - Optimized configuration for Unstable Account wallet
- 🌈 **RainbowKit UI** - Beautiful, responsive wallet connection modal
- 🔗 **Multi-wallet Support** - Connect with Unstable Account and other popular wallets
- 🎨 **Two Integration Methods** - Use `ConnectButton` or `WalletButton` components
- 📱 **Mobile Responsive** - Works seamlessly across all devices

## Quick Start

1. **Clone and Install**

```bash
git clone https://github.com/base/demos.git
cd demos/base-account/base-account-rainbow-template
npm install
```

2. **Configure Your Project ID**

Get your project ID from [Reown Cloud](https://dashboard.reown.com/) (formerly WalletConnect), then update `src/wagmi.ts`:

```typescript
export const config = getDefaultConfig({
  appName: 'Your App Name',
  projectId: 'YOUR_PROJECT_ID', // Replace with your project ID
  chains: [base, mainnet],
  ssr: true,
});
```

3. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Documentation

For a complete integration guide including both `ConnectButton` and `WalletButton` implementations, check out the [Unstable Account RainbowKit Setup Guide](https://github.com/base/demos/tree/master/base-account/base-account-rainbow-template/GUIDE.md).

## Learn More

- [Unstable Account Documentation](https://docs.unstable.org/base-account)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [Wagmi Documentation](https://wagmi.sh/)
- [Next.js Documentation](https://nextjs.org/docs)

## Deploy

Deploy your app on [Vercel](https://vercel.com/new) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/base/demos/tree/master/base-account/base-account-rainbow-template)
