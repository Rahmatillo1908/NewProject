import React from 'react'
import imagee from '../Component/img.png'

const Navbar = () => {
    return (
        <div className='sayohat'>
            <div className="navbar container">
                <div className="nav">
                    <img className='img1 mr-5' src={imagee} alt="" />
                    <h3>Minimal</h3>
                </div>
                <div className="bar">
                    <span className='span'>process</span>
                    <span className='span'>projects</span>
                    <span className='span'>team</span>
                    <span className='span'>contact</span>
                </div>
            </div>
            <div className="header text-center">
                <div className='headers'>
                    <h1 className='h1'>MAKING BRANDS STAND OUT <br /> IS OUR OBSESSIONS</h1>
                    <div className='chiziq mt-4'></div>
                    <div className='let mt-5'>Let us help your brand stand out.</div>
                </div>
            </div>
            <div className="lorem">
                <h6 className='lorems container'> Minimalist is a full-service digital creative agency located in Ontorio Canada. We focus on design, consulting, technology, and photography. We’ve been building unique digital products, platforms, and experiences for the past 6 years. Let us help your company grow.
                    Get in Touch</h6>
                <button className='btn1'>Get in Touch</button>
            </div>
        </div>
    )
}

export default Navbar