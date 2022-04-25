/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import {
  StarFilled,
} from '@ant-design/icons';
import sliderImageOne from '../../../images/login/sliderImage1.png';
import sliderImageTwo from '../../../images/login/sliderImage2.png';
import sliderStyles from './authSlider.module.scss';
import LogoWhite from '../../../images/Logo-white.png';

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
    image:sliderImageOne,
    alt: 'Alt text 1',
    text: 'Suspendisse aliquam, ligula et ultricies aliquet, justo justo varius urna, vitae fringilla purus orci at elit.',
    name: 'Marry Doe',
    rating: [1, 2, 3, 4, 5],
  },
  {
    image:sliderImageTwo,
    alt: 'Alt text 1',
    text: 'Suspendisse aliquam, ligula et ultricies aliquet, justo justo varius urna, vitae fringilla purus orci at elit.',
    name: 'Marry Doe',
    rating: [1, 2, 3, 4, 5],
  },
];

const AuthSlider = () => (
  <Slider
    {...sliderSettings}
  >
    {
 slides.length > 0 && slides.map((testimonial, i) => (
   <div key={`testimonial-${i}`}>
     <div
       style={{
         backgroundImage: `url(${testimonial.image})`,
       }}
       className={sliderStyles.testimonialContainer}
     >
       <div className={sliderStyles.logo}>
         <img
           src={LogoWhite}
           alt="Logo"
         />
       </div>
       <div className={sliderStyles.testimonialText}>
         {testimonial.text}
       </div>
       <div className={`${sliderStyles.testimonialNameAndRating}`}>
         <div className={sliderStyles.testimonialAuthor}>
           {testimonial.name}
         </div>
         <div className={sliderStyles.testimonialRating}>
           {
        testimonial.rating.map((index) => (
          <StarFilled
            key={index}
            className={sliderStyles.stars}
          />
        ))
       }
         </div>
       </div>
     </div>
   </div>
 ))
}
  </Slider>
);

export default AuthSlider;
