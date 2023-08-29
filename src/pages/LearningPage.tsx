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
    const [isOpen, setIsOpen] = useState(false);

    interface LessonParam {
        id: string;
    }

    const [allLessons, setAllLessons] = useState<any[]>([])
    // const [lesson, setLesson] = useState<any[]>([])
    const {id} = useParams<LessonParam>();
    const lessons = [
        {id: 1, name: 'Как правильно использовать кредиты'},
        {id: 2, name: 'Понимание процентных ставок'},
        // Добавьте другие уроки
    ];

    // const fetchAllLessons = () => {
    //     fetch("http://localhost:8080/lesson/getAllLessons")
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setAllLessons(data)
    //             console.log(allLessons)
    //         })
    // }
    //
    // const fetchLessonById = () => {
    //     fetch('http://localhost:8080/lesson/getLessonById?lessonId=' + id)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setLesson(data)
    //             console.log(lesson)
    //         })
    // }


    // useEffect(() => {
    //     fetchAllLessons()
    // }, [])



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
                {lessons.map((lesson) => (
                    <IonCard key={lesson.id} className="lesson-card">
                        <IonCardHeader>
                            <IonCardTitle className="lesson-title">{lesson.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonButton id={`open-modal-${lesson.id}`} className="start-button" fill="clear" onClick={() => setIsOpen(true)} >Начать</IonButton>
                    </IonCard>
                ))}

                {lessons.map((lesson) => (
                    <IonModal isOpen={isOpen} key={lesson.id} ref={modal} trigger={`open-modal-${lesson.id}`} className="card-info">
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
                        <img src={imageurl} alt="Image" />
                        <p>Урок 1: НЕ ЗЛИТЕ КОТА</p>
                    </IonModal>
                ))}


            </IonContent>
        </>
    );
};

export default LearningPage;
