import React from 'react'
import './DBQLND_Update.css';
import QLND_Update from '../../QLND/QLND_Update/QLND_Update';
import QLND_Update_table from '../../QLND/QLND_Update_table/QLND_Update_table';

export default function DBQLND_Update() {
    return (
        <div className="DBQLND1">
            <QLND_Update />
            <QLND_Update_table />
        </div>
    )
}
