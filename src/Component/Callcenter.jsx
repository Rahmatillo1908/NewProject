import React from 'react'
import './Call.css'
import image5 from "../Component/Assents/IMAGE (5).png"
import image6 from "../Component/Assents/IMAGE (6).png"
import image7 from "../Component/Assents/IMAGE (7).png"
import { FaTelegram, FaTwitter, FaFacebookSquare } from "react-icons/fa"

const Callcenter = () => {
    return (
        <div className='calldiv'>
            <div className="container ">
                <h2>LET’s Get in touch</h2>
                <div className="chiziq"></div>
                <div className="center d-flex">
                    <div className="aloqauchun">
                        <img src={image5} alt="" />
                        <h3>MEET US IN PERSON</h3>
                        <h6>8776 Juniper Street</h6>
                        <h6>Unit #204</h6>
                        <h6>Merriweather, Ontorio</h6>
                        <h6>Canada</h6>
                    </div>
                    <div className="aloqauchun">
                        <img src={image6} alt="" />
                        <h3>The traditional way</h3>
                        <h6>Email us</h6>
                        <h6>contact@minimal.com</h6> <br />
                        <h6>Contact form</h6>
                        <h6>Scroll down</h6>
                    </div>
                    <div className="aloqauchun text-center">
                        <img src={image7} alt="" />
                        <h3>Let’s get social</h3>
                        <h6><FaFacebookSquare className='mt-2' /> Facebook</h6>
                        <h6><FaTwitter className='mt-2' /> Twitter</h6>
                        <h6><FaTelegram className='mt-2' /> Telegram</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Callcenter