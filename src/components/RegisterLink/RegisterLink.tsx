import React from 'react';
import { IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import './RegisterLink.css';

const RegisterLink: React.FC = () => {
  return (
    <IonText className="register-link">
      <p>
        ¿No tienes una cuenta?{' '}
        <Link to="/register" className="register-link-text">
          Regístrate aquí
        </Link>
      </p>
    </IonText>
  );
};

export default RegisterLink;
