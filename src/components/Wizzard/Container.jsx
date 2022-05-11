import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  registerUserEmail,
  registrationEmailConfirmation,
  wizzardUserRegistration,
} from '../Authentication/modules/actions';

const mapStateToProps = (state) => ({
  initialWizzardValues: state.authReducer.initialFormValues,
  wizzardEnabled: state.authReducer.wizzardEnabled,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      registerUserEmail,
      registrationEmailConfirmation,
      wizzardUserRegistration,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
