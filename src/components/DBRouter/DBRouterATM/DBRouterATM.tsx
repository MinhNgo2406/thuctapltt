import React from 'react'
import './DBRouterATM.css';
import TopSidebar from '../../Topbar/Topbar';
import DBATM from '../../DashBoard/DBATM/DBATM';
import SBATM from '../../Sidebar/SBATM/SBATM';


export default function DBRouterQLCB() {
    return (
        <div className="ATM5">
            <TopSidebar />
            <div className="ATM6">
                <SBATM />
                <DBATM />
            </div>
            
        </div>
    )
}
