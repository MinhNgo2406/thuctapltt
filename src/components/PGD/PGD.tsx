import React from 'react'
import './PGD.css'
import { DatePicker } from 'antd';
import moment from 'moment';
import muiten from '../../assets/dashboard/muiten1.png'
export default function Qlcb() {
    const dateFormat = 'DD/MM/YYYY';
    return (
        <div className="qlcb">
            <div className="tieude1">
                Báo Cáo
            </div>
            <img src={muiten} alt="" className="muiten" />
            <div className="tieude2">
                Báo cáo theo phòng giao dịch
            </div>
            <div className="DVQL">
                <br />
                <label className="NDVQL">Đơn vị quản lý: </label><br />
                <input type="text" className="QL" name="DQL" placeholder="Nhập đơn vị quản lý" /><br />
                <br />
            </div>
            <div className="LCB">
                <br />
                <label className="LCBtext">Loại cảnh báo: </label><br />
                <input type="text" className="LCBbox" name="DQL" placeholder="Tất cả" /><br />
                <br />
            </div>
            <div className="tt2">
                <br />
                <label className="tttext">Trạng thái: </label><br />
                <input type="text" className="ttbox" name="DQL" placeholder="Tất cả" /><br />
                <br />
            </div>
            <div className="time2">
                <label className="texttime">Thời gian: </label><br />
                <div className="boxtime">
                    <DatePicker defaultValue={moment()} format={dateFormat} />
                </div>
            </div>
            <div className="tk1">
                <button type="button" className="btntimkiem2">
                    <p className="btntennuttimkiem">Tìm</p>
                </button>
            </div>
            <div className="tk2">
                <button type="button" className="btnxuatfile1">
                    <p className="btnxuatfile">Xuất File Excel</p>
                </button>
            </div>
            
        </div>
    )
}
