import React, { useState, useMemo, useCallback, useRef } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, Circle } from '@react-google-maps/api';

const LatLngLiteral = google.maps.LatLngLiteral;
const DirectionalResult = google.maps.DirectionalResult;
const MapOptions = google.maps.MapsOptions;

const Map = () => {
    const mapRef = useRef();
    const center = useMemo(() => ({lat: 43, lng: -80}), []);
    const options = useMemo(() => ({
        disableDefaultUI : true,
        clickableIcons : false
    }),[]);
    const onLoad = useCallback((map) => (mapRef.current = map), []);

    return (
        <>
            <div>
                <GoogleMap zoom={10} center={center} options={options} />
            </div>
        </>
    )
}

export default Map