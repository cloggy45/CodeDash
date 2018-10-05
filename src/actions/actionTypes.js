// API Action Types
export const FETCH_TOP_TEN_REQUEST = "FETCH_TOP_TEN_REQUEST";
export const FETCH_TOP_TEN_SUCCESS = "FETCH_TOP_TEN_SUCCESS";
export const FETCH_TOP_TEN_FAILED = "FETCH_TOP_TEN_FAILED";

export const FETCH_COIN_HISTORY_REQUEST = "FETCH_COIN_HISTORY_REQUEST";
export const FETCH_COIN_HISTORY_SUCCESS = "FETCH_COIN_HISTORY_SUCCESS";
export const FETCH_COIN_HISTORY_FAILED = "FETCH_COIN_HISTORY_FAILED";

export const FETCH_MARKET_OVERVIEW_REQUEST = "FETCH_MARKET_OVERVIEW_REQUEST";
export const FETCH_MARKET_OVERVIEW_SUCCESS = "FETCH_MARKET_OVERVIEW_SUCCESS";
export const FETCH_MARKET_OVERVIEW_FAILED = "FETCH_MARKET_OVERVIEW_FAILED";

export const FETCH_WATCHLIST_REQUEST = "FETCH_WATCHLIST_REQUEST";
export const FETCH_WATCHLIST_SUCCESS = "FETCH_WATCHLIST_SUCCESS";

export const FETCH_COIN_PRICE_INFO_REQUEST = "FETCH_COIN_PRICE_INFO_REQUEST";
export const FETCH_COIN_PRICE_INFO_SUCCESS = "FETCH_COIN_PRICE_INFO_SUCCESS";
export const FETCH_COIN_PRICE_INFO_FAILED = "FETCH_COIN_PRICE_INFO_FAILED";

export const FETCH_COIN_META_INFO_REQUEST = "FETCH_COIN_META_INFO_REQUEST";
export const FETCH_COIN_META_INFO_SUCCESS = "FETCH_COIN_META_INFO_SUCCESS";
export const FETCH_COIN_META_INFO_FAILED = "FETCH_COIN_META_INFO_FAILED";

export const RECEIVE_TICKERS = "RECEIVE_TICKERS";
export const RECEIVE_COIN_DATA = "RECEIVE_COIN_DATA";
export const RECEIVE_MARKET_OVERVIEW_DATA = "RECEIVE_MARKET_OVERVIEW_DATA";

// TODO refactor this, make each step explicit, reuesting, successful, failed
export const RECEIVE_COIN_LIST = "RECEIVE_COIN_LIST";

// Option Action Types
export const SELECT_COIN = "SELECT_COIN";

export const FETCH_USER = "FETCH_USER";

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";