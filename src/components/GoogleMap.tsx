import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.7749, // Replace with your latitude
  lng: -122.4194, // Replace with your longitude
};

const Map = () => {

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
 
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Marker for your address */}
        <Marker position={center} />

        {/* Custom display window */}
        <div className="top-2 left-2 bg-white px-2 py-1 z-50 shadow-md text-black">
          <p className="font-medium">Angel Clinic</p>
          <p className="text-sm">123 Main Street, City, State ZIP</p>
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
