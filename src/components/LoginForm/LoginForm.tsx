import React, { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonButton, IonLoading, IonIcon, IonText } from '@ionic/react';
import { useUser } from '../../context/UserContext/useUser';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import RegisterLink from '../RegisterLink/RegisterLink';
import './LoginForm.css';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

const LoginForm: React.FC = () => {
  const { login, loading, error } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setFormError('Por favor, completa todos los campos.');
      return;
    }
    setFormError(null);
    await login({ email, password });
  }

  return (
    <>
      <IonLoading isOpen={loading} message="Iniciando sesión..." />
      <form className="login-form" onSubmit={handleSubmit}>
        <IonItem>
          <IonIcon slot="start" icon={mailOutline} />
          <IonInput
            type="email"
            value={email}
            onIonChange={(e: CustomEvent) => setEmail(e.detail.value)}
            label="Correo Electronico"
            labelPlacement="floating"
            placeholder="Ingresa tu correo"
            required
            />
        </IonItem>

        <IonItem>
          <IonIcon slot="start" icon={lockClosedOutline} />
          <IonInput
            type="password"
            value={password}
            onIonChange={(e: CustomEvent) => setPassword(e.detail.value)}
            label="Contraseña"
            labelPlacement="floating"
            placeholder="Ingresa tu contraseña"
            required
            />
        </IonItem>
          {formError && (
            <IonText color="danger">
              <p>{formError}</p>
            </IonText>
          )}

        {error && <ErrorMessage message={error} />}

        <IonButton className="login-button" type="submit" expand="block" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </IonButton>
        <RegisterLink />
      </form>
    </>
  )
}

export default LoginForm;
