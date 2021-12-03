import React from 'react'
import './QTC_Update.css'
import muiten from '../../assets/dashboard/muiten1.png';
export default function QTC_Update() {
    return (
        <div className="QTC1">
            <div className="tieude10">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="muiten5" />
            <div className="tieude11">
                Quán lý người dùng
            </div>
            <img src={muiten} alt="" className="muiten6" />
            <div className="tieude12">
                Cập nhật
            </div>
        </div>
    )
}
