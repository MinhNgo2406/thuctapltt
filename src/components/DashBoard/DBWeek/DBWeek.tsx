import React from 'react';
import DashBoardContent from '../../DBContent/DBContent';
import DashBoardHeaderWeek from '../../DBHeader/DBHWeek/DBHWeek';
import './DBWeek.css';

export default function DBWeek() {
    return (
        <div className="DBW">
            <DashBoardHeaderWeek />
            <DashBoardContent />
        </div>
    )
}
