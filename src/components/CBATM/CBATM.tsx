import React from 'react'
import './CBATM.css'
import { DatePicker } from 'antd';
import moment from 'moment';
import muiten from '../../assets/dashboard/muiten1.png'
import Down from '../../assets/dashboard/Down.png';
import { Menu, Dropdown, Button, Space } from 'antd';
export default function Qlcb() {
    const dateFormat = 'DD/MM/YYYY';
    const trangthaidropdown = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Tất cả</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ON</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>OFF</h4>
                </a>
            </Menu.Item>
        </Menu>
    );
    const loaitimkiemdropdownmenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Tất cả</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến cửa trên máy ATM</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến cửa ngoài máy ATM</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến cửa két máy ATM</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến điều khiển tại chổ bằng Remote RF</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến nhiệt</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến dịch chuyển</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến rung</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảm biến rò điện</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảnh báo khói</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảnh báo khẩn cấp</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Cảnh báo xâm nhập</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Báo động tại chổ</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Báo động qua GSM</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Pin dự phòng</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Tín hiệu kết nối</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Điện áp nguồn</h4>
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="qlcb">
            <div className="tieude3">
                Báo Cáo
            </div>
            <img src={muiten} alt="" className="muiten" />
            <div className="tieude4">
                Báo cáo theo ATM
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
                <Dropdown overlay={loaitimkiemdropdownmenu} placement="bottomLeft">
                    <input type="text" className="LCBbox" name="DQL" placeholder="Tất cả" />
                </Dropdown>
                <br />
                <img src={Down} alt="" className="down" />
                <br />
            </div>
            <div className="tt2">
                <br />
                <label className="tttext">Trạng thái: </label><br />
                <Dropdown overlay={trangthaidropdown} placement="bottomLeft">
                    <input type="text" className="ttbox" name="DQL" placeholder="Tất cả" />
                </Dropdown>
                <br />
                <img src={Down} alt="" className="down1" />
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
