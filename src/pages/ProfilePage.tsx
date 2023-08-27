import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { cardOutline, personOutline, bookOutline } from 'ionicons/icons';

const ProfilePage: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Личный кабинет</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/* Контент личного кабинета */}
            </IonContent>
        </>
    );
};

export default ProfilePage;
