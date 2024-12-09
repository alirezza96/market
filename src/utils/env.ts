const env = import.meta.env
export const axios = {
    baseURL: env.VITE_AXIOS_BASE_URL,
}