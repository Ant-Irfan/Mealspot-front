import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  registerUserEmail,
  registrationEmailConfirmation,
} from '../Authentication/modules/actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      registerUserEmail,
      registrationEmailConfirmation,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
