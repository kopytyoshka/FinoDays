import React, {useEffect, useRef, useState} from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton, IonModal, IonButtons
} from '@ionic/react';
import {useParams} from "react-router";
import {OverlayEventDetail} from "@ionic/react/dist/types/components/react-component-lib/interfaces";
const LearningPage: React.FC = () => {

    interface LessonParam {
        id: string;
    }

    const [allLessons, setAllLessons] = useState<any[]>([])
    const [lesson, setLesson] = useState<any[]>([])
    const {id} = useParams<LessonParam>();
    const lessons = [
        {id: 1, name: 'Как правильно использовать кредиты'},
        {id: 2, name: 'Понимание процентных ставок'},
        // Добавьте другие уроки
    ];

    const fetchAllLessons = () => {
        fetch("api/lesson/getAllLessons")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setAllLessons(data)
                console.log(allLessons)
            })
    }

    const fetchLessonById = () => {
        fetch('api/lesson/getLessonById?lessonId=' + id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setLesson(data)
                console.log(lesson)
            })
    }


    useEffect(() => {
        fetchAllLessons()
    }, [])



    const imageurl = 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/490/c500/689d4f7c-60f4-46ab-865e-bfbe89bfcb0e.jpeg';
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
        }
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Обучение</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {allLessons.map((lesson) => (
                    <IonCard key={lesson.id} className="lesson-card">
                        <IonCardHeader>
                            <IonCardTitle className="lesson-title">{lesson.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonButton id="open-modal" className="start-button" fill="clear">Начать</IonButton>
                    </IonCard>
                ))}

                <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)} className="card-info">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Урок</IonTitle>
                            <IonButtons slot="end">
                                <IonButton strong={true} onClick={() => confirm()}>
                                    Выйти
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <img src={imageurl} alt="Image" />
                </IonModal>
            </IonContent>
        </>
    );
};

export default LearningPage;
