import React, {useEffect, useRef, useState} from 'react';
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
    IonIcon, IonModal, IonButtons, IonCheckbox, IonText
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import {useAuth0} from "@auth0/auth0-react";

const ProfilePage: React.FC = () => {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(undefined);
    const {isAuthenticated} = useAuth0();

    const [canDismiss, setCanDismiss] = useState(false);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    function dismiss() {
        modal.current?.dismiss();
    }
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Личный кабинет</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/*<IonCard className="profile-card">*/}
                {/*    <IonCardContent>*/}
                {/*            <IonItem lines="none">*/}
                {/*                <IonLabel position="fixed">Email</IonLabel>*/}
                {/*                <IonInput type="email" className="transparent-input"></IonInput>*/}
                {/*            </IonItem>*/}
                {/*            <IonItem lines="none">*/}
                {/*                <IonLabel position="fixed">Телефон</IonLabel>*/}
                {/*                <IonInput type="tel" className="transparent-input"></IonInput>*/}
                {/*            </IonItem>*/}
                {/*        <IonButton expand="full" fill="solid" type="submit">*/}
                {/*            Сохранить*/}
                {/*        </IonButton>*/}
                {/*    </IonCardContent>*/}
                {/*</IonCard>*/}

                <IonCard style={{borderRadius: '20px'}}>
                    <IonCardContent className="card-info">
                        <IonItem>
                            <IonLabel>ФИО:</IonLabel>
                            <IonLabel slot="end">Орлова Софья Денисовна</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Почта:</IonLabel>
                            <IonLabel slot="end">sassyGirlie@kiss.muah</IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                            <IonLabel>Телефон:</IonLabel>
                            <IonLabel slot="end">+6969696969</IonLabel>
                        </IonItem>
                        <IonButton id="open-modal" expand="block" fill="outline">
                            Пользовательское соглашение
                        </IonButton>
                    </IonCardContent>
                </IonCard>


                <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle className="card-info">Пользовательское соглашение</IonTitle>
                            <IonButtons slot="end">
                                <IonButton className="card-info" onClick={() => dismiss()}>X</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <p className="ion-padding-horizontal card-info">You must accept the terms and conditions to close this modal.</p>
                    <IonItem>
                        <IonLabel className="ion-text-wrap card-info" {...{ for: 'terms' }}>
                            Do you accept the terms and conditions?
                        </IonLabel>
                        <IonCheckbox
                            id="terms"
                            checked={canDismiss}
                            onIonChange={(ev) => {
                                setCanDismiss(ev.detail.checked);
                            }}
                        ></IonCheckbox>
                    </IonItem>
                </IonModal>

                {/*<IonButton fill="default" color="danger" className="exit-button">*/}
                {/*    <IonIcon icon={logOutOutline} slot="start" />*/}
                {/*    Выйти*/}
                {/*</IonButton>*/}

            {/*    {!isLoading && !user && (*/}
            {/*        <IonButton onClick={() => loginWithRedirect()}>*/}
            {/*            Выйти*/}
            {/*        </IonButton>*/}
            {/*    )}*/}
            {/*    {!isLoading && user && (*/}
            {/*        <IonButton onClick={() => logout()}>*/}
            {/*            Зайти*/}
            {/*        </IonButton>*/}
            {/*    )}*/}
            </IonContent>
        </>
    );
};

export default ProfilePage;
