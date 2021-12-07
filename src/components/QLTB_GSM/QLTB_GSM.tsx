import React from 'react'
import './QLTB_GSM.css'
import muiten from '../../assets/dashboard/muiten1.png';
import Down from '../../assets/dashboard/Down.png';
import { Menu, Dropdown, Button, Space } from 'antd';

export default function QLTB_GSM() {
    const pgddropdown = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Tất cả</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Phòng giao dịch</h4>
                </a>
            </Menu.Item>
        </Menu>
    );
    const ketnoinguondropdown = (
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
    const canhbaodropdown = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Tất cả</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Bật</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Tắt</h4>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>Dừng</h4>
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="QLTBGSM">
            <div className="tieudeGSM1">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="chiqua" />
            <div className="tieudeGSM">
                Quản lý thiết bị - GSM
            </div>
            <div className="QLTB">
                <br />
                <label className="dgs_GSM">Điểm giám sát: </label><br />
                <input type="text" className="boxdgs" placeholder="GMS ID, địa chỉ..." /><br />
                <br />
            </div>
            <div className="QLTB1">
                <br />
                <label className="apgd_GSM">ATM / Phòng giao dịch: </label><br />
                <Dropdown overlay={pgddropdown} placement="bottomLeft">
                    <input type="text" className="boxapgd_GSM" placeholder="Tất cả" />
                </Dropdown>
                <br />
                <img src={Down} alt="" className="muixuong" />
                <br />
            </div>
            <div className="QLTB3">
                <label className="knn_GSM">Kết nối nguồn: </label><br />
                <Dropdown overlay={ketnoinguondropdown} placement="bottomLeft">
                    <input type="text" className="boxknn" placeholder="Tất cả" />
                </Dropdown>
                <br />
                <img src={Down} alt="" className="chiqua1" />
            </div>
            <div className="QLTB4">
                <label className="knm_GSM">Kết nối mạng: </label><br />
                <Dropdown overlay={ketnoinguondropdown} placement="bottomLeft">
                    <input type="text" className="boxknm" placeholder="Tất cả" />
                </Dropdown>
                <br />
                <img src={Down} alt="" className="chiqua2" />
            </div>
            <div className="QLTB5">
                <label className="cb_GSM">Cảnh báo: </label><br />
                <Dropdown overlay={canhbaodropdown} placement="bottomLeft">
                    <input type="text" className="boxcb" placeholder="Tất cả" />
                </Dropdown>
                <br />
                <img src={Down} alt="" className="chiqua3" />
            </div>
            <div className="QLTB6">
                <button type="button" className="tim_GSM">
                    <p className="btntimkiem_GSM">Tìm</p>
                </button>
            </div>
            <div className="QLTB7">
                <button type="button" className="themmoi_GSM">
                    <p className="btnthemmoi_GSM">+ Thêm Mới</p>
                </button>
            </div>

        </div>
    )
}
