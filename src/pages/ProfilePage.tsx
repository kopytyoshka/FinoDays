import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';

const ProfilePage: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Личный кабинет</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className="profile-card">
                    <IonCardContent>
                            <IonItem lines="none">
                                <IonLabel position="fixed">Email</IonLabel>
                                <IonInput type="email" className="transparent-input"></IonInput>
                            </IonItem>
                            <IonItem lines="none">
                                <IonLabel position="fixed">Телефон</IonLabel>
                                <IonInput type="tel" className="transparent-input"></IonInput>
                            </IonItem>
                        <IonButton expand="full" fill="solid" type="submit">
                            Сохранить
                        </IonButton>
                    </IonCardContent>
                </IonCard>
                <IonButton fill="default" color="danger" className="exit-button">
                    <IonIcon icon={logOutOutline} slot="start" />
                    Выйти
                </IonButton>
            </IonContent>
        </>
    );
};

export default ProfilePage;
