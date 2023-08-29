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
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

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
                                <IonLabel slot="end">Денисов Денис Денисович</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Почта:</IonLabel>
                                <IonLabel slot="end">threeDGuy@mail.ru</IonLabel>
                            </IonItem>
                            <IonItem lines="none">
                                <IonLabel>Телефон:</IonLabel>
                                <IonLabel slot="end">+79249238745</IonLabel>
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
                    <p className="ion-padding-horizontal card-info">
                        <b> 1. Общие положения Пользовательского соглашения</b> <br/>

                        1.1. В настоящем документе и вытекающих или связанным с ним отношениях Сторон применяются следующие термины и определения: <br/>

                        а) <b>Платформа</b> — программно-аппаратные средства, интегрированные с Сайтом Администрации;<br/>

                        б) Пользователь — дееспособное физическое лицо, присоединившееся к настоящему Соглашению в собственном интересе либо выступающее от имени и в интересах представляемого им юридического лица.
                        <br/>
                        в) Сайт Администрации/ Сайт — интернет-сайты, размещенные в домене ________.ru и его поддоменах.<br/>

                        г) Сервис — комплекс услуг и лицензия, предоставляемые Пользователю с использованием Платформы.<br/>

                        д) Соглашение - настоящее соглашение со всеми дополнениями и изменениями.<br/>
                        1.2. Использование вами Сервиса любым способом и в любой форме в пределах его объявленных функциональных возможностей, включая:<br/>

                        просмотр размещенных на Сайте материалов;<br/>
                        регистрация и/или авторизация на Сайте,<br/>
                        размещение или отображение на Сайте любых материалов, включая но не ограничиваясь такими как: тексты, гипертекстовые ссылки, изображения, аудио и видео- файлы, сведения и/или иная информация,
                        <br/>создает договор на условиях настоящего Соглашения в соответствии с положениями ст.437 и 438 Гражданского кодекса Российской Федерации.

                    </p>
                    <IonItem>
                        <IonLabel className="ion-text-wrap card-info" {...{for: 'terms'}}>
                            Вы принимаете условия соглашения?
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