import React from 'react'
import './DBRouterQLND.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND from '../../DashBoard/DBQLND/DBQLND';


export default function DBRouterQLND() {
    return (
        <div className="QLND3">
            <TopSidebar />
            <div className="QLND4">
                <Sidebar />
                <DBQLND />
            </div>
            
        </div>
    )
}
