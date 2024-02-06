import React from 'react'
import Slider from "react-slick";
import imgone from "../assets/img/img.svg";
import imgtwo from "../assets/img/img11.svg";
import imgt from "../assets/img/img3.png";
import imgto from "../assets/img/img4.png";
import imgte from "../assets/img/img5.png";
import imgth from "../assets/img/img6.png";
import imgtho from "../assets/img/img7.png";
import imgthe from "../assets/img/img8.png";
import imgtt from "../assets/img/img9.png";
import imgs from "../assets/img/img10.png";

const Brands = () => {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      autoplay:true,
      slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <div>
        <div className="custom_container pt_183 pb_183">
            <p className=' ff_DMSans fs_12 fw_700 txt_clr_1 lnht_122 text-center'>BRANDS</p>
            <h1 className=' ff_DMSans fs_48 fw_500 text-black lnht_122 text-center pt_24'>We work with thousands of the world’s <span className=' d-lg-block'>leading brands</span></h1>
            <Slider {...settings} className=' pt_32'>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
              <img src={imgone} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
              <img src={imgtwo} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
              <img src={imgt} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
              <img src={imgto} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
              <img src={imgte} alt="" />
            </div>
            </Slider>
            <Slider {...settings} className=''>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
            <img src={imgth} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
            <img src={imgtho} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
            <img src={imgthe} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
            <img src={imgtt} alt="" />
            </div>
            <div className=' d-flex justify-content-center justify-content-xxl-start'>
            <img src={imgs} alt="" />
            </div>
            </Slider>
            <p className=' ff_DMSans fs_16 fw_400 txt_clr_5 text-center lnht_148 pt_39'>You're going to be in good company. We work with <span className=' d-lg-block'>world's leading brands.</span></p>
        </div>
    </div>
  )
}

export default Brands