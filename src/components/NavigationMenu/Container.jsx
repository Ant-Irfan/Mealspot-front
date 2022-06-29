import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentActiveUser, logoutUser } from '../Authentication/modules/actions';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getCurrentActiveUser,
      logoutUser,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
