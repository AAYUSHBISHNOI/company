import React from 'react'
import cardone from "../assets/img/card1.png";
import cardtwo from "../assets/img/card2.png";
import cardthree from "../assets/img/card3.png";
import { Dataone, Result, Search } from './Mysvg';

const Our = () => {
  return (
    <div  className=' bg_brands'>
        <div className=' custom_container pt_193 pb_183'>
            <p className=' text-uppercase ff_DMSans lnht_122 fs_12 fw_700 txt_clr_4 text-center'>how it works</p>
            <h2 className=' ff_DMSans fs_48 fw_500 lnht_122 text-white text-center pt_14'>Our Process</h2>
            <p className=' ff_DMSans fs_20 fw_400 lnht_170 text-white text-center pt_24'>We know the best solution for all of your business ideas and we can help you <span className=' d-lg-block'>solve all business problems</span></p>
            <div className=' card_our mt_32'>
              <div className=' d-flex gap-4 align-items-center'>
              <div>
                    <img className=' w_90' src={cardone} alt="" />
                </div>
                <div>
                    <Search/>
                    <p className=' fs_22 fw_700 ff_DMSans lnht_136 txt_clr_2 mt_20'>Business Audit</p>
                    <p className=' fs_16 fw_400 ff_DMSans txt_clr_3 lnht_150 mt_15'>An audit examines your business's financial records to verify they are <span className=' d-lg-block'>accurate. This is done through a systematic review of your transactions. </span></p>
                </div>
              </div>
            </div>
            <div className=' card_our mt_40'>
              <div className=' d-flex gap-4 align-items-center'>
              <div>
                    <img className=' w_90' src={cardtwo} alt="" />
                </div>
                <div>
                    <Dataone/>
                    <p className=' fs_22 fw_700 ff_DMSans lnht_136 txt_clr_2 mt_20'>Data tracking</p>
                    <p className=' fs_16 fw_400 ff_DMSans txt_clr_3 lnht_150 mt_15'>The hardware and software, which when used together allows<span className=' d-lg-block'> you to know where something is at any point in time</span></p>
                </div>
              </div>
            </div>
            <div className=' card_our mt_40'>
              <div className=' d-flex gap-4 align-items-center'>
              <div>
                    <img className=' w_90' src={cardthree} alt="" />
                </div>
                <div>
                    <Result/>
                    <p className=' fs_22 fw_700 ff_DMSans lnht_136 txt_clr_2 mt_20'>Results</p>
                    <p className=' fs_16 fw_400 ff_DMSans txt_clr_3 lnht_150 mt_15'>An audit examines your business's financial records to verify they are <span className=' d-lg-block'>accurate. This is done through a systematic review of your transactions. </span></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Our