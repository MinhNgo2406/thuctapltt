import React from 'react'
import './DBRouterQLND_Add.css';
import TopSidebar from '../../Topbar/Topbar';
import SBQLND from '../../Sidebar/SBQLND/SBQLND';
import DBQLND_Add from '../../DashBoard/DBQLND_Add/DBQLND_Add';

export default function DBRouterQLND_Add() {
    return (
        <div className="RTQLNDmot">
            <TopSidebar />
            <div className="RTQLNDhai">
                <SBQLND />
                <DBQLND_Add />
            </div>
            
        </div>
    )
}
