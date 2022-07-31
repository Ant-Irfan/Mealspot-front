/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from './checkout.module.scss';
import pricingStyles from '../Pricing/pricing.module.scss';
import { ReactComponent as PaidPlan } from '../../images/pricing/paid.svg';
import { ReactComponent as Paypal } from '../../images/pricing/paypal.svg';
import StripeForm from './StripeForm/StripeForm';
import Loader from '../helpers/Loader/Loader';
import PaypalLifetime from './PayPal/PayPalLifetime';
import PayPalSubscription from './PayPal/PayPalSubscription';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CLIENT_KEY);
const Checkout = (props) => {
  const {
    plan, actions, paymentConfig, paymentSession, history, paymentPrices,
  } = props;
  // eslint-disable-next-line no-unused-vars
  const [activePaymentMethod, setactivePaymentMethod] = useState(null);
  const [stripeOptions, setStripeOptions] = useState(null);

  useEffect(() => {
    if (!plan) {
      history.push('pricing');
    }
  });

  useEffect(() => {
    if (paymentSession) {
      setStripeOptions({
        clientSecret: paymentSession.client_secret,
      });
    }
  }, [paymentSession]);

  useEffect(() => {
    actions.getPaymentConfig();
  }, []);

  const startPaymentWithStripe = () => {
    if (plan) {
      const { stripe } = paymentConfig;
      setactivePaymentMethod(stripe);
      const paymentMethod = 'stripe';
      const { prices } = stripe;
      console.log(prices, plan);
      const priceObject = plan === 'MONTHLY'
        ? prices.filter((price) => price?.recurring?.interval === 'MONTH' && price.recurring?.interval_count === 1)
        : plan === 'QUARTERLY'
          ? prices.filter((price) => price?.recurring?.interval === 'MONTH' && price.recurring?.interval_count === 3)
          : plan === 'LIFETIME'
            ? prices.filter((price) => price.recurring === null && price.type === 'ONE_TIME')
            : null;
      if (priceObject && priceObject.length === 1) {
        const priceId = priceObject[0].id;
        actions.startCheckout(paymentMethod, priceId);
      }
    }
  };
  const startPaymentWithPaypal = () => {
    if (plan) {
      const { paypal } = paymentConfig;
      setactivePaymentMethod(paypal);
      const paymentMethod = 'paypal';
      const { prices } = paypal;
      console.log(prices, plan);
      const priceObject = plan === 'MONTHLY'
        ? prices.filter((price) => price?.recurring?.interval === 'MONTH' && price.recurring?.interval_count === 1)
        : plan === 'QUARTERLY'
          ? prices.filter((price) => price?.recurring?.interval === 'MONTH' && price.recurring?.interval_count === 3)
          : plan === 'LIFETIME'
            ? prices.filter((price) => price.recurring === null && price.type === 'ONE_TIME')
            : null;
      if (priceObject && priceObject.length === 1) {
        const priceId = priceObject[0].id;
        actions.startCheckout(paymentMethod, priceId);
      }
    }
  };

  return (
    <div>
      {
        !paymentConfig
          ? (
            <Loader
              size={124}
            />
          )
          : (
            <div className={styles.checkoutBg}>
              <div className={styles.checkoutCardContainer}>
                <div className="row">
                  <div className="col-7">
                    <div
                      className={`${pricingStyles.pricePlanWrapper} pricing-buy-plan w-100`}
                      style={{ padding: 20 }}
                    >
                      <div className={pricingStyles.buyPlanContainer}>
                        <div className="d-flex justify-content-between">
                          <div className={pricingStyles.buyPlanHeading}>
                            Paid Plan
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            {
                            plan === 'MONTHLY'
                            && (
                            <div className="d-flex align-items-center">
                              <div className={`${pricingStyles.priceDollar} ${pricingStyles.freePlanPrice}`}>
                                {paymentPrices?.monthly}
                              </div>
                              <div className="mx-2">per month</div>
                            </div>
                            )
                        }
                            {
                            plan === 'LIFETIME'
                            && (
                            <div className="d-flex align-items-center">
                              <div className={`${pricingStyles.priceDollar} ${pricingStyles.freePlanPrice}`}>
                                {paymentPrices?.lifetime}
                              </div>
                              <div className="mx-2" />
                            </div>
                            )
                        }
                            {
                            plan === 'QUARTERLY'
                            && (
                            <div className="d-flex align-items-center">
                              <div className={`${pricingStyles.priceDollar} ${pricingStyles.freePlanPrice}`}>
                                {paymentPrices?.quarterly}
                              </div>
                              <div className="mx-2" />
                            </div>
                            )
                        }
                            {
                             plan === 'QUARTERLY'
                             && (
                             <div className={pricingStyles.billingDescription}>
                               billed quarterly
                             </div>
                             )
                        }
                            {
                             plan === 'MONTHLY'
                             && (
                             <div className={pricingStyles.billingDescription}>
                               billed monthly
                             </div>
                             )
                        }
                            {
                             plan === 'LIFETIME'
                             && (
                             <div className={pricingStyles.billingDescription}>
                               billed once time
                             </div>
                             )
                        }
                          </div>

                        </div>
                        <div className={`mt-4 ${pricingStyles.freePlanFeatureDescription}`}>
                          Weekly plan update
                        </div>
                        <div className={`${pricingStyles.freePlanListItem}`}>
                          <b>
                            Based on multiple factors
                          </b>
                        </div>
                        <div className={pricingStyles.freePlanFeatureDescription}>
                          Progress tracking
                        </div>
                        <div className={pricingStyles.freePlanListItem}>
                          <b>
                            Weight, chest circumference,
                            <br />
                            hips...
                          </b>
                        </div>
                        <div className={pricingStyles.freePlanFeatureDescription}>
                          Meal plan customisation
                        </div>
                        <div className={pricingStyles.freePlanListItem}>
                          <b>
                            Your opinion matters
                          </b>
                        </div>
                        <div className={styles.freePlanFeatureDescription}>
                          Number of recipes
                        </div>
                        <div className={pricingStyles.freePlanListItem}>
                          <b>
                            40 (adding more regularly)
                          </b>
                        </div>
                        <div className={pricingStyles.freePlanFeatureDescription}>
                          Workout customisation
                        </div>
                        <div className={pricingStyles.freePlanListItem}>
                          <b>
                            More configurable
                          </b>
                        </div>
                        <div className={pricingStyles.freePlanFeatureDescription}>
                          Number of exercises
                        </div>
                        <div className={pricingStyles.freePlanListItem}>
                          <b>
                            60
                          </b>
                        </div>
                        <div>
                          <PaidPlan
                            className={pricingStyles.paidCardImage}
                            style={{ left: 230 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className={styles.checkoutFormContainer}>
                      <div className={styles.checkoutFormTitle}>Checkout</div>
                      <div className={styles.checkoutFormDescription}>
                        Mauris velit quam,
                        dignissim vel ullamcorper vitae, egestas eu massa
                      </div>
                      {
                  !paymentSession
                  && (
                  <div className={styles.couponContainer}>
                    <div className={styles.couponTitle}>
                      Coupon
                    </div>
                    <div className={styles.couponInputContainer}>
                      <input className={styles.couponInput} />
                      <button
                        type="button"
                        style={{
                          width: '30%', height: '50px', marginTop: '-4px', marginLeft:'5px',
                        }}
                        className="primary-color-button btn btn-light"
                      >
                        SUBMIT
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={startPaymentWithStripe}
                      style={{
                        width: '100%', maxWidth: '100%', marginTop: 5, padding:'10px 0px',
                      }}
                      className="primary-color-button btn btn-light"
                    >
                      Continue with credit card
                    </button>
                    <div className={styles.textOr}>Or</div>
                    <button
                      onClick={startPaymentWithPaypal}
                      type="button"
                      style={{
                        width: '100%',
                        maxWidth: '100%',
                        marginTop: 5,
                        backgroundColor: '#FEC34A',
                        padding:'12px 0px',
                      }}
                      className="primary-color-button btn btn-light"
                    >
                      <Paypal
                        style={{ margin: 'auto' }}
                      />
                    </button>
                  </div>
                  )
                }
                      {
                  paymentSession?.provider === 'stripe'
                  && (
                  <Elements stripe={stripePromise} options={stripeOptions}>
                    <StripeForm
                      paymentSession={paymentSession}
                    />
                  </Elements>
                  )
                }
                      {
                  paymentSession?.provider === 'paypal'
                  && (plan === 'LIFETIME')
                  && (
                    <PaypalLifetime
                      prices={paymentPrices}
                      plan={plan}
                    />
                  )
                }
                      {
                  paymentSession?.provider === 'paypal'
                  && (plan === 'MONTHLY' || plan === 'QUARTERLY')
                  && (
                    <PayPalSubscription
                      prices={paymentPrices}
                      plan={plan}
                      paymentSession={paymentSession}
                    />
                  )
                }
                      <div className={styles.cancelPayment}>
                        Cancel Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
};
export default withRouter(Checkout);
