import React from 'react'
import './Qlcb.css'
import { DatePicker } from 'antd';
import moment from 'moment';
import search from '../../assets/dashboard/timkiem.png';
import Down from '../../assets/dashboard/Down.png';
export default function Qlcb() {
    const dateFormat = 'DD/MM/YYYY';
    return (
        <div className="qlcb">
            <div className="tieude7">
                Quản lý cảnh báo
            </div>
            <div className="GSMID">

                <br />
                <label className="GsmId">GSM: </label><br />
                <input type="text" className="ID" name="GID" placeholder="GSM ID" /><br />
                <br />
            </div>
            <div className="khvuc">
                <br />
                <label className="khuvuc">Khu vực: </label><br />
                <div className="timkiem">
                </div>
                <input type="text" className="nhapdiachi" name="kvdc" placeholder="Nhập địa chỉ" /><br />
                <br />
                <img src={search} alt="" className="search1" />
            </div>
            <div className="lcb">

                <br />
                <label className="tatca">Loại cảnh báo: </label><br />
                <input type="text" className="boxtc" name="tccb" placeholder="Tất cả" /><br />
                <br />
                <img src={Down} alt="" className="down" />
            </div>
            <div className="tt">
                <br />
                <label className="ttname">Trạng thái: </label><br />
                <input type="text" className="boxtt" name="tt" placeholder="Tất cả" /><br />
                <br />

                <img src={Down} alt="" className="down1" />

            </div>
            <div className="time">
                <label className="texttime">Thời gian: </label><br />
                <div className="boxtime">
                    <DatePicker defaultValue={moment()} format={dateFormat} />
                </div>
            </div>
            <div className="tk">
                <button type="button" className="btntimkiem">
                    <p className="btntennuttimkiem">Tìm</p>
                </button>
            </div>
        </div>
    )
}
