import React from 'react'
import DashBoardContent from '../../DBContent/DBContent'
import Qlcb from '../../QLCB/Qlcb'
import TableQLCB from '../../TableQLCB/TableQLCB';
import './DBQlcb.css'


export default function DBQlcb() {
    return (
        <div className="Quanly">
            <Qlcb />
            <TableQLCB/>
            
        </div>
    )
}
