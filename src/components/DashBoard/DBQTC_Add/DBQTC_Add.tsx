import React from 'react'
import './DBQTC_Add.css';
import QTC_Add_table from '../../QTC_Add_table/QTC_Add_table';
import QTC_Add from '../../QTC_Add/QTC_Add';


export default function DBQTC_Add() {
    return (
        <div className="DBU2">
            <QTC_Add />
            <QTC_Add_table />
        </div>
    )
}
