'use client';

import { useEffect, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: '100%',
  height: '80vh',
  borderRadius: '15px 0px 0px 15px',
};

interface MapComponentProps {
  origin: string;
  destination: string;
  // Remove latitude and longitude if not needed
}

const MapComponent = ({ origin, destination }: MapComponentProps) => {
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const defaultMapCenter = {
    lat: 41.312126,
    lng: -72.924717,
  };
  const defaultMapZoom = 18;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
  };

  // Function to calculate distance using Google Maps Distance Matrix API
  useEffect(() => {
    if (origin && destination) {
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING, // You can change this to WALKING, BICYCLING, etc.
        },
        (response, status) => {
          if (status === 'OK' && response && response.rows && response.rows[0] && response.rows[0].elements && response.rows[0].elements[0]) {
            const result = response.rows[0].elements[0];
            setDistance(result.distance.text);
            setDuration(result.duration.text);
          } else {
            console.error("Error calculating distance:", status);
          }
        }
      );
    }
  }, [origin, destination]);

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
      </GoogleMap>

      {/* Display Distance and Duration */}
      <div className="mt-4">
        <h2>Distance: {distance ? distance : "Calculating..."}</h2>
        <h2>Duration: {duration ? duration : "Calculating..."}</h2>
      </div>
    </div>
  );
};

export { MapComponent };