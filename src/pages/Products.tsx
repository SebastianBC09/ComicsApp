import { useState } from 'react';
import { HeaderBar } from '../components/HeaderBar/HeaderBar';
import ProductCard from '../components/Card/ProductCard';
import {IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { useProductos } from '../hooks/useProductos';
import { Product } from '../types/product';

const Products: React.FC = () => {
  const { productos, categorias } = useProductos();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState({
    editorial: '',
    genero: '',
    categoria: '',
  });

  const handleSearchChange = (event: CustomEvent) => {
    setSearchQuery(event.detail.value);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const filteredProductos = productos.filter(
    (producto: Product) =>
      producto.titulo.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.editorial === '' || producto.editorial === filters.editorial) &&
      (filters.genero === '' || producto.genero === filters.genero) &&
      (filters.categoria === '' ||
        producto.categoriaId === parseInt(filters.categoria))
  );

  return (
    <IonPage>
      <HeaderBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFilterChange={handleFilterChange}
        productos={productos}
        categorias={categorias}
      />
      <IonContent>
        <IonGrid>
          <IonRow>
            {filteredProductos.map((producto: Product) => (
              <IonCol
                size="12"
                sizeSm="6"
                sizeMd="4"
                sizeLg="3"
                key={producto.id}
                >
                  <ProductCard producto={producto} seeDetails={() => console.log("Detalles")} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Products;
