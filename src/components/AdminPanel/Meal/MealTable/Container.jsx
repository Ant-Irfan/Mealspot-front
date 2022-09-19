import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getMeals,
  deleteMeal,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  meals: state.adminReducer.meals,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getMeals,
      deleteMeal,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
