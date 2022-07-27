import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPaymentConfig, setPlanToBuy } from '../Checkout/modules/actions';

const mapStateToProps = (state) => ({
  pricesConfig: state.paymentReducer.pricesConfig,
  paymentPrices: state.paymentReducer.paymentPrices,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getPaymentConfig,
      setPlanToBuy,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
