import React from 'react'
import DashBoardContent from '../../DBContent/DBContent';
import DBHYear from '../../DBHeader/DBHYear/DBHYear';
import './DBYear.css';


export default function DashBroadYear() {
    return (
        <div className="DashBroadYear">
            <DBHYear />
            <DashBoardContent />
        </div>
    )
}
