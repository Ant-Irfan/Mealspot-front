import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentActiveUser } from '../Authentication/modules/actions';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getCurrentActiveUser,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
