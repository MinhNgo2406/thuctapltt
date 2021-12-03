import React from 'react'
import './DBRouter_skk.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND_Add from '../../DashBoard/DBQLND_Add/DBQLND_Add';
import DBCDTB_skk from '../../DashBoard/DBCDTB_skk/DBCDTB_skk';
export default function DBRouter_skk() {
    return (
        <div className="DBRouterQLTB_GSM1">
            <TopSidebar />
            <div className="DBRouterQLTB_GSM2">
                <Sidebar />
                <DBCDTB_skk />
            </div>
            
        </div>
    )
}
