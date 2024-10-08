import React, { useState, useEffect } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonImg, IonCardTitle, IonIcon } from '@ionic/react';
import { addProductToWishlist, removeProductFromWishlist } from '../../services/WishlistService';
import { useWishlist } from '../../context/WishlistContext/useWishlist';
import { Card } from '../../types/card';
import { heart, heartOutline } from 'ionicons/icons';
import './ProductCard.css';

const ProductCard:React.FC<Card> = ({producto, seeDetails}) => {
  const { isInWishlist, toggleWishlistItem, loading } = useWishlist();

  const inWishlist = isInWishlist(producto.id);

  const handleToggleWishlist = () => {
    toggleWishlistItem(producto.id);
  };

  return (
    <IonCard className="product-card">
      <div className="card-content-wrapper">
        <div className="image-wrapper">
          <IonImg
            className="product-card-image"
            src={producto.imageURL}
            alt={producto.titulo}
          />
          <IonIcon
            icon={inWishlist ? heart : heartOutline}
            className={`wishlist-icon ${inWishlist ? 'in-wishlist' : ''}`}
            onClick={handleToggleWishlist}
          />
        </div>

        <div className="card-header">
          <IonCardHeader>
            <IonCardTitle className="product-card-title">
              {producto.titulo}
            </IonCardTitle>
          </IonCardHeader>
        </div>

        <div className="card-content">
          <IonCardContent>
            <p>
              <strong>Editorial: </strong>
              {producto.editorial}
            </p>
            <p>
              <strong>Precio: </strong>${producto.precio.toFixed(2)}
            </p>
          </IonCardContent>
        </div>

        <IonButton
          onClick={() => seeDetails(producto.id)}
          expand="block"
          color="primary"
        >
          Ver Detalles
        </IonButton>
      </div>
    </IonCard>
  )
}
export default ProductCard;
