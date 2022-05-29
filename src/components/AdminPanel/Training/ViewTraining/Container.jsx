import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSingleWorkout,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  workout: state.adminReducer.workout,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getSingleWorkout,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
