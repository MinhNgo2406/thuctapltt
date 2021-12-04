import React from 'react'
import './DBRouter_skk.css';
import TopSidebar from '../../Topbar/Topbar';
import DBCDTB_skk from '../../DashBoard/DBCDTB_skk/DBCDTB_skk';
import SBQLTB_GSM from '../../Sidebar/SBQLTB_GSM/SBQLTB_GSM';
export default function DBRouter_skk() {
    return (
        <div className="DBRouterQLTB_GSM1">
            <TopSidebar />
            <div className="DBRouterQLTB_GSM2">
                <SBQLTB_GSM />
                <DBCDTB_skk />
            </div>
            
        </div>
    )
}
