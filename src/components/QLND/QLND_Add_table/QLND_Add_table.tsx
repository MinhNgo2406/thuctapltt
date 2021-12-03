import React from 'react'
import './QLND_Add_table.css';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import muiten from '../../../assets/dashboard/Down.png';
import Eye from '../../../assets/dashboard/eye.png';

export default function QLND_Add_table() {
    return (
        <div className="Table23">
            <div className="login1">
                <label className="login2">Tên đăng nhập:</label>
                <label className="ngoisao_tendangnhap">*</label>
                <input type="text" className="username1" name="DQL" placeholder="Nhập Tên Đăng Nhập" /><br />
            </div>
            <div className='hoten'>
                <label className="hovaten">Họ Tên: </label>
                <label className="ngoisao_hoten">*</label>
                <input type="text" className="nhaphoten" placeholder="Nhập Họ Tên" /><br />
            </div>
            <div className="layemail">
                <label className="email2">Email:</label>
                <label className="ngoisao_email">*</label>
                <input type="text" className="nhapemail" name="DQL" placeholder="Nhập Email" /><br />
            </div>
            <div className="laysdt">
                <label className="sdt1">Số điện thoại:</label>
                <input type="text" className="nhapsdt" name="DQL" placeholder="Nhập Số Điện Thoại" /><br />
            </div>
            <div className="cdvql">
                <label className="vlc">Chọn đơn vị quản lý:</label>
                <label className="ngoisao_cdvql">*</label>
                <input type="text" className="nhapcdvql" name="DQL" placeholder="Vui lòng chọn" /><br />
                <img src={muiten} alt="" className="mui8" />
            </div>
            <div className="qtc">
                <label className="qtcname">Quyền Truy Cập:</label>
                <label className="ngoisao_qtc">*</label>
                <input type="text" className="nhapvlcqtc" name="DQL" placeholder="Vui lòng chọn" /><br />
                <img src={muiten} alt="" className="mui9" />
            </div>
            <div className="password">
                <label className="password1">Mật khẩu:</label>
                <label className="ngoisao_mk">*</label>
                <input type="password" className="nhappassword" name="DQL" placeholder="●●●●●●●●●●" /><br />
                <img src={Eye} alt="" className="hidepass" />
            </div>
            <div className="pass">
                <label className="pass1">Xác nhận mật khẩu:</label>
                <label className="ngoisao_mk2">*</label>
                <input type="password" className="nhappassword1" name="DQL" placeholder="●●●●●●●●●●" /><br />
                <img src={Eye} alt="" className="hidepass1" />
            </div>
            <div className="chuy">
                <label className="thongtinchuy">là những thông tin bắt buộc</label>
                <label className="ngoisao_chuy">*</label>
            </div>
            <Link to="/QLND" className="btnluubai">
                <button type="button" className="btnluu_QLND">
                    <p className="btntennutluu_QLND">Lưu</p>
                </button>
            </Link>
            <Link to="/QLND" className="btnhuy1">
                <button type="button" className="btnhuy_QLND">
                    <p className="btntennuthuy1_QLND">Hủy</p>
                </button>
            </Link>


        </div >
    )
}
