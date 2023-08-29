import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {IonButton} from '@ionic/react';

const LoginButton: React.FC = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    if (!isAuthenticated) {
        return (
            <div className="center-button-container">
                <IonButton className="centered-button" expand="block" size="large" onClick={() => loginWithRedirect()}>
                    Войти
                </IonButton>
            </div>
        );
    }
    return null;
};

export default LoginButton;
