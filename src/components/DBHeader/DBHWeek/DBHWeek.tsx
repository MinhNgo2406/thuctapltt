import React from 'react';
import './DBHWeek.css';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DatePicker } from 'antd';

export default function DBHWeek() {
    const dateF = 'DD/MM/YYYY';
    const weekF = 'DD';
    const customWeekStartEndFormat = (value: moment.MomentInput) =>
        `${moment(value).startOf('week').format(weekF)} - ${moment(value)
            .endOf('week')
            .format(dateF)}`;
    return (
        <div className="DBHWeek">
            <div className="DBH">
                <div className="DBHWtitle">
                    <h3 className="titleN">DashBoard</h3>
                    <h4 className="titleD">Thứ 2, Ngày 05/06/2021</h4>
                </div>
                <div className="DBHW1">
                    <div className="DBHLeft">
                        <Link to="/router" className="LinkD" >
                            Ngày
                        </Link>
                        <Link to="/Week" className="LinkW active" >
                            Tuần
                        </Link>
                        <Link to="/Month" className="LinkM" >
                            Tháng
                        </Link>
                        <Link to="/Year" className="LinkY">
                            <div className="DBHYear">Năm</div>
                        </Link>
                    </div>
                    <div className="DBHRight">
                        <div className="DBHtitle">Thời Gian : </div>
                        <DatePicker defaultValue={moment()} format={customWeekStartEndFormat} picker="week" />
                    </div>
                </div>
            </div>
        </div>
    )
}
