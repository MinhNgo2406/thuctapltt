import React from 'react'
import './QTC.css'
import muiten from '../../assets/dashboard/muiten1.png';
import { Link } from 'react-router-dom';
export default function AL() {
    return (
        <div className="QTC1">
            <div className="tieude7">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="muiten4" />
            <div className="tieude8">
                Quyền truy cập
            </div>
            <div className="QTC2">
                <br />
                <label className="QTCtext">Quyền truy cập: </label><br />
                <input type="text" className="NTC" name="DQL" placeholder="Nhập quyền truy cập" /><br />
                
                <br />
            </div>
            <div className="tim4">
                <button type="button" className="btntimkiem4">
                    <p className="btntennuttimkiem3">Tìm</p>
                </button>
            </div>
            <Link to="/themmoi" className="link">
            <div className="themmoi">
                <button type="button" className="btnthem1">
                    <p className="btnthem">+ Thêm mới</p>
                </button>
            </div>
            </Link>
            
            
        </div>
    )
}
