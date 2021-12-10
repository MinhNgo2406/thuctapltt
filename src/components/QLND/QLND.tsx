import React from 'react'
import './QLND.css'
import muiten from '../../assets/dashboard/muiten1.png';
import { Link } from 'react-router-dom';
export default function QLND() {
    return (
        <div className="quanlynguoidung">
            <div className="tieudeqlnd">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="muitenqlnd" />
            <div className="tieude8">
                Quản lý người dùng
            </div>
            <div className="QTC2">
                <br />
                <label className="QTCtext">Thông tin người dùng: </label><br />
                <input type="text" className="NTC" name="DQL" placeholder="Nhập thông tin người dùng" /><br />
                <br />
            </div>
            <div className="tim4">
                <button type="button" className="btntimkiem4">
                    <p className="btntennuttimkiem3">Tìm</p>
                </button>
            </div>
            <Link to="/qlndadd" className="link">
                <div className="themmoi">
                    <button type="button" className="btnthem1">
                        <p className="btnthem">+ Thêm mới</p>
                    </button>
                </div>
            </Link>


        </div>
    )
}
