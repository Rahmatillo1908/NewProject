import React from 'react'
import './Brands.css'
import img3 from '../Component/Assents/img3.png'
import img4 from '../Component/Assents/img4.png'
import img5 from '../Component/Assents/img5.png'

const Brands = () => {
    return (
        <div className='brand'>
            <h4 className='h4 mt-5' >How we make brands thrive</h4>
            <div className="imgs container mt-5">
                <div className="imgdiv"><img className='img3' src={img3} alt="" /></div>
                <div className="imgdiv"><img className='img3' src={img4} alt="" /></div>
                <div className="imgdiv"><img className='img3' src={img5} alt="" /></div>
            </div>
            <div className="brand-names d-flex container">
                <div className="brand-item">
                    <h4>SET a target</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.</span>
                </div>
                <div className="brand-item">
                    <h4>design a solution</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.</span>
                </div><div className="brand-item">
                    <h4>track the progress</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.</span>
                </div>
            </div>
        </div>
    )
}

export default Brands