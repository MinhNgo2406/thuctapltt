import React from 'react'
import './DBRouterAL.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBAL from '../../DashBoard/DBAL/DBAL';


export default function DBRouterQLCB() {
    return (
        <div className="RAL">
            <TopSidebar />
            <div className="RAL1">
                <Sidebar />
                <DBAL />
            </div>
            
        </div>
    )
}
