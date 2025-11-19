import { useEffect, useState } from 'react';

import { getMaterials, createMaterial, updateMaterial, deleteMaterial } from '../api/materials';
import type { Material } from '../types/Material';

export const useMaterials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [meta, setMeta] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchMaterials = async (page = 1) => {
    setLoading(true);
    const { data } = await getMaterials(page);
    setMaterials(data.data);
    setMeta(data.meta);
    setLoading(false);
  };

  const addMaterial = async (material: Partial<Material>) => {
    await createMaterial(material);
    fetchMaterials();
  };

  const editMaterial = async (id: number, material: Partial<Material>) => {
    await updateMaterial(id, material);
    fetchMaterials();
  };

  const removeMaterial = async (id: number) => {
    await deleteMaterial(id);
    fetchMaterials();
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return { materials, meta, loading, fetchMaterials, addMaterial, editMaterial, removeMaterial };
};
