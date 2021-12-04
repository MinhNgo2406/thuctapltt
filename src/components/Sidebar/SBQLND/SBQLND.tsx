import React from 'react'
import './SBQLND.css';
import pic0 from '../../../assets/dashboard/bentrai/Vector.png';
import pic1 from '../../../assets/dashboard/bentrai/6.png';
import pic2 from '../../../assets/dashboard/bentrai/5.png';
import pic3 from '../../../assets/dashboard/bentrai/1.png';
import pic4 from '../../../assets/dashboard/bentrai/2.png';
import pic5 from '../../../assets/dashboard/bentrai/4.png';
import pic6 from '../../../assets/dashboard/bentrai/8.png';
import pic7 from '../../../assets/dashboard/bentrai/3.png';
import pic8 from '../../../assets/dashboard/bentrai/9.png';
import pic9 from '../../../assets/dashboard/bentrai/7.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarMenu">
                <div className="sidebarBG">
                    <div className="utube5">
                        <img src={pic0} alt="" className="IcSidebar" />
                    </div>
                </div>
                <p className="SbTittle">Tổng quan</p>
                <ul className="SbList">
                    <Link to="/db" className="link">
                        <li className="SbListItem" >
                            <img src={pic1} alt="" className="IconDB" />
                            DashBoard
                        </li>
                    </Link>
                    <Link to="/gsmmap" className="link">
                        <li className="SbListItem" >
                            <img src={pic2} alt="" className="IconDB" />
                            GSM  Modern On Map
                        </li>
                    </Link>
                    <Link to="/qlcb" className="link">
                        <li className="SbListItem" >
                            <img src={pic3} alt="" className="IconDB" />
                            Quản lý cảnh báo
                            <nav className="clrNoti">
                                <div className="sothongbao">12</div>
                            </nav>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="SidebarMenu">
                <p className="SbTittle">Báo cáo</p>
                <ul className="SbList">
                    <Link to="/PGD" className="link">
                        <li className="SbListItem" >
                            <img src={pic4} alt="" className="IconDB" />
                            Báo cáo theo PGD
                        </li>
                    </Link>
                    <Link to="/ATM" className="link">
                        <li className="SbListItem">
                            <img src={pic5} alt="" className="IconDB" />
                            Báo cáo theo ATM
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="SidebarMenu">
                <p className="SbTittle">Quản lý hệ thống</p>
                <ul className="SbList">
                    <Link to="/QTC" className="link">
                        <li className="SbListItem" >
                            <img src={pic6} alt="" className="IconDB" />
                            Quyền truy cập
                        </li>
                    </Link>
                    <Link to="/qltbgsm" className="link">
                        <li className="SbListItem" >
                            <img src={pic7} alt="" className="IconDB" />
                            Quản lý thiết bị GSM
                        </li>
                    </Link>
                    <Link to="/QLND" className="link">
                        <li className="SbListItem active" >
                            <img src={pic8} alt="" className="IconDB" />
                            Quản lý người dùng
                        </li>
                    </Link>
                    <Link to="/AL" className="link">
                        <li className="SbListItem">
                            <img src={pic9} alt="" className="IconDB" />
                            Audit log
                        </li>
                    </Link>
                </ul>
            </div>
        </div>

    )
}
