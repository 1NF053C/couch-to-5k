"use client";

import useSWR from "swr";
import { MapboxPublicConfigService } from './helpers/ApiClientFactory'

export function useMapboxPublicConfig() {
    const mapboxPublicConfigService = new MapboxPublicConfigService();
    return useSWR('mbConfigCacheKey', async () => await mapboxPublicConfigService.findAll(), { refreshInterval: 200 });
}
