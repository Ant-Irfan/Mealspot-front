import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
