import * as React from 'react';
import './DBHeader.css';
import moment from 'moment';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';



export default function DBHeader() {
    const dateFormat = 'DD/MM/YYYY';
    return (
        <div className="DBHeader">
            <div className="DBH">
                <div className="DBHtittle">
                    <h3 className="titleN">DashBoard</h3>
                    <h4 className="titleD">Thứ 2, Ngày 05/06/2021</h4>
                </div>
                <div className="DBHW1">
                    <div className="DBHLeft">
                        <Link to="/router" className="LinkDate active" >
                            Ngày
                        </Link>
                        <Link to="/Week" className="LinkWeek">
                            Tuần
                        </Link>
                        <Link to="/Month" className="LinkMonth" >
                            Tháng
                        </Link>
                        <Link to="/Year" className="LinkYear" >
                            Năm
                        </Link>
                    </div>
                    <div className="DBHRight">
                        <div className="DBHRtitle">Thời Gian : </div>
                        <DatePicker defaultValue={moment()} format={dateFormat} />
                    </div>
                </div>
            </div>
        </div>
    )
}
