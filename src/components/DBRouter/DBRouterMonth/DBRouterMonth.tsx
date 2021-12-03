import React from 'react';
import './DBRouterMonth.css';
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBMonth from '../../DashBoard/DBMonth/DBMonth';


export default function DBRouterMonth() {
    return (
        <div className="RouterMonth">
            <Topbar />
            <div className="RouterMonth1">
                <Sidebar />
                <DBMonth />
            </div>
        </div>
    )
}
