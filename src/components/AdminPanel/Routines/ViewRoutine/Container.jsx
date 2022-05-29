import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSingleTrainingRoutine,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  routine: state.adminReducer.routine,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getSingleTrainingRoutine,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
