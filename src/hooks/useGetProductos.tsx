import React, {useEffect,useState} from 'react';
import api from 'api/axiosConfig';
import { AxiosResponse } from 'axios';
import { Producto } from 'types/producto';

const useGetProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

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


  return {
    productos
  }
}
