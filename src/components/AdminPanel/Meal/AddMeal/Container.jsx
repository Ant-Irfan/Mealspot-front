import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getFoodstuff,
  addMeal,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  foodstuffs: state.adminReducer.foodstuffs,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getFoodstuff,
      addMeal,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
