import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSingleUser,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  user: state.adminReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getSingleUser,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
