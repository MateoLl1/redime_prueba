import type { Material } from '../types/Material';
import api from './axios';

export const getMaterials = (page: number = 1) => api.get(`/materials?page=${page}`);

export const createMaterial = (data: Partial<Material>) => api.post('/materials', data);

export const updateMaterial = (id: number, data: Partial<Material>) =>
  api.put(`/materials/${id}`, data);

export const deleteMaterial = (id: number) => api.delete(`/materials/${id}`);
