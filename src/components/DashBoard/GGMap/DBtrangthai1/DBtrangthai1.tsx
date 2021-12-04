import React from 'react';
import GoogleMap from '../../../GoogleMap/GoogleMap';
import './DBtrangthai1.css';
import DBHgsm from '../../../DBHeader/DBHgsm/DBHgsm';
import Trangthai_GGmap1 from '../../../trangthai_GGmap/trangthai_GGmap1/trangthai_GGmap1';

export default function trangthai1() {
    return (
        <div className="trangthaibai">
            <DBHgsm />
            <GoogleMap />
            <Trangthai_GGmap1 />

        </div>
    )
}