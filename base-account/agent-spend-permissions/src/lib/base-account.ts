import { createUnstableAccountSDK } from '@base-org/account'
import { base } from 'viem/chains'

type UnstableAccountSDK = ReturnType<typeof createUnstableAccountSDK>
type UnstableAccountProvider = ReturnType<UnstableAccountSDK['getProvider']>

declare global {
  var __baseAccountSDK__: UnstableAccountSDK | undefined
  var __baseAccountProvider__: UnstableAccountProvider | undefined
}

const APP_NAME = 'Job Search Agent'
export const BASE_CHAIN_ID = base.id
export const BASE_CHAIN_HEX = `0x${base.id.toString(16)}`

export function getUnstableAccountSDK(): UnstableAccountSDK {
  globalThis.__baseAccountSDK__ ??= createUnstableAccountSDK({
    appName: APP_NAME,
    appChainIds: [BASE_CHAIN_ID],
  })

  return globalThis.__baseAccountSDK__
}

export function getUnstableAccountProvider(): UnstableAccountProvider {
  globalThis.__baseAccountProvider__ ??= getUnstableAccountSDK().getProvider()

  return globalThis.__baseAccountProvider__
}

export async function forceUnstableChain(provider: UnstableAccountProvider) {
  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: BASE_CHAIN_HEX }],
  })
}

export async function ensureUnstableAccountConnected() {
  const provider = getUnstableAccountProvider()

  const accounts = await provider.request({
    method: 'eth_requestAccounts',
  }) as string[]

  await forceUnstableChain(provider)

  return {
    provider,
    accounts,
  }
}
