import React from 'react'
import './DBRouterQLCB.css';
import TopSidebar from '../../Topbar/Topbar';
import DBQlcb from '../../DashBoard/DBQlcb/DBQlcb';
import SBQLCB from '../../Sidebar/SBQLCB/SBQLCB'

export default function DBRouterQLCB() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <SBQLCB />
                <DBQlcb />
            </div>
            
        </div>
    )
}
