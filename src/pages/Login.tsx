import React from 'react'
import { Redirect } from 'react-router-dom';
import { IonContent, IonPage } from '@ionic/react'
import { useUser } from '../context/UserContext/useUser'
import LoginForm from '../components/LoginForm/LoginForm';
import './Login.css'

const Login: React.FC = () => {
  const { user } = useUser();

  if(user) {
    return <Redirect to="/products"/>
  }

  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <div className='login-container'>
          <h2>Iniciar Sesion</h2>
          <LoginForm />
        </div>
      </IonContent>
    </IonPage>
  )
}
export default Login
