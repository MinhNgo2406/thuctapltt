/* import React from 'react'
import DashBoardContent from '../../DBContent/DBContent';
import DBHMonth from '../../DBHeader/DBHMonth/DBHMonth';
import './DBMonth.css';

export default function DBMonth() {
    return (
        <div className="DBM">
            <DBHMonth />
            <DashBoardContent />
        </div>
    )
} */


import React from 'react';
import DBContent from '../../DBContent/DBContent';
import DBHMonth from '../../DBHeader/DBHMonth/DBHMonth';
import './DBMonth.css';

export default function DBMonth() {
    return (
        <div className="DBMonth">
            <DBHMonth />
            <DBContent />
            
        </div>
    )
}

