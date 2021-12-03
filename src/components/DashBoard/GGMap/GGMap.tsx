import React from 'react';
import GoogleMap from '../../GoogleMap/GoogleMap';
import './GGMap.css';
import DBHgsm from '../../DBHeader/DBHgsm/DBHgsm';

import Tablegsm from '../../Tablegsm/Tablegsm';

export default function GGMap() {
    return (
        <div className="GGMap23">
            <DBHgsm />
            <GoogleMap />
            <Tablegsm />
            

        </div>
    )
}