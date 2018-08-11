import Graph from "./GraphView";
import {connect, store} from "react-redux";
import {getCoinHistory, getError, getLoadingStatus, getSelectedCoin} from '../../reducers/rootReducer';
import {fetchCoinHistory} from "../../actions/api";

const mapStateToProps = store => {
    return {
        coinHistory: getCoinHistory(store),
        error : getError(store),
        isLoading: getLoadingStatus(store),
        selectedCoin: getSelectedCoin(store)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCoinHistory: ticker => dispatch(fetchCoinHistory(ticker))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);