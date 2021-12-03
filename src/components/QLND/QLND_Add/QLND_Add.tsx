import React from 'react'
import './QLND_Add.css'
import muiten from '../../../assets/dashboard/muiten1.png';
export default function QLND_Add() {
    return (
        <div className="QLND">
            <div className="tieudeQLND4">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="mui1" />
            <div className="tieudeQLND2">
                Quản lý người dùng
            </div>
            <img src={muiten} alt="" className="mui2" />
            <div className="tieudethem2">
                Thêm mới
            </div>
        </div>
    )
}
