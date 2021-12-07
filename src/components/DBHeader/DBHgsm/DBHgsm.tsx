import React from 'react'
import './DBHgsm.css';
import Timkiem from '../../../assets/dashboard/timkiem.png';
import { Menu, Dropdown, Button, Space } from 'antd';

export default function DBHgsm() {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Giang Văn Minh</h4>
                    <h5>16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội</h5>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Nguyễn Ái Quốc</h4>
                    <h5>1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Biên Hòa, Đồng Nai</h5>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Nguyễn Thanh Đằng</h4>
                    <h5>Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP.Bài Rịa, Vũng Tàu</h5>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Giang Văn Minh</h4>
                    <h5>16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội</h5>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Giang Văn Minh</h4>
                    <h5>16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội</h5>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Nguyễn Ái Quốc</h4>
                    <h5>1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Biên Hòa, Đồng Nai</h5>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="">
                    <h4>ATM - Nguyễn Thanh Đằng</h4>
                    <h5>Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bà Rịa, Vũng Tàu</h5>
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="DBHgsm">
            <div className="timdiemgiamsat1">
                Tìm điểm giám sát
            </div>
            <div className="nhapdiadiem">Điểm giám sát </div>
            <div className="dropdowntimkiem">
                <Dropdown overlay={menu} placement="bottomLeft" className="search">
                    <input type="text" className="search" name="searchatm" placeholder="nhập địa điểm" />
                </Dropdown>

                <img src={Timkiem} alt="" className="TimKiem" />
            </div>



        </div>
    )
}
