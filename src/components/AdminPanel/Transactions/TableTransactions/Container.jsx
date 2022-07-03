import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getTransactions,
  getTransactionsByFilter,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  transactions: state.adminReducer.transactions,
  total_pages: state.adminReducer.total_pages_transactions,
  current_page: state.adminReducer.current_page_transactions,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getTransactions,
      getTransactionsByFilter,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
