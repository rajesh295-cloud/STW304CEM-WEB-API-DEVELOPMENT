import React from 'react';
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../uploads/iphone.jpg';
import slider2 from '../uploads/samsung-phone-thumb.jpg';
import slider3 from '../uploads/refurbished-products.jpeg';
import slider4 from '../uploads/repairphone.jpg';


const Slider = () => {
	var settings = {
	    dots: true,
	    infinite: true,
	    speed: 500,
	    slidesToShow: 1,
	    slidesToScroll: 1
	  };

	return(
			<>
			    {/* <section className="hero">
			        <div className="hero-container">
			        	<SliderSlick {...settings}>
					      <div>
					        <img src={slider1} />
					      </div>
					      <div>
					        <img src={slider2} />
					      </div>
					      <div>
					        <img src={slider3} />
					      </div>
					      <div>
					        <img src={slider4} />
					      </div>					     
					    </SliderSlick>
			        </div>
			    </section> */}
			</>
		)
}

export default Slider;