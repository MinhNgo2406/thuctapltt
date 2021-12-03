import React from 'react'
import logo from '../../assets/Login/Vector.png';
import hinh1 from '../../assets/Login/Frame 923.png';
import hinh2 from '../../assets/Login/Frame 924.png';
import hinh3 from '../../assets/Login/Frame 931.png';
import HinhATM from '../../assets/Login/Group.png';
import bonghinhatm from '../../assets/Login/bong.png';
/* import hidepass from '../../assets/Login/eye.png'; */
import { Link } from 'react-router-dom';
import './Login.css';



export default function Login() {
    return (
        <div className="Login">
            <div className="Bg_youtube">
                <img src={logo} alt="" className="Youtube" />
            </div>
            <div className="Login_Content">
                <div className="Contentleft">
                    <img src={HinhATM} alt="" className="atm" />
                    <img src={hinh1} alt="" className="f1" />
                    <img src={hinh2} alt="" className="f2" />
                    <img src={hinh3} alt="" className="f3" />
                    <img src={bonghinhatm} alt="" className="bongatm" />
                    <p className="bg_ATM"></p>
                </div>
                <div className="Contentright">
                    <h3 className="NameLogin">Đăng nhập</h3>
                    <form className="Contentlogin">
                        <br />
                        <label className="tendangnhap">Tên Đăng Nhập</label><br />
                        <input type="text" className="unamelogin" name="Uname" placeholder="Nhập tài khoản" /><br />
                        <br />
                        <label htmlFor="tdn" className="matkhau">Mật Khẩu</label><br />
                        <input type="password" className="upassword" name="pword" placeholder="Nhập mật khẩu" />
                        {/* <img src={hidepass} alt="" className="hidepass" /> */}
                        <br />
                        <br />
                        <input type="checkbox" className="chkpass" name="savepass"></input>
                        <label htmlFor="savepass" className="savepass"> Ghi nhớ đăng nhập</label><br />
                        <Link to="/router" className="btnchuyen">
                            <button type="button" className="btnlogin">
                                <p className="btntennutlogin">Đăng Nhập</p>
                            </button>
                        </Link>
                    </form>
                    <Link to="/forgetpassword" className="link">
                        <p className="quenmk"><u>Quên mật khẩu</u></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
