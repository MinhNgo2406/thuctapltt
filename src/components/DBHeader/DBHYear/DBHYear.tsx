import React from 'react';
import './DBHYear.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DatePicker } from 'antd';

export default function DBHYear() {
    const yearF = 'YYYY';
    return (
        <div className="DBHYear">
            <div className="DBH">
                <div className="DBHWtitle">
                    <h3 className="titleN">DashBoard</h3>
                    <h4 className="titleD">Thứ 2, Ngày 05/06/2021</h4>
                </div>
                <div className="DBHW2">
                    <div className="DBHLeft">
                        <Link to="/router" className="LinkD3" >
                            Ngày
                        </Link>
                        <Link to="/Week" className="LinkW3" >
                            Tuần
                        </Link>
                        <Link to="/Month" className="LinkM3" >
                            Tháng
                        </Link>
                        <Link to="/Year" className="LinkY3 active">
                            <div className="DBHYear">Năm</div>
                        </Link>
                    </div>
                    <div className="DBHRight">
                        <div className="DBHtitle">Thời Gian : </div>
                        <DatePicker defaultValue={moment('2021', yearF)} picker="year" format={yearF} />
                    </div>
                </div>
            </div>
        </div>
    )
}
