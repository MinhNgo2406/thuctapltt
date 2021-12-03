import React from 'react'
import logo from '../../assets/Login/Vector.png';
import hinh1 from '../../assets/Login/Frame 923.png';
import hinh2 from '../../assets/Login/Frame 924.png';
import hinh3 from '../../assets/Login/Frame 931.png';
import HinhATM from '../../assets/Login/Group.png';
import bonghinhatm from '../../assets/Login/bong.png';
import { Link } from 'react-router-dom';
import './forgetpassword.css';


export default function forgetpassword() {
    return (
        <div className="forgetpassword">
            <div className="utube">
                <img src={logo} alt="" className="utube2" />
            </div>
            <div className="forgetpass1">
                <div className="Contentleft1">
                    <img src={HinhATM} alt="" className="atm1" />
                    <img src={hinh1} alt="" className="f1" />
                    <img src={hinh2} alt="" className="f2" />
                    <img src={hinh3} alt="" className="f3" />
                    <img src={bonghinhatm} alt="" className="bongatm1" />
                    <p className="icon1"></p>
                </div>
                <div className="Contentright">
                    <h3 className="NameLogin">Quên mật khẩu</h3>
                    <form className="Contentlogin">
                        <br /><label className="email">Email</label><br />
                        <input type="text" className="unamelogin" name="Uname" placeholder="altamedia@gmail.com" /><br />
                        <Link to="/GuiEmail" className="link">
                        <button type="button" className="btngui" >
                            <p className="btntennutgui">Gửi Email</p>
                        </button>
                        </Link>

                    </form>
                    <Link to="/" className="link">
                        <p className="quaylaitrangdangnhap"><u>Quay lại trang đăng nhập</u></p>
                    </Link>

                </div>
            </div>
        </div>
    )
}
