import axios from 'axios';
import { getApiUrl } from './index';
import { API_ROUTES } from './endpoints';

export const fetchData = async (route, queryParams = {}) => {
    try {
        const url = getApiUrl(route, queryParams);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${route}:`, error);
        throw error;
    }
};

export const apiService = {
    fetchUsers: () => fetchData(API_ROUTES.USERS),

    fetchUserTodos: (userId) => fetchData(API_ROUTES.TODOS, { userId }),

    fetchUserPosts: (userId) => fetchData(API_ROUTES.POSTS, { userId }),

    fetchPostComments: (postId) => fetchData(API_ROUTES.COMMENTS, { postId }),

    fetchUserAlbums: (userId) => fetchData(API_ROUTES.ALBUMS, { userId })
};