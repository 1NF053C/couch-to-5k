import { MutableRefObject } from "react"
import { useMapboxPulsingMarker } from "./useMapboxPulsingMarker"

interface RunningShoeStore {
    name: string;
    streetAddress: string;
    lng: number;
    lat: number;
}

export interface UseRunningExperienceProps {
    runningShoeStores: RunningShoeStore[]
}

export function useRunningExperience(mapRef: MutableRefObject<any>, props: UseRunningExperienceProps) {
    props.runningShoeStores.forEach(({ lng, lat }) => useMapboxPulsingMarker(mapRef, { lng, lat }))
}
