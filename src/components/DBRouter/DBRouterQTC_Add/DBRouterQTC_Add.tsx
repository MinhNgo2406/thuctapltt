import React from 'react'
import './DBRouterQTC_Add.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQTC_Add from '../../DashBoard/DBQTC_Add/DBQTC_Add';

export default function DBRouterQTC_Add() {
    return (
        <div className="QTCADD">
            <TopSidebar />
            <div className="QTCADD1">
                <Sidebar />
                <DBQTC_Add />
            </div>
            
        </div>
    )
}
