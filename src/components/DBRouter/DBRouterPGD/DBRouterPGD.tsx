import React from 'react'
import './DBRouterPGD.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBPGD from '../../DashBoard/DBPGD/DBPGD';

export default function DBRouterQLCB() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <Sidebar />
                <DBPGD />
            </div>
            
        </div>
    )
}
