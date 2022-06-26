import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getUsers,
  getUsersByFilter,
} from '../../modules/actions';

const mapStateToProps = (state) => ({
  users: state.adminReducer.users,
  total_pages: state.adminReducer.total_pages,
  current_page: state.adminReducer.current_page,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getUsers,
      getUsersByFilter,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
