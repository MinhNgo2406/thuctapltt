import React from 'react';
import './DBRouterMap.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import GGMap from '../../DashBoard/GGMap/GGMap';
import SBMap from '../../Sidebar/SBMap/SBMap'

export default function DBRouterMap() {
    return (
        <div className='DGmap'>
            <TopSidebar />
            <div className="DGmap1">
                <SBMap />
                <GGMap />
            </div>
            
        </div>
    )
}
