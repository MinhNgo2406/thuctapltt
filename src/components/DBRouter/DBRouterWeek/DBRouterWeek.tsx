import React from 'react'
import './DBRouterWeek.css';
import Topbar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import DBWeek from '../../DashBoard/DBWeek/DBWeek';

export default function DBRouterWeek() {
    return (
        <div className="WRouterWeek">
            <Topbar />
            <div className="WRouterWeek1">
                <Sidebar />
                <DBWeek />
            </div>

        </div>
    )
}
