import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IonButton } from '@ionic/react';

const LoginButton: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return (
            <IonButton onClick={() => loginWithRedirect()}>
                Sign In
            </IonButton>
        );
    }

    return null; // Returning null when the user is authenticated
};

export default LoginButton;
