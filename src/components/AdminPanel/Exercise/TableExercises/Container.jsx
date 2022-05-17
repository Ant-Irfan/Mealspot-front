import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getExercises,
  deleteExercise,
  changeIsActiveExercise,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  exercises: state.adminReducer.exercises,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getExercises,
      deleteExercise,
      changeIsActiveExercise,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
