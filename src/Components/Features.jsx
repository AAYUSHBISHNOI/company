import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Audit, Bussiness, Data, Drive, Handle, Uxx } from './Mysvg'
import blue from "../assets/img/blue.png";
import gray from "../assets/img/gray.png";

const Features = () => {
  return (
    <div className=' mt-5 pt-5 position-relative z-3 mb-5 pb-5'>
        <img className=' d-none position-absolute blue_img z-n1' src={blue} alt="" />
        <img className=' d-none position-absolute gray_img z-n1' src={gray} alt="" />
        <div className=' custom_container mt-5 pt-5'>
            <p className=' text-uppercase txt_clr_1 fw_700 fs_12 lnht_122'>features</p>
            <h2 className=' txt_clr_2 ff_DMSans fw_500 fs_48 lnht_122 mt_24'>We are here to help <span className=' d-lg-block'> you with</span></h2>
            <Row className=' justify-content-between pt_32'>
                <Col lg={4}>
                    <div className=' card_feature'>
                        <Bussiness/>
                        <p className=' ff_DMSans lnht_136 txt_clr_2 fw_700 fs_22'>Grow your business</p>
                        <p className=' txt_clr_3 ff_DMSans fs_16 fw_400 pt_15 lnht_150'><span className='fw_700'>The magic wand</span> for success is in <span className=' d-lg-block'>figuring out how to bring in the profits</span><span className=' d-lg-block'> and ensure the capacity needed to</span><span className=' d-lg-block'> sustain that growth for posterity.</span></p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className=' card_featured'>
                        <Drive/>
                        <p className=' ff_DMSans lnht_136 txt_clr_2 fw_700 fs_22'>Drive more sales</p>
                        <p className=' txt_clr_3 ff_DMSans fs_16 fw_400 pt_15 lnht_150'>A potential customer, once lost, is hard <span className=' d-lg-block'> to retain back. <span className=' fw_700'>But keeping some critical</span></span><span className=' d-lg-block'> factors in mind, we can, for sure, use</span><span className=' d-lg-block'> these loyalty programs as customer</span><span className=' d-lg-block'> retention tools.</span></p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className=' card_featured'>
                        <Handle/>
                        <p className=' ff_DMSans lnht_136 txt_clr_2 fw_700 fs_22'>Handle by Expert</p>
                        <p className=' txt_clr_3 ff_DMSans fs_16 fw_400 pt_15 lnht_150'>We know how we candevelop deep, <span className=' d-lg-block'>trust-based relationships with our clients,</span> <span className=' d-lg-block'> and work together more collaboratively</span></p>
                    </div>
                </Col>
                <Col lg={4} className='pt_24'>
                    <div className=' card_featured'>
                        <Uxx/>
                        <p className=' ff_DMSans lnht_136 txt_clr_2 fw_700 fs_22'>UX Research</p>
                        <p className=' txt_clr_3 ff_DMSans fs_16 fw_400 pt_15 lnht_150'>UX research is the systematic study of <span className=' d-lg-block'>target users and their requirements, to</span> <span className=' d-lg-block'> add realistic contexts and insights to</span><span className=' d-lg-block'> design processes.</span></p>
                    </div>
                </Col>
                <Col lg={4} className='pt_24'>
                    <div className=' card_featured'>
                        <Audit/>
                        <p className=' ff_DMSans lnht_136 txt_clr_2 fw_700 fs_22'>Handle by Expert</p>
                        <p className=' txt_clr_3 ff_DMSans fs_16 fw_400 pt_15 lnht_150'>An audit examines your business's <span className=' d-lg-block'> financial records to verify they are</span> <span className=' d-lg-block'>accurate. This is done through a</span> <span className=' d-lg-block'> systematic review of your transactions. </span></p>
                    </div>
                </Col>
                <Col lg={4} className='pt_24'>
                    <div className=' card_featured'>
                        <Data/>
                        <p className=' ff_DMSans lnht_136 txt_clr_2 fw_700 fs_22'>Data tracking</p>
                        <p className=' txt_clr_3 ff_DMSans fs_16 fw_400 pt_15 lnht_150'>The hardware and software, which when <span className=' d-lg-block'>used together allows you to know where</span> <span className=' d-lg-block'> something is at any point in time</span></p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Features