import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPaymentConfig, startCheckout } from './modules/actions';

const mapStateToProps = (state) => ({
  plan: state.paymentReducer.plan,
  paymentConfig: state.paymentReducer.paymentConfig,
  paymentSession: state.paymentReducer.paymentSession,
  paymentPrices: state.paymentReducer.paymentPrices,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getPaymentConfig,
      startCheckout,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
