import React from 'react'
import { useState } from 'react'
import { Close, Open } from './Mysvg';
import company from "../assets/img/company.svg";

const Myheader = () => {
    const [show, setShow] = useState(false);
    if(show){
      document.body.classList.add("overflow-hidden")
    }else{
      document.body.classList.remove("overflow-hidden")
    }
  return (
    <div className=' bg_header min-vh-100 '>
        <nav className=' d-flex align-items-center pt_34'>
          <div className=' container-fluid d-flex justify-content-between align-items-center pading_nav'>
            <div className=' d-flex align-items-center'>
              <a href="w"><img src={company} alt="" /></a>
            </div>
            <div className=' d-flex align-items-center'>
            <ul className={show ? "open": ""}>
                <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Home</a></li>
                <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Your benefits</a></li>
                <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Our process</a></li>
                <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Our works</a></li>
                <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Testimonials</a></li>
                <li><a href="#Home" className=' fs_16 nav_fw lnht_100 ff_DMSans text-white position-relative headline'>Start a project</a></li>
            </ul>
            <button className='open d-xl-none navicon' onClick={() => {setShow(!show); }}>{show ? <Close/>:<Open/>}</button>
            </div> 
            <div className=' d-none d-lg-block'>
            <button className=' fs_14 fw_700 txt_clr bttn_get lnht_148'>Get started</button>
            </div>
          </div>
        </nav>
        <section className=' padding_130'>
          <div className='custom_container'>
            <h1 className=' ff_DMSans fs_68 fw_500 lnh_120 text-white text-center'>A Digital Product Design Agency</h1>
            <p className=' fs_20 fw_400 ff_DMSans text-white text-center lnht_170 pt-2'>We are Creative and Professional Digital Agency</p>
            <div className=' d-flex justify-content-center mt_41'>
            <button className=' fs_14 fw_700 txt_clr bttn_get lnht_148'>Get started</button>
            </div>
            
          </div>
        </section>
    </div>
  )
}

export default Myheader