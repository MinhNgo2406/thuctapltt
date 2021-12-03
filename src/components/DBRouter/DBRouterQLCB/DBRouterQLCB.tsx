import React from 'react'
import './DBRouterQLCB.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQlcb from '../../DashBoard/DBQlcb/DBQlcb';

export default function DBRouterQLCB() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <Sidebar />
                <DBQlcb />
            </div>
            
        </div>
    )
}
