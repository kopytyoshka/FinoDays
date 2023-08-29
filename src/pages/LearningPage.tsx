import React, {useEffect, useRef, useState} from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton, IonModal, IonButtons, IonText
} from '@ionic/react';
import {useParams} from "react-router";
import {useAuth0} from "@auth0/auth0-react";


const LearningPage: React.FC = () => {
    // const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    // interface LessonParam {
    //     id: string;
    // }
    //
    // const [allLessons, setAllLessons] = useState<any[]>([])
    // const [lesson, setLesson] = useState<any[]>([])
    // const {id} = useParams<LessonParam>();
    const lessons = [
        {id: 1, name: 'Как правильно использовать кредиты'},
        {id: 2, name: 'Понимание процентных ставок'},
        {id: 3, name: 'Тестовый урок'},
        // Добавьте другие уроки
    ];

    // const fetchAllLessons = async () => {
    //     fetch("/api/lesson/getAllLessons", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${await getAccessTokenSilently()}`,
    //         },
    //     })
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setAllLessons(data)
    //             console.log(allLessons)
    //         })
    // }


    //
    // useEffect(() => {
    //     if (isAuthenticated)
    //         fetchAllLessons()
    // }, [])


    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Обучение</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {lessons.map((lesson) => (
                    <IonCard key={lesson.id} className="lesson-card">
                        <IonCardHeader>
                            <IonCardTitle className="lesson-title">{lesson.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonButton id={`open-modal-${lesson.id}`} className="start-button" fill="clear"
                                   onClick={() => setIsOpen(true)}>Начать</IonButton>
                    </IonCard>
                ))}

                {lessons.map((lesson) => (
                    <IonModal isOpen={isOpen} key={lesson.id} ref={modal} trigger={`open-modal-${lesson.id}`}
                              className="card-info">
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Урок</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton strong={true} onClick={() => setIsOpen(false)}>
                                        Закрыть
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonText>
                            Формы кредитования<br/><br/>
                            Классификаций займов несколько. Например, если рассматривать программы по источникам и целям
                            кредита, можно выделить:<br/><br/>
                            Банковские. Эти средства выдают физическим и юридическим лицам, а также индивидуальным
                            предпринимателям. Годовую процентную ставку в этом случае устанавливает финансовая
                            организация на основе конкретного предложения, внутренней политики и ключевой ставки
                            Центрального Банка.<br/><br/>
                            Коммерческие. Еще их называют товарными. Кредит предоставляется продавцами покупателям
                            (другой компании или индивидуальным предпринимателям) в виде отсрочки платежа за проданные
                            товары или покупателями в виде аванса, предоплаты за поставляемые товары. Например,
                            организация может получить всю партию товара сразу, а расплачиваться за нее частями. Законом
                            процентная ставка в этом случае не регулируется, она оговаривается и согласуется сторонами,
                            а затем условия прописываются в договоре.<br/><br/>
                            Государственные. Финансовые отношения между государством и юрлицом или обычным человеком.
                            Например, чтобы взять кредит у граждан, государство может выпустить облигации (долговые
                            бумаги). Физическое лицо, купившее облигации, получает проценты. Международные займы
                            государству может выдать МВФ (Международный валютный фонд), зарубежное правительство или
                            иностранная финансовая организация.
                        </IonText>
                    </IonModal>
                ))}


            </IonContent>
        </>
    );
};

export default LearningPage;
