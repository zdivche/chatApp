import axios from 'axios';
import { RegisterForm } from '../types/user';
const BASE_URL = 'http://127.0.0.1:8000';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const registerUser = async (data: RegisterForm) => {
	return await axiosInstance.post('/auth/register/',data);
};
