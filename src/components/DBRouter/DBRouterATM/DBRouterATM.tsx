import React from 'react'
import './DBRouterATM.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBATM from '../../DashBoard/DBATM/DBATM';


export default function DBRouterQLCB() {
    return (
        <div className="ATM5">
            <TopSidebar />
            <div className="ATM6">
                <Sidebar />
                <DBATM />
            </div>
            
        </div>
    )
}
