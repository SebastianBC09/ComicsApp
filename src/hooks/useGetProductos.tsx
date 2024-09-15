import React, {useEffect,useState} from 'react';
import api from '../api/axiosConfig';
import { AxiosResponse } from 'axios';
import { Producto } from '../types/producto';
import { Categoria } from '../types/categoria';

export const useGetProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const Productos = useEffect(() => {
    const FetchProductos = async () => {
      try {
        const response: AxiosResponse<Producto[]>  = await api.get('/productos');
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos", error);
      }
    }
    FetchProductos();
  }, [])

  const Categorias = useEffect(() => {
    const FetchCategorias = async () => {
      try {
        const response: AxiosResponse<Categoria[]>  = await api.get('productos/categorias');
        setCategorias(response.data);
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
