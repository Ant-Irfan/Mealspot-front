import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addExercise,
} from '../../modules/actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addExercise,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
