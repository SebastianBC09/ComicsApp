import React from 'react';
import { IonText } from '@ionic/react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <IonText color="danger" className="error-message">
      <p>{message}</p>
    </IonText>
  );
};

export default ErrorMessage;
