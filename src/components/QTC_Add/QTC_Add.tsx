import React from 'react'
import './QTC_Add.css'
import muiten from '../../assets/dashboard/muiten1.png';
export default function QTC_Add() {
    return (
        <div className="QTC1">
            <div className="tieudeQLHT">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="muiten5" />
            <div className="tieudeQLND">
                Quản lý người dùng
            </div>
            <img src={muiten} alt="" className="muiten6" />
            <div className="tieudethem">
                Thêm mới
            </div>
        </div>
    )
}
