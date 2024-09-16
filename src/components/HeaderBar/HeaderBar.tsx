import React, { useState } from 'react'
import { IonButton, IonButtons, IonHeader, IonIcon, IonSearchbar, IonTitle, IonToolbar, IonModal, IonSelectOption, IonSelect } from '@ionic/react'
import { bookOutline, funnelOutline, filmOutline, pricetagOutline} from 'ionicons/icons'
import { Categoria } from '../../types/category'
import { Product } from '../../types/product'
import './HeaderBar.css'

interface HeaderBarProps {
  searchQuery: string;
  onSearchChange: (event: CustomEvent) => void;
  filters: any;
  onFilterChange: (key: string, value: string) => void;
  productos: Product[];
  categorias: Categoria[];
}

export const HeaderBar:React.FC<HeaderBarProps> = ({
  searchQuery,
  onSearchChange,
  filters,
  onFilterChange,
  productos,
  categorias
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const openFilters = () => {
    setShowFilters(!showFilters);
  }
  const closeFilters = () => {
    setShowFilters(false);
  }

  return (
    <IonHeader>
      <IonToolbar className="toolbar">
        <IonTitle className='header-title'>Comics App</IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonSearchbar
        value={searchQuery}
        onIonInput={onSearchChange}
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
          onIonChange={(e: CustomEvent) => onFilterChange('editorial', e.detail.value)}
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
          onIonChange={(e: CustomEvent) => onFilterChange('genero', e.detail.value)}
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
          onIonChange={(e: CustomEvent) => onFilterChange('categoria', e.detail.value)}
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
    </IonHeader>
  )
}
