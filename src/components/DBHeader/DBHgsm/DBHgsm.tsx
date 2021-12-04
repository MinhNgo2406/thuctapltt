import React from 'react'
import './DBHgsm.css';
import Timkiem from '../../../assets/dashboard/timkiem.png';

export default function DBHgsm() {
    return (
        <div className="DBHgsm">
            <div className="timdiemgiamsat1">
                Tìm điểm giám sát
            </div>
            <div className="nhapdiadiem">Điểm giám sát </div>
            <input type="text" className="search" name="searchatm" placeholder="nhập địa điểm"  />
            <img src={Timkiem} alt="" className="TimKiem" />
            
        </div>
    )
}
