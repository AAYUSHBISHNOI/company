import React from 'react'
import { Col, Row } from 'react-bootstrap'
import card from "../assets/img/img.png";
import gray from "../assets/img/grey.png";

const Start = () => {
  return (
    <div className=' bg_start position-relative z-3'>
      <img className=' position-absolute img_grey z-n1' src={gray} alt="" />
        <div className="custom_container pt_151">
            <Row className=' align-items-center'>
              <Col lg={6}>
                <p className=' ff_DMSans fs_12 fw_700 lnht_122 letter_space pt_24 text-uppercase txt_clr_6'>start with us</p>
                <h2 className=' ff_DMSans fs_48 fw_500 lnht_122 text-white'>Start working <span className=' d-lg-block'>faster today</span></h2>
                <p className=' ff_DMSans fs_20 fw_400 lnht_170 text-white pt_24'>We know the best solution for all of your <span className=' d-lg-block'> business ideas and we can help you solve</span> <span className=' d-lg-block'> all business problems</span></p>
                <button className=' ff_DMSans fs_14 fw_700 lnht_148 letter_space_1 text-uppercase txt_clr_7 button_get mt_30'>Get started</button>
              </Col>
              <Col lg={6}>
                <img className=' w-100' src={card} alt="" />
              </Col>
            </Row>
        </div>
    </div>
  )
}

export default Start