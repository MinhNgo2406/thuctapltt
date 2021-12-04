import React from 'react';
import './DBRouter_tt1.css';
import TopSidebar from '../../Topbar/Topbar';
import DBtrangthai1 from '../../DashBoard/GGMap/DBtrangthai1/DBtrangthai1'
import SBMap from '../../Sidebar/SBMap/SBMap'

export default function DBRouter_tt1() {
    return (
        <div className='DBRTT1'>
            <TopSidebar />
            <div className="DBRTT2">
                <SBMap />
                <DBtrangthai1 />
            </div>
            
        </div>
    )
}
