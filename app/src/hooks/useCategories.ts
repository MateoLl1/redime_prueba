import { useEffect, useState } from 'react';
import { getCategories, createCategory } from '../api/categories';
import type { Category } from '../types/Category';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meta, setMeta] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchCategories = async (page = 1) => {
    setLoading(true);
    const { data } = await getCategories(page);
    setCategories(data.data);
    setMeta(data.meta);
    setLoading(false);
  };

  const addCategory = async (name: string) => {
    const { data } = await createCategory({ name });
    fetchCategories();
    return data;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, meta, loading, fetchCategories, addCategory };
};
