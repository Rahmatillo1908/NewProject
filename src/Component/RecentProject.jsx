import React from 'react'
import './Brands.css';
import img6 from '../Component/Assents/img6.png'
import img7 from '../Component/Assents/img7.png'
import img8 from '../Component/Assents/img8.png'
import img9 from '../Component/Assents/img9.png'
import img10 from '../Component/Assents/img10.png'
import img11 from '../Component/Assents/img11.png'
import img12 from '../Component/Assents/img12.png'
import img13 from '../Component/Assents/img13.png'
import img14 from '../Component/Assents/img14.png'

const RecentProject = () => {
    return (
        <div className='progects mt-5'>
            <h2 className='pt-5'>Recent projects</h2>
            <div className="progect container">
                <div className="card">
                    <img className="card-img-top" src={img6} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>woods</h4>
                            <h6>Photography</h6>
                        </p> </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={img7} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>path</h4>
                            <h6>Website • Photography</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img8} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>darkness</h4>
                            <h6>Website</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img9} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>waves</h4>
                            <h6>Photography</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img10} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>drops</h4>
                            <h6>Website</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img11} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>ocean</h4>
                            <h6>Website</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img12} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>town</h4>
                            <h6>Website</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img13} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>mountain</h4>
                            <h6>Website</h6>
                        </p>
                    </div>
                </div> <div className="card">
                    <img className="card-img-top" src={img14} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">
                            <h4>camera</h4>
                            <h6>Website</h6>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProject