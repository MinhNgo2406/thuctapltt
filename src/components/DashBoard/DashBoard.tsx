import React from 'react'
import './DashBoard.css';
import DashBoardContent from '../DBContent/DBContent';
import DBHeader from '../DBHeader/DBHeader';

export default function DashBoard() {
    return (
        <div className="DashBoard">
            <DBHeader />
            <DashBoardContent />
            
            
        </div>
    )
}
