import React from 'react'
import './DBRouterPGD.css';
import TopSidebar from '../../Topbar/Topbar';
import DBPGD from '../../DashBoard/DBPGD/DBPGD';
import SBPGD from '../../Sidebar/SBPGD/SBPGD';

export default function DBRouterQLCB() {
    return (
        <div className="tsb">
            <TopSidebar />
            <div className="sb">
                <SBPGD />
                <DBPGD />
            </div>
            
        </div>
    )
}
