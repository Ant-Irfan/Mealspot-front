import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addFoodstuff,
} from '../../modules/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addFoodstuff,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
