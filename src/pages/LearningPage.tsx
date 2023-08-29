import React, {useEffect, useRef, useState} from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton, IonModal, IonButtons
} from '@ionic/react';
import {useParams} from "react-router";
import {useAuth0} from "@auth0/auth0-react";



const LearningPage: React.FC = () => {
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

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

    const fetchAllLessons = async () => {
        fetch("/api/lesson/getAllLessons", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${await getAccessTokenSilently()}`,
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setAllLessons(data)
                console.log(allLessons)
            })
    }

    // const fetchLessonById = () => {
    //     fetch('api/lesson/getLessonById?lessonId=' + id)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setLesson(data)
    //             console.log(lesson)
    //         })
    // }


    useEffect(() => {
        if (isAuthenticated)
            fetchAllLessons()
    }, [])



    const imageurl = 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/490/c500/689d4f7c-60f4-46ab-865e-bfbe89bfcb0e.jpeg';
    const modal = useRef<HTMLIonModalElement>(null);

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
                        <img src={imageurl} alt="Image"/>
                        <p>Урок 1: НЕ ЗЛИТЕ КОТА</p>
                    </IonModal>
                ))}


            </IonContent>
        </>
    );
};

export default LearningPage;
