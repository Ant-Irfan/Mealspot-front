import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentActiveUser } from '../Authentication/modules/actions';

const mapStateToProps = () => ({

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
