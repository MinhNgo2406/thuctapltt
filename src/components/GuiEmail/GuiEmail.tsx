import React from 'react'
import logo from '../../assets/Login/Vector.png';
import hinh1 from '../../assets/Login/Frame 923.png';
import hinh2 from '../../assets/Login/Frame 924.png';
import hinh3 from '../../assets/Login/Frame 931.png';
import HinhATM from '../../assets/Login/Group.png';
import bonghinhatm from '../../assets/Login/bong.png';
import { Link } from 'react-router-dom';
import './GuiEmail.css';


export default function forgetpassword() {
    return (
        <div className="GuiEmail">
            <div className="utube_mail">
                <img src={logo} alt="" className="utube2_mail" />
            </div>
            <div className="forgetpass1">
                <div className="left">
                    <img src={HinhATM} alt="" className="atm_email" />
                    <img src={hinh1} alt="" className="f1_email" />
                    <img src={hinh2} alt="" className="f2_email" />
                    <img src={hinh3} alt="" className="f3_email" />
                    <img src={bonghinhatm} alt="" className="bongatm1" />
                    <p className="iconpic"></p>
                </div>
                <div className="right">
                    <h3 className="thongtin">Khôi phục mật khẩu</h3>
                    <br/>
                    <h2 className="thongtinnho">Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</h2>
                    <h2 className="thongtinnho2">Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</h2>
                    <Link to="/" className="link">
                        <p className="quaylaitrangdangnhap_email"><u>Quay lại trang đăng nhập</u></p>
                    </Link>

                </div>
            </div>
        </div>
    )
}
