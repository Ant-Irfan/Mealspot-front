import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSingleMeal,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  meal: state.adminReducer.meal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getSingleMeal,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
