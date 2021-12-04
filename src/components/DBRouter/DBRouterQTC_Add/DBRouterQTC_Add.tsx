import React from 'react'
import './DBRouterQTC_Add.css';
import TopSidebar from '../../Topbar/Topbar';
import DBQTC_Add from '../../DashBoard/DBQTC_Add/DBQTC_Add';
import SBQTC from '../../Sidebar/SBQTC/SBQTC';

export default function DBRouterQTC_Add() {
    return (
        <div className="QTCADD">
            <TopSidebar />
            <div className="QTCADD1">
                <SBQTC />
                <DBQTC_Add />
            </div>
            
        </div>
    )
}
