import React from 'react'
import './DBQLTB_GSM.css';
import QTC_Add_table from '../../QTC_Add_table/QTC_Add_table';
import QTC_Add from '../../QTC_Add/QTC_Add';
import QLTB_GSM from '../../QLTB_GSM/QLTB_GSM';
import QLTM_GSM_table from '../../QLTB_GSM/QLTB_GSM_table/QLTB_GSM_table';


export default function DBQLTB_GSM() {
    return (
        <div className="DBQLTB_GSM1">
            <QLTB_GSM />
            <QLTM_GSM_table />
            
        </div>
    )
}
