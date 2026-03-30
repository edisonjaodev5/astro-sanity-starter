import type { ClientConfig } from "@sanity/client";

export const sanityConfig: ClientConfig = {
    projectId: 'static-mode',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-31',
};

export const client = {
    fetch: async (_query: string, _params?: Record<string, unknown>) => {
        return [];
    },
    listen: (_query:string, _params?: Record<string, unknown>, _options?: unknown) => ({
        subscribe: (_handler:unknown) => ({unsubscribe: () => {}})
    })
}