import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonImg, IonCardTitle } from '@ionic/react';
import { Card } from '../../types/card';
import './ProductCard.css';

const ProductCard:React.FC<Card> = ({producto, seeDetails}) => {
  return (
    <IonCard className='product-card'>
      <IonImg className="product-card--image" src={producto.imageURL} alt={producto.titulo}  />

      <IonCardHeader>
        <IonCardTitle>{producto.titulo}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <p><strong>Editorial: </strong>{producto.editorial}</p>
        <p><strong>Precio: </strong>${producto.precio.toFixed(2)}</p>

        <IonButton onClick={() => seeDetails(producto.id)} expand='block' color="primary">
          Ver Detalles
        </IonButton>
      </IonCardContent>
    </IonCard>
  )
}
export default ProductCard;
