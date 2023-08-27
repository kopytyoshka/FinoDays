import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const LearningPage: React.FC = () => {
    const lessons = [
        { id: 1, title: 'Как правильно использовать кредиты' },
        { id: 2, title: 'Понимание процентных ставок' },
        // Добавьте другие уроки
    ];

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
                            <IonCardTitle className="lesson-title">{lesson.title}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {/* Content of the lesson */}
                        </IonCardContent>
                        <IonButton className="start-button" fill="clear">Начать</IonButton>
                    </IonCard>
                ))}
            </IonContent>
        </>
    );
};

export default LearningPage;
