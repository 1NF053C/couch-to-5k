"use client";

import useSWR from "swr";
import { RunningShoeStoreService } from './helpers/ApiClientFactory'

export function useRunningShoeStore() {
    const runningShoeStoreService = new RunningShoeStoreService();
    return useSWR('runningShoeStoreCacheKey', async () => await runningShoeStoreService.findAll(), { refreshInterval: 200 });
}
