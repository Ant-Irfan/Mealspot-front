import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePassword } from '../Authentication/modules/actions';

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      changePassword,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
