'use-client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  //height: '400px',
  height: '100vh', //full vieport height- covers entire screen
  width: '100%',
};

const center = {
  lat: 37.7749,  // Set the latitude
  lng: -122.4194 // Set the longitude
};

const AddressPage = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default AddressPage;

