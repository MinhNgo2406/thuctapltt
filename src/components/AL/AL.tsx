import React from 'react'
import './AL.css'
import muiten from '../../assets/dashboard/muiten1.png'
export default function AL() {
    return (
        <div className="AL1">
            <div className="tieude5">
                Quản lý hệ thống
            </div>
            <img src={muiten} alt="" className="muiten3" />
            <div className="tieude6">
                Audit log
            </div>
            <div className="DVQL2">
                <br />
                <label className="DVQLtext">Đơn vị quản lý: </label><br />
                <input type="text" className="DV2" name="DQL" placeholder="Đơn vị quản lý, điểm giám sát" /><br />
                <br />
            </div>
            <div className="tim3">
                <button type="button" className="btntimkiem3">
                    <p className="btntennuttimkiem2">Tìm</p>
                </button>
            </div>
            
            
        </div>
    )
}
