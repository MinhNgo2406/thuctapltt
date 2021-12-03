import React from 'react'
import './DBRouterUpdate.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBUpdate from '../../DashBoard/DBUpdate/DBUpdate';

export default function DBRouterUpdate() {
    return (
        <div className="QTC6">
            <TopSidebar />
            <div className="QTC7">
                <Sidebar />
                <DBUpdate />
            </div>
            
        </div>
    )
}
