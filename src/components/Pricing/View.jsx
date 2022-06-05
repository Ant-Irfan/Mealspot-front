/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { NavLink, withRouter } from 'react-router-dom';
import {
  StarFilled,
  CheckOutlined, LeftOutlined,
} from '@ant-design/icons';
import {
  Switch,
  Collapse,
} from 'antd';
import headerStyles from '../Wizzard/WizzardHeader/wizzardHeader.module.scss';
import { ReactComponent as FatHover } from '../../images/wizzard/step2/fatHover.svg';
import { ReactComponent as AverageHover } from '../../images/wizzard/step2/averageHover.svg';
import styles from './pricing.module.scss';
import { userProfileRoute } from '../../utils/pathsHelper';

const { Panel } = Collapse;
const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const slides = [
  {
    alt: 'Alt text 1',
    text: 'Suspendisse aliquam, ligula et ultricies aliquet, justo justo varius urna, vitae fringilla purus orci at elit.',
    name: 'Marry Doe',
    rating: [1, 2, 3, 4, 5],
  },
  {
    alt: 'Alt text 1',
    text: 'Suspendisse aliquam, ligula et ultricies aliquet, justo justo varius urna, vitae fringilla purus orci at elit.',
    name: 'Marry Doe',
    rating: [1, 2, 3, 4, 5],
  },
];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const PricingPage = () => {
  const [isFreePlan, setIsFreePlan] = useState(true);
  const onChangePlan = () => {
    setIsFreePlan(!isFreePlan);
  };
  const onChange = (key) => {
    // eslint-disable-next-line no-console
    console.log(key);
  };

  return (
    <div className="container mt-4">
      <div className={headerStyles.wizzardHeaderContainer}>
        <div
          className={`${headerStyles.wizzardHeaderDescription}`}
        >
          <NavLink
            to={userProfileRoute}
          >
            <LeftOutlined
              style={{ marginRight: 10 }}
            />
            {' '}
            Back to profile
          </NavLink>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <h1
            className={styles.pricingPageHeading}
          >
            Pricing Page
          </h1>
          <div
            className={styles.pricingPageDescription}
          >
            Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa.
            Sed nibh ante, vehicula eget consequat fermentum
          </div>
        </div>
        <div className="col-6 pricing-testimonial-container">
          <Slider
            {...sliderSettings}
          >
            {
                slides.length > 0 && slides.map((testimonial, i) => (
                  <div>
                    <div className={styles.testimonialDescription}>
                      “Suspendisse aliquam, ligula et ultricies aliquet,
                      justo justo varius urna, vitae fringilla purus orci at elit.”
                    </div>
                    <div className="d-flex align-items-center">
                      <div className={styles.testimonialName}>
                        {testimonial.name}
                      </div>
                      <div key={`testimonial-${i}`}>
                        {
                        testimonial.rating.map((index) => (
                          <StarFilled
                            style={{ fontSize: 16, marginRight: 5 }}
                            key={index}
                          />
                        ))
                    }
                      </div>
                    </div>
                  </div>
                ))

                }
          </Slider>
        </div>
      </div>
      <div className="row mt-3">
        <div
          style={{ width: '30%' }}
        >
          <div className={styles.featuresContainer}>
            <div className={styles.featuresHeading}>
              Features
            </div>
            <div className={styles.featuresDescription}>
              Mauris velit quam, dignissim vel ullamcorper
            </div>
            <div className={styles.featuresListItem}>
              Weekly plan update
            </div>
            <div className={styles.featuresListItem}>
              Progress tracking
            </div>
            <div className={styles.featuresListItem}>
              Meal plan customisation
            </div>
            <div className={styles.featuresListItem}>
              Number of recipes
            </div>
            <div className={styles.featuresListItem}>
              Workouts customisation
            </div>
            <div className={styles.featuresListItem}>
              Number of exercises
            </div>
          </div>
        </div>
        <div
          style={{ width: '30%' }}
        >
          <div className={styles.freePlanContainer}>
            <div className={styles.freePlanHeading}>
              Features
            </div>
            <div className="d-flex align-items-center">
              <div className={`${styles.priceDollar} ${styles.freePlanPrice}`}>
                $0
              </div>
              <div className="mx-2">per month</div>
            </div>
            <div className={`mt-4 ${styles.freePlanListItem}`}>
              Based on weight only
            </div>
            <div className={styles.freePlanListItem}>
              Weight only
            </div>
            <div className={styles.freePlanListItem}>
              Limited
            </div>
            <div className={styles.freePlanListItem}>
              20
            </div>
            <div className={styles.freePlanListItem}>
              Limited
            </div>
            <div className={styles.freePlanListItem}>
              30
            </div>
            <div>
              <FatHover
                style={{
                  position: 'relative', bottom: '150px', left: '150px', marginBottom: '-150px',
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="pricing-buy-plan"
          style={{ width: '40%' }}
        >
          <div className={styles.buyPlanContainer}>
            <div className="d-flex justify-content-between">
              <div className={styles.buyPlanHeading}>
                Paid Plan
              </div>
              <div>
                <span
                  style={isFreePlan ? { color: '#152233' } : { color: '#1522334D' }}
                  className="mx-3"
                >
                  Monthly
                </span>
                <Switch onChange={onChangePlan} />
                <span
                  style={!isFreePlan ? { color: '#152233' } : { color: '#1522334D' }}
                  className="mx-3"
                >
                  Lifetime
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex align-items-center">
                  <div className={`${styles.priceDollar} ${styles.freePlanPrice}`}>
                    $24
                  </div>
                  <div className="mx-2">per month</div>
                </div>
                <div className={styles.billingDescription}>billed monthly</div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className={`${styles.priceDollar} ${styles.freePlanPrice}`}>
                    $24
                  </div>
                  <div className="mx-2">
                    <div
                      className={styles.sales}
                    >
                      -20%
                    </div>
                    per month
                  </div>
                </div>
                <div
                  className={styles.billingDescription}
                >
                  billed quarterly (charged upfront)
                </div>
              </div>
            </div>
            <div className={`mt-4 ${styles.freePlanListItem}`}>
              <CheckOutlined />
              {' '}
              Based on weight only
            </div>
            <div className={styles.freePlanListItem}>
              <CheckOutlined />
              {' '}
              Weight only
            </div>
            <div className={styles.freePlanListItem}>
              <CheckOutlined />
              {' '}
              Limited
            </div>
            <div className={styles.freePlanListItem}>
              <CheckOutlined />
              20
            </div>
            <div className={styles.freePlanListItem}>
              <CheckOutlined />
              Limited
            </div>
            <div className={styles.freePlanListItem}>
              <CheckOutlined />
              30
            </div>
            <div>
              <AverageHover
                style={{
                  position: 'relative',
                  bottom: '150px',
                  left: '200px',
                  marginBottom: '-150px',
                }}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`${styles.proceedButton} btn btn-light py-2 mt-2`}
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          FAQ
        </div>
        <div className={styles.faqDescription}>
          Mauris velit quam, dignissim vel ullamcorper vitae,
          egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum,
        </div>
        <Collapse
          expandIconPosition="right"
          onChange={onChange}
        >
          <Panel header="Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse
          expandIconPosition="right"
          onChange={onChange}
        >
          <Panel header="Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse
          expandIconPosition="right"
          onChange={onChange}
        >
          <Panel header="Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default withRouter(PricingPage);