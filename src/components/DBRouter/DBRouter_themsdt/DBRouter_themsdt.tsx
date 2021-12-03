import React from 'react'
import './DBRouter_themsdt.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBQLND_Add from '../../DashBoard/DBQLND_Add/DBQLND_Add';
import DBCDTB_skk from '../../DashBoard/DBCDTB_skk/DBCDTB_skk';
import DBCDTB_themsdt from '../../DashBoard/DBCDTB_themsdt/DBCDTB_themsdt';
export default function DBRouter_themsdt() {
    return (
        <div className="DBRouterQLTB_GSM1">
            <TopSidebar />
            <div className="DBRouterQLTB_GSM2">
                <Sidebar />
                <DBCDTB_themsdt />
            </div>
            
        </div>
    )
}
