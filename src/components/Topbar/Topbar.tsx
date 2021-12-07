import React from 'react';
import './Topbar.css';
import VN from '../../assets/dashboard/bentrai/VN.png';
import DropDown from '../../assets/dashboard/Down.png';
import Ava from '../../assets/anhdaidien/ava2.jpg';

export default function TopSidebar() {
    return (
        <div className="Topbar">
            <div className="TopWrapper">
                <div className="TopRight">
                    <div className="Topicons">
                        <span className="TopLanguage">
                            <img src={VN} alt="" className="VN" />
                            <p className="Write">VNM</p>
                            <img src={DropDown} alt="" className="DropdownL"/>
                        </span>
                        <span className="Namepic">
                            <img src={Ava} alt="" className="PicAva" />
                            <p className="NAvta">Ngô Đức Minh</p>
                            <img src={DropDown} alt="" className="DropDownPic" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
