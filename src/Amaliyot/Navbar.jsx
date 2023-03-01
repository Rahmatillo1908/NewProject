import React from 'react'
import img1 from "../Amaliyot/Rasmlar/img1.jpg"
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className="container">
                    <div className="topNavbar w-50">
                        <img className='imgNavbar' src={img1} alt="" />
                        <h6 className='logoName m-3' >International Legal Center</h6>
                    </div>
                    <div className="number d-flex">
                        <div className="call mr-3">8 (800) 511-37-68</div>
                        <button className='btn1'>Chiqish</button>
                    </div>
                </div>
            </div>
            <div className="navbar2 container">
                <h5>Kompaniya</h5>
                <h5>Chegirma</h5>
                <h5>Haqida</h5>
                <h5>Tariflar</h5>
                <h5>FAQ</h5>
                <h5>Qo'ng'iroqlar</h5>



            </div>
        </>
    )
}

export default Navbar