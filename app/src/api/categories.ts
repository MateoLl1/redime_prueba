import type { Category } from '../types/Category';
import api from './axios';

export const getCategories = (page: number = 1) => api.get(`/categories?page=${page}`);

export const createCategory = (data: Partial<Category>) => api.post('/categories', data);

export const updateCategory = (id: number, data: Partial<Category>) =>
  api.put(`/categories/${id}`, data);

export const deleteCategory = (id: number) => api.delete(`/categories/${id}`);
