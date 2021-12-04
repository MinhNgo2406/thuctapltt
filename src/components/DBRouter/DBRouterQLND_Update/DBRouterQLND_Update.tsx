import React from 'react'
import './DBRouterQLND_Update.css';
import TopSidebar from '../../Topbar/Topbar';
import SBQLND from '../../Sidebar/SBQLND/SBQLND';
import DBQLND_Update from '../../DashBoard/DBQLND_Update/DBQLND_Update';


export default function DBRouterQLND_Update() {
    return (
        <div className="DBQLND_Update">
            <TopSidebar />
            <div className="DBQLND_Update2">
                <SBQLND />
                <DBQLND_Update />
            </div>

        </div>
    )
}
