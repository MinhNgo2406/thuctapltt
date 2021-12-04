import React from 'react'
import './DBRouter_themsdt.css';
import TopSidebar from '../../Topbar/Topbar';
import DBCDTB_themsdt from '../../DashBoard/DBCDTB_themsdt/DBCDTB_themsdt';
import SBQLTB_GSM from '../../Sidebar/SBQLTB_GSM/SBQLTB_GSM';
export default function DBRouter_themsdt() {
    return (
        <div className="DBRouterQLTB_GSM1">
            <TopSidebar />
            <div className="DBRouterQLTB_GSM2">
                <SBQLTB_GSM />
                <DBCDTB_themsdt />
            </div>
            
        </div>
    )
}
