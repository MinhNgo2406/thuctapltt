import React from 'react';
import './DBRouter_tt2.css';
import TopSidebar from '../../Topbar/Topbar';
import DBtrangthai2 from '../../DashBoard/GGMap/DBtrangthai2/DBtrangthai2'
import SBMap from '../../Sidebar/SBMap/SBMap'

export default function DBRouter_tt2() {
    return (
        <div className='DBRTT_1'>
            <TopSidebar />
            <div className="DBRTT_2">
                <SBMap />
                <DBtrangthai2 />
            </div>
            
        </div>
    )
}
