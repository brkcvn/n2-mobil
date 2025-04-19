import { API_ROUTES } from "./endpoints";

export const getApiUrl = (route, queryParams = {}) => {
    const url = new URL(`${API_ROUTES.BASE_URL}${route}`);

    Object.keys(queryParams).forEach(key => {
        if (queryParams[key] !== undefined && queryParams[key] !== null) {
            url.searchParams.append(key, queryParams[key]);
        }
    });

    return url.toString();
};