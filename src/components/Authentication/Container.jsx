import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUserEmail } from './modules/actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      registerUserEmail,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
