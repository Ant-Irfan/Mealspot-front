import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSingleExercise,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  exercise: state.adminReducer.exercise,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getSingleExercise,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
