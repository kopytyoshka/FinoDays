import React, {useEffect, useRef, useState} from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonModal, IonButtons, IonCheckbox
} from '@ionic/react';
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const ProfilePage: React.FC = () => {
    const {isAuthenticated} = useAuth0();
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(undefined);

    const [canDismiss, setCanDismiss] = useState(false);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        setPresentingElement(page.current);
        console.log({isAuthenticated})
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

                {!isAuthenticated && (<LoginButton/>)}

                {isAuthenticated && (
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
                )}

                <LogoutButton/>

                <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss}
                          presentingElement={presentingElement}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle className="card-info">Пользовательское соглашение</IonTitle>
                            <IonButtons slot="end">
                                <IonButton className="card-info" onClick={() => dismiss()}>X</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <p className="ion-padding-horizontal card-info">You must accept the terms and conditions to close
                        this modal.</p>
                    <IonItem>
                        <IonLabel className="ion-text-wrap card-info" {...{for: 'terms'}}>
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

            </IonContent>
        </>
    );
};

export default ProfilePage;