import React, {useEffect, useState} from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import {useParams} from "react-router";

const LearningPage: React.FC = () => {

    interface LessonParam {
        id: string;
    }

    const [allLessons, setAllLessons] = useState<any[]>([])
    const [lesson, setLesson] = useState<any[]>([])
    const {id} = useParams<LessonParam>();
    // const lessons = [
    //     { id: 1, title: 'Как правильно использовать кредиты' },
    //     { id: 2, title: 'Понимание процентных ставок' },
    //     // Добавьте другие уроки
    // ];

    const fetchAllLessons = () => {
        fetch("http://localhost:8080/lesson/getAllLessons")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setAllLessons(data)
                console.log(allLessons)
            })
    }

    const fetchLessonById = () => {
        fetch('http://localhost:8080/lesson/getLessonById?lessonId=' + id)
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
                        <IonButton className="start-button" fill="clear">Начать</IonButton>
                    </IonCard>
                ))}
            </IonContent>
        </>
    );
};

export default LearningPage;
