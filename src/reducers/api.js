const initialState = {
    isFetching: false,
    coinList: null,
};

// TODO higher order reducers?
export const api = (currentState = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_DATA':
            return Object.assign({}, currentState, {
                requesting: action.payload,
            });
        case 'RECEIVE_TICKERS':
            return Object.assign({}, currentState, {
                tickers: action.payload,
            });
        case 'RECEIVE_COIN_DATA':
            return Object.assign({}, currentState, {
                coinData: action.payload,
            });
        case 'RECEIVE_MARKET_OVERVIEW_DATA':
            return Object.assign({}, currentState, {
                marketOverviewData: action.payload,
            });
        default:
            return currentState;
    }
};
