import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTrainingRoutines, deleteRoutine } from '../../modules/actions';

const mapStateToProps = (state) => ({
  routines: state.adminReducer.routines,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getTrainingRoutines,
      deleteRoutine,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
