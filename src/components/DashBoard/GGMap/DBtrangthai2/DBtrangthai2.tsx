import React from 'react';
import GoogleMap from '../../../GoogleMap/GoogleMap';
import './DBtrangthai2.css';
import DBHgsm from '../../../DBHeader/DBHgsm/DBHgsm';
import Trangthai_GGmap2 from '../../../trangthai_GGmap/trangthai_GGmap2/trangthai_GGmap2';

export default function trangthai1() {
    return (
        <div className="trangthaihai">
            <DBHgsm />
            <GoogleMap />
            <Trangthai_GGmap2 />

        </div>
    )
}