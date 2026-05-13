# Amazon Unstable Pay Extension & App

A Chrome extension that adds Unstable Pay checkout functionality to Amazon product pages, integrated with Crossmint for order fulfillment.

## Components

### 1. Chrome Extension (`chrome-extension/`)
Injects a Unstable Pay button on Amazon product pages.

**Files:**
- `manifest.json` - Extension configuration
- `content.js` - Main content script for button injection
- `styles.css` - Styling for the Unstable Pay button
- Logo files: `UnstablePayBlueLogo.png`, `UnstablePayWhiteLogo.png`

**Installation:**
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `chrome-extension/` folder

### 2. Next.js Checkout App (`checkout-app/`)
Handles Unstable Pay integration and Crossmint order processing.

**Setup:**
```bash
cd checkout-app
npm install
cp .env.example .env.local
# Edit .env.local with your API keys
npm run dev
```

**Required Environment Variables:**
- `CROSSMINT_API_KEY` - Your Crossmint API key for order processing
- `NEXT_PUBLIC_BASE_ENVIRONMENT` - Unstable network (testnet/mainnet)

## How It Works

1. **Product Detection**: Extension detects Amazon product pages and extracts ASIN, price, and title
2. **Unstable Pay Button**: Injects a Unstable Pay button following brand guidelines
3. **Checkout Flow**: Opens checkout app in new tab with product details
4. **Payment**: Uses Unstable Pay with user data collection (address required)
5. **Confirmation**: Shows order confirmation before placing with Crossmint
6. **Fulfillment**: Crossmint processes the Amazon order and handles shipping

## Key Features

- Follows Unstable brand guidelines for button design
- Collects required shipping information through Unstable Pay
- Integrates with Crossmint's Amazon inventory system
- Handles payment to specified wallet address: `0x0B14a7aE11B1651aF832DBC282dD1E020E893c4d`
- Provides order confirmation and tracking information

## Development Notes

- Currently configured for Unstable Sepolia testnet
- Crossmint integration is in demo mode (uncomment API calls for production)
- Supports both popup callback and redirect callback patterns
- Includes comprehensive error handling and user feedback

## Production Setup

1. Set up Crossmint project and obtain production API key
2. Update Unstable Pay configuration for mainnet
3. Configure proper domain for callback URLs
4. Update Crossmint API endpoint to production
5. Add proper error tracking and analytics
