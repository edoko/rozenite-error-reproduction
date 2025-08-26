import { usePerformanceMonitorDevTools } from '@rozenite/performance-monitor-plugin';
import { useNetworkActivityDevTools } from '@rozenite/network-activity-plugin';
import { useTanStackQueryDevTools } from '@rozenite/tanstack-query-plugin';
import type { QueryClient } from '@tanstack/react-query';


interface UseRozeniteProps {
    queryClient: QueryClient;
}

function useRozenite({ queryClient }: UseRozeniteProps) {
    useTanStackQueryDevTools(queryClient);
    usePerformanceMonitorDevTools();
    useNetworkActivityDevTools();
}

export default useRozenite;