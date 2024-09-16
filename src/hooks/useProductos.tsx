import React, {useEffect,useState} from 'react';
import { getCategories } from '../services/CategoryService';
import { getProducts } from '../services/ProductService';
import { Categoria } from '../types/category';
import { Product } from '../types/product';

export const useProductos = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const FetchProductos = async () => {
      try {
        const response = await getProducts()
        setProductos(response);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    }
    FetchProductos();
  }, [])

  useEffect(() => {
    const FetchCategorias = async () => {
      try {
        const response = await getCategories()
        setCategorias(response);
      } catch (error) {
        console.error("Error al obtener las categorias", error);
      }
    };
    FetchCategorias();
  }, []);

  return {
    productos,
    categorias
  }
}
