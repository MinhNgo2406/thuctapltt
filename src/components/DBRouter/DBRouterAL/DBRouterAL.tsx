import React from 'react'
import './DBRouterAL.css';
import TopSidebar from '../../Topbar/Topbar';
import DBAL from '../../DashBoard/DBAL/DBAL';
import SBAL from '../../Sidebar/SBAL/SBAL';


export default function DBRouterQLCB() {
    return (
        <div className="RAL">
            <TopSidebar />
            <div className="RAL1">
                <SBAL />
                <DBAL />
            </div>
            
        </div>
    )
}
