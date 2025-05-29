import axios from 'axios';
import { API_URL } from '@/5_shared/consts/app.consts';

export const axiosInstance = axios.create({
	baseURL: API_URL,
});

axiosInstance.interceptors.response.use((response) => response.data);
axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('accessToken');
	if (token && config.headers) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});
