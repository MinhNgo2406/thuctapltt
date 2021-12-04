import React from 'react'
import './DBRouterQLTB_GSM.css';
import TopSidebar from '../../Topbar/Topbar';
import DBQLTB_GSM from '../../DashBoard/DBQLTB_GSM/DBQLTB_GSM';
import SBQLTB_GSM from '../../Sidebar/SBQLTB_GSM/SBQLTB_GSM';

export default function DBRouterQLTB_GSM() {
    return (
        <div className="DBRouterQLTB_GSM1">
            <TopSidebar />
            <div className="DBRouterQLTB_GSM2">
                <SBQLTB_GSM />
                <DBQLTB_GSM />
            </div>
            
        </div>
    )
}
