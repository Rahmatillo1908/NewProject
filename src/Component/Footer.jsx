import React from 'react'
import img from "../Component/img.png"
import "./Call.css"
const Footer = () => {
    return (
        <div className='footer text-center'>
            <div className="input">
                <input type="text" placeholder='Name' /> <br />
                <input type="email" placeholder='Email' /> <br />
                <input type="text" placeholder='Budget' /> <br />
                <button className='send'>Send Massage</button> <br />
                <img src={img} className="text-white mt-3 mb-3" alt="" />
                <h6 className='text-white mt-2 pb-5'>Minimal Template made in Webflow. All rights reserved.</h6>
            </div>
        </div>
    )
}

export default Footer