import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSingleUser,
  getTransactionsForUser,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  user: state.adminReducer.user,
  transactions: state.adminReducer.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getSingleUser,
      getTransactionsForUser,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
