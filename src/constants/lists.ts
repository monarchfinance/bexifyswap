// const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json';
// const TESTNET_LIST = 'https://raw.githubusercontent.com/ponizhand/tokens-list/main/testnet.json'
const MAINNET_LIST = 'https://raw.githubusercontent.com/monarchfinance/bexifyswaplist/main/mainnet.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [MAINNET_LIST];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [MAINNET_LIST];
