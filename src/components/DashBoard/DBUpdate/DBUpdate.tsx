import React from 'react'
import './DBUpdate.css';
import QTC_Update from '../../QTC_Update/QTC_Update';
import QTC_Update_table from '../../QTC_Update_table/QTC_Update_table';



export default function DBUpdate() {
    return (
        <div className="DBU2">
            <QTC_Update />
            <QTC_Update_table />
        </div>
    )
}
