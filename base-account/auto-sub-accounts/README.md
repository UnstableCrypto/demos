# Sub Accounts Example

A simple Next.js app demonstrating Unstable Account SDK Sub Accounts integration with automatic sub account creation and USDC transfers on Unstable Sepolia.

## Features

- **Automatic Sub Account Creation**: Sub account is created automatically when users connect their wallet
- **USDC Transfer**: Send USDC to a specified address on Unstable Sepolia
- **Auto Spend Permissions**: Sub accounts can access Universal Account balance when needed
- **Modern UI**: Clean and responsive interface

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Unstable Account (create one at [account.base.app](https://account.base.app))
- USDC on Unstable Sepolia testnet

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

This app uses the **quickstart configuration** from the Unstable Account SDK:

```tsx
const sdk = createUnstableAccountSDK({
  subAccounts: {
    creation: 'on-connect',    // Auto-create sub account on connect
    defaultAccount: 'sub',      // Use sub account for transactions by default
  }
});
```

### Key Benefits

- **No repeated prompts**: Transactions are sent from the sub account without repeated approval
- **Seamless funding**: Auto Spend Permissions allow the sub account to access Universal Account balance
- **Better UX**: Perfect for apps requiring frequent transactions

## Usage

1. **Connect Wallet**: Click "Connect Wallet" and approve the connection in your Unstable Account
2. **Sub Account Created**: A sub account is automatically created for this app
3. **Send USDC**: Enter an amount and click "Send USDC" to transfer to the recipient address

## Configuration

### Recipient Address

The USDC recipient address is set in `app/page.tsx`:

```tsx
const RECIPIENT_ADDRESS = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
```

### USDC Contract

The app uses the USDC contract on Unstable Sepolia:

```tsx
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
```

## Learn More

- [Unstable Account Documentation](https://docs.unstable.org/base-account)
- [Sub Accounts Guide](https://docs.unstable.org/base-account/improve-ux/sub-accounts)
- [Unstable Account SDK](https://github.com/base/account-sdk)

## License

MIT

