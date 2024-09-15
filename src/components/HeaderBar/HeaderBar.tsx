import React, { useState } from 'react'
import { IonButton, IonButtons, IonHeader, IonIcon, IonSearchbar, IonTitle, IonToolbar, IonModal, IonSelectOption, IonSelect } from '@ionic/react'
import { bookOutline, funnelOutline, filmOutline, pricetagOutline} from 'ionicons/icons'
import './HeaderBar.css'
import { useGetProductos } from '../../hooks/useGetProductos'

export const HeaderBar:React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setfilters] = useState({editorial: '', genero: '', categoria: ''});
  const [showFilters, setshowFilters] = useState(false);
  const { productos, categorias } = useGetProductos();

  const handleSearchChange = (event: CustomEvent) => {
    setSearchQuery(event.detail.value);
  }

  const openFilters = () => {
    setshowFilters(!showFilters);
  }

  const closeFilters = () => {
    setshowFilters(false);
  }

  const filteredProductos = productos.filter(producto =>
    producto.titulo.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filters.editorial === '' || producto.editorial === filters.editorial) &&
    (filters.genero === '' || producto.genero === filters.genero) &&
    (filters.categoria === '' || producto.categoriaId === parseInt(filters.categoria))
  )

  const handleFilterChange = (key: string, value: string) => {
    setfilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <IonHeader>
      <IonToolbar className="toolbar">
        <IonTitle className='header-title'>Comics App</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonSearchbar
        value={searchQuery}
        onIonInput={handleSearchChange}
        placeholder='Realiza tu busqueda'
        animated/>
      </IonToolbar>

      <IonToolbar className='toolbar-filters'>
        <IonButtons slot='start'>
          <IonButton onClick={openFilters}>
            <IonIcon icon={funnelOutline}/> Filtros
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonModal isOpen={showFilters} onDidDismiss={closeFilters}>
        <div className="filters-modal-content">
            <h2>Filtros</h2>
          <IonSelect
          placeholder="Selecciona editorial"
          value={filters.editorial}
          onIonChange={(e: CustomEvent) => handleFilterChange('editorial', e.detail.value)}
          >
            <IonIcon slot="start" icon={bookOutline}></IonIcon>
          <IonSelectOption value="">Todas las editoriales</IonSelectOption>
          {productos
          .map((producto) => producto.editorial)
          .filter((editorial, index, self) => self.indexOf(editorial) === index)
          .map((editorial) => (
            <IonSelectOption key={editorial} value={editorial}>
              {editorial}
            </IonSelectOption>
            ))}
          </IonSelect>

          <IonSelect
          placeholder="Selecciona genero"
          value={filters.genero}
          onIonChange={(e: CustomEvent) => handleFilterChange('genero', e.detail.value)}
          >
          <IonIcon slot="start" icon={filmOutline}></IonIcon> {/* Icono de género */}
          <IonSelectOption value="">Todos los generos</IonSelectOption>
          {productos
          .map((producto) => producto.genero)
          .filter((genero, index, self) => self.indexOf(genero) === index)
          .map((genero) => (
            <IonSelectOption key={genero} value={genero}>
              {genero}
            </IonSelectOption>
            ))}
          </IonSelect>

          <IonSelect
          placeholder="Selecciona categoria"
          value={filters.categoria}
          onIonChange={(e: CustomEvent) => handleFilterChange('categoria', e.detail.value)}
          >
            <IonIcon slot="start" icon={pricetagOutline}></IonIcon> {/* Icono de categoría */}
            <IonSelectOption value="">Todas las categorias</IonSelectOption>
            {categorias.map((categoria) => (
              <IonSelectOption key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </IonSelectOption>
            ))}
          </IonSelect>

          <IonButton onClick={closeFilters}>Cerrar</IonButton>
        </div>
      </IonModal>

      <div>
        {filteredProductos.map((producto) => (
          <div>
            {producto.titulo} - {producto.autor}
          </div>
        ))}
      </div>
    </IonHeader>
  )
}
