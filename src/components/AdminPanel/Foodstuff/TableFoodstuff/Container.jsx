import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getFoodstuff,
  deleteFoodstuff,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  foodstuffs: state.adminReducer.foodstuffs,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getFoodstuff,
      deleteFoodstuff,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
