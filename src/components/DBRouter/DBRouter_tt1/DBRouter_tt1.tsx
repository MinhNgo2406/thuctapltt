import React from 'react';
import './DBRouter_tt1.css';
import TopSidebar from '../../Topbar/Topbar';
import Sidebar from '../../Sidebar/Sidebar';
import GGMap from '../../DashBoard/GGMap/GGMap';
import DBtrangthai1 from '../../DashBoard/GGMap/DBtrangthai1/DBtrangthai1'

export default function DBRouter_tt1() {
    return (
        <div className='DBRTT1'>
            <TopSidebar />
            <div className="DBRTT2">
                <Sidebar />
                <DBtrangthai1 />
            </div>
            
        </div>
    )
}
