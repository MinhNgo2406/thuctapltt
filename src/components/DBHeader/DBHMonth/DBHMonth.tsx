import React from 'react';
import './DBHMonth.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function DBHMonth() {
    const monthF = 'MM/YYYY';
    return (
        <div>
            <div className="DBHMonth">
                <div className="DBH">
                    <div className="DBHtitle2">
                        <h3 className="titleN">DashBoard</h3>
                        <h4 className="TitleD">Thứ 2, Ngày 05/06/2021</h4>
                    </div>
                    <div className="DBHW4">
                        <div className="DBHLeft">
                            <Link to="/router" className="LinkD2" >
                                Ngày
                            </Link>
                            <Link to="/Week" className="LinkW2" >
                                Tuần
                            </Link>
                            <Link to="/Month" className="LinkM2 active" >
                                Tháng
                            </Link>
                            <Link to="/Year" className="LinkY2">
                                <div className="DBHYear">Năm</div>
                            </Link>
                        </div>
                        <div className="DBHRight">
                            <div className="DBHtitle">Thời Gian : </div>
                            <DatePicker defaultValue={moment('06/2021', monthF)} picker="month" format={monthF} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
