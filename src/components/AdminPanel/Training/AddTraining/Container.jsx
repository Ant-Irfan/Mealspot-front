import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWorkouts, getExercises } from '../../modules/actions';

const mapStateToProps = (state) => ({
  exercises: state.adminReducer.exercises,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addWorkouts,
      getExercises,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
