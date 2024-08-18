import React from 'react';

import { useMapbox } from "./hooks/useMapbox";
import { useMapboxNavigation } from "./hooks/useMapboxNavigation";
import { useMapboxPulsingMarker } from "./hooks/useMapboxPulsingMarker";
import { UseRunningExperienceProps, useRunningExperience } from './hooks/useRunningExperience';

import 'mapbox-gl/dist/mapbox-gl.css';

export interface Config {
    publicKey: string,
    startLng: number,
    startLat: number,
    zoomLevel: number,
}

export interface MapboxMapProps {
    config: Config,
    runningExperience?: UseRunningExperienceProps
}

export function MapboxMap(props: MapboxMapProps) {
    if (!props) throw 'MapboxMap props must be initialized in parent container';
    const { config } = props;

    const { mapRef, mapContainerRef } = useMapbox(config);
    useMapboxNavigation(mapRef);
    useMapboxPulsingMarker(mapRef, { lng: config.startLng, lat: config.startLat });

    if (props.runningExperience) {
        useRunningExperience(mapRef, props.runningExperience);
    }

    return <div
        style={{ height: '100%', width: '100%' }}
        ref={mapContainerRef}
        className="map-container"
    />
}
