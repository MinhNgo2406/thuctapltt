import React from 'react'
import './QLND_Update.css'
import muiten from '../../../assets/dashboard/muiten1.png';
export default function QLND_Update() {
    return (
        <div className="QLND_update">
            <div className="tieudeQLND5">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="mui3" />
            <div className="tieudeQLND3">
                Quản lý người dùng
            </div>
            <img src={muiten} alt="" className="mui4" />
            <div className="tieudethem3">
                Cập nhật
            </div>
        </div>
    )
}
