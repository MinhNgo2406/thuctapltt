import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './googlemap.css';
const containerStyle = {
  width: '1500px',
  height: '390px'
};

const center = {
  lat: 10.80,
  lng: 106.70
};

function MyComponent() {
  return (
    <div className='googlemap'>
      <LoadScript
        googleMapsApiKey="AIzaSyCAIEWzeJs3SZFD4Ec82XIw16XX4Gm2TWQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)