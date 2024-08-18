"use client";

import { MapboxMap } from "./MapboxMap";
import { useMapboxPublicConfig } from "./hooks/useMapboxPublicConfig";
import { useRunningShoeStore } from './hooks/useRunningShoeStore';

export function MapboxMapContainer() {
    const { data: configs, error: configsError, isLoading: configsLoading } = useMapboxPublicConfig();
    let { data: runningShoeStores, error: runningShoeStoresError, isLoading: runningShoeStoresLoading } = useRunningShoeStore();

    if (configsError) return <div>mapbox config load error</div>;
    if (configsLoading) return <div>mapbox config loading...</div>;
    if (!configs || configs.length === 0 || !configs[0]) return <div>no mapbox config</div>;

    if (runningShoeStoresError) return <div>shoe stores load error: {JSON.stringify(runningShoeStoresError)}</div>;
    if (runningShoeStoresLoading) return <div>shoe stores loading...</div>;
    if (!runningShoeStores || runningShoeStores.length === 0) return <div>no shoe stores</div>;

    // parse json so that escaped quotations are removed
    runningShoeStores = runningShoeStores.map((store) => {
        store.data = JSON.parse(store.data);
    });

    const renderKey = JSON.stringify(configs[0]);
    return (
        <div style={{ height: 400, width: '100%' }}>
            <MapboxMap
                key={renderKey}
                config={configs[0]}
                runningExperience={{
                    runningShoeStores: runningShoeStores
                }}
            />
        </div>
    )
}
