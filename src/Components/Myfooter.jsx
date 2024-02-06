import React from 'react'
import logo from "../assets/img/company.svg";
import { Facebook, Instagram, Twitter } from './Mysvg';

const Myfooter = () => {
  return (
    <div className=' bg-black'>
        <div className=' custom_container pt_84'>
            <div className=' d-lg-flex justify-content-between align-items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <div>
                    <ul className=' d-flex gap_32'>
                    <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Home</a></li>
                    <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Your benefits</a></li>
                 </ul>
                    </div>
                    <div>
                    <ul className=' d-flex gap_32'>
                    <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Our process</a></li>
                    <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Our works</a></li>
                </ul>
                    </div>
                <ul className=' d-flex gap_32'>
                    <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Testimonials</a></li>
                    <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Start a project</a></li>
                </ul>
                </div>
                <div className=' d-flex gap-4'>
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                </div>
            </div>
            <div className=' foter_line'></div>
            <div className='pt_28 d-flex justify-content-between align-items-center'>
                <div>
                    <p className='txt_clr_8 fs_15 fw_400 lnht_166 '>© 2021 Company</p>
                </div>
                <div className=' d-flex gap-4 align-items-center'>
                    <p className='txt_clr_8 fs_15 fw_400 lnht_133 '>Privacy policy</p>
                    <p className='txt_clr_8 fs_15 fw_400 lnht_133 '>Term of service</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myfooter