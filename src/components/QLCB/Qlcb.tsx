import React from 'react'
import './Qlcb.css'
import { DatePicker } from 'antd';
import moment from 'moment';
import search from '../../assets/dashboard/timkiem.png';
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
                    <h4>Chưa xử lý</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Đã xử lý</h4>
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
            <div className="qlcb_tieude">
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
                <div className="loaitimkiemdropdown">
                    <Dropdown overlay={loaitimkiemdropdownmenu} placement="bottomLeft">
                        <input type="text" className="boxtc" name="tccb" placeholder="Tất cả" />

                    </Dropdown>
                </div>
                <br />
                <img src={Down} alt="" className="down3" />
            </div>
            <div className="tt">
                <br />
                <label className="ttname">Trạng thái: </label><br />
                <div className="ttdropdown">
                    <Dropdown overlay={trangthaidropdown} placement="bottomLeft">
                        <input type="text" className="boxtt" name="tt" placeholder="Tất cả" />
                    </Dropdown>
                </div>
                
                <br />
                <img src={Down} alt="" className="down4" />

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
