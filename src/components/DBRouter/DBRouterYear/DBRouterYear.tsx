import React from 'react'
import './DBRouterYear.css';
import Topbar from '../../Topbar/Topbar';
import SiderBar from '../../Sidebar/Sidebar';
import DBYear from '../../DashBoard/DBYear/DBYear';


export default function DBRouterYear() {
    return (
        <div className="WRouterYear">
            <Topbar />
            <div className="WRouterYear1">
                <SiderBar />
                <DBYear />
            </div>
        </div>
    )
}
