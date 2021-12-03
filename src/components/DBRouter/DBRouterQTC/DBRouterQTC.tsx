import React from 'react'
import './DBRouterQTC.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQTC from '../../DashBoard/DBQTC/DBQTC';


export default function DBRouterQTC() {
    return (
        <div className="QTC6">
            <TopSidebar />
            <div className="QTC7">
                <Sidebar />
                <DBQTC />
            </div>
            
        </div>
    )
}
