import React from 'react'
import "./Temas.css"
import img18 from '../Component/Assents/img18.png'
import img17 from '../Component/Assents/img17.png'
import img16 from '../Component/Assents/img16.png'
import img15 from '../Component/Assents/img15.png'
import vector from "../Component/Assents/Vector1.png"
import human1 from "../Component/Assents/human1.png"
import human2 from "../Component/Assents/human2.png"
import { FaTwitter, FaTelegram } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { RiBasketballLine } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'


const Teams = () => {
    return (
        <div className='temas mt-5'>
            <h2>our team</h2>
            <div className='chiziq mt-5'></div>
            <div className="jamoa container">
                <div className="board">
                    <img className="card-img-top" src={img18} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>Ron Swanson</h4>
                            <h6>Founder</h6>
                            <h5 className='icon mt-3'>
                                <span><FaTwitter /></span>
                                <span><FaTelegram /></span>
                                <span><GrMail /></span>
                            </h5>
                        </p> </div>
                </div>
                <div className="board">
                    <img className="card-img-top" src={img17} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>Julia Depish</h4>
                            <h6>Marketing</h6>
                            <h5 className='icon mt-3'>
                                <span><FaTwitter /></span>
                                <span><FaTelegram /></span>
                                <span><GrMail /></span>
                            </h5>
                        </p> </div>
                </div>
                <div className="board">
                    <img className="card-img-top" src={img16} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>Danny Devry</h4>
                            <h6>Designer</h6>
                            <h5 className='icon mt-3'>
                                <span><AiFillInstagram /></span>
                                <span><RiBasketballLine /></span>
                                <span><FaTwitter /></span>
                                <span><FaTelegram /></span>
                                <span><GrMail /></span>
                            </h5>
                        </p> </div>
                </div>
                <div className="board">
                    <img className="card-img-top" src={img15} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>Lisa Smith</h4>
                            <h6>Developer</h6>
                            <h5 className='icon mt-3'>
                                <span><FaTwitter /></span>
                                <span><FaTelegram /></span>
                                <span><GrMail /></span>
                            </h5>
                        </p> </div>
                </div>
            </div>
            <div className="vector">
                <div className="container">
                    <img className='rasm1' src={vector} alt="" width="70px" height="70px" />
                    <div className="fikr d-flex">
                        <div className="he text-center">
                            <h4 className=' mb-5'>“I love these guys! They did a <br /> great job. I would recommend <br /> them to  anyone.”</h4>
                            <img src={human1} alt="" />
                            <h5>Julius Von Uberstien</h5>
                        </div>
                        <div className="she">
                            <h4 className=' mb-5'>“Elexis Corp. has grown <br /> immensely with the help <br /> of Minimal.”</h4>
                            <img src={human2} alt="" />
                            <h5>Rachel Stamos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams