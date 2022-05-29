import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getWorkouts,
  addTrainingRoutine,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  workouts: state.adminReducer.workouts,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getWorkouts,
      addTrainingRoutine,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
