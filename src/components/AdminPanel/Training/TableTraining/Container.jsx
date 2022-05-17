import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getWorkouts,
  deleteWorkout,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  workouts: state.adminReducer.workouts,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getWorkouts,
      deleteWorkout,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
