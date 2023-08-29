import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {IonButton} from "@ionic/react";

const LogoutButton: React.FC = () => {
    const {logout, isAuthenticated} = useAuth0();

    return isAuthenticated ? (
        <div className="center-button-container">
            <IonButton className="centered-button" expand="block" size="large" onClick={() => logout()}>
                Выйти
            </IonButton>
        </div>
    ) : null;
};

export default LogoutButton;
