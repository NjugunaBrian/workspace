import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
    const [position, setPosition] = useState(null);
    const [submittedLocation, setSubmittedLocation] = useState(null);

    return (
        <>
            {submittedLocation ? (
                <div className='h-screen w-full'>
                    <GoogleMap zoom={12} center={submittedLocation}>
                        {submittedLocation && <Marker position={submittedLocation} />}
                    </GoogleMap>

                </div>
            ) : (
                <div className='h-screen w-full'>
                    <GoogleMap zoom={12} center={position}>
                        {position && <Marker position={position} />}
                    </GoogleMap>
                </div>
            )}
        </>
    )
}

export default Map