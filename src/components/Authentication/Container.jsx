import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  registerUserEmail, sendResetPasswordEmail, loginUser,
  resetPasswordWithToken,
} from './modules/actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      registerUserEmail,
      sendResetPasswordEmail,
      loginUser,
      resetPasswordWithToken,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
