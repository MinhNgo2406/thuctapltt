import React from 'react'
import './DBRouterQTC.css';
import TopSidebar from '../../Topbar/Topbar';
import DBQTC from '../../DashBoard/DBQTC/DBQTC';
import SBQTC from '../../Sidebar/SBQTC/SBQTC';


export default function DBRouterQTC() {
    return (
        <div className="QTC6">
            <TopSidebar />
            <div className="QTC7">
                <SBQTC />
                <DBQTC />
            </div>
            
        </div>
    )
}
