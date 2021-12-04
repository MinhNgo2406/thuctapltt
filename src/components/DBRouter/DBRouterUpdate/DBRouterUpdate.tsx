import React from 'react'
import './DBRouterUpdate.css';
import TopSidebar from '../../Topbar/Topbar';
import DBUpdate from '../../DashBoard/DBUpdate/DBUpdate';
import SBQTC from '../../Sidebar/SBQTC/SBQTC';

export default function DBRouterUpdate() {
    return (
        <div className="QTC6">
            <TopSidebar />
            <div className="QTC7">
                <SBQTC />
                <DBUpdate />
            </div>
            
        </div>
    )
}
