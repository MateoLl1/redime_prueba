import type { Category } from '../types/Category';
import api from './axios';

export const getCategories = (page: number = 1) => api.get(`/categories?page=${page}`);

export const createCategory = (data: Partial<Category>) => api.post('/categories', data);
