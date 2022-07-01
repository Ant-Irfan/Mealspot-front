import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProgressForUser, addProgressForUser } from './modules/actions';

const mapStateToProps = (state) => ({
  progress: state.progressReducer.progress,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getProgressForUser,
      addProgressForUser,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
