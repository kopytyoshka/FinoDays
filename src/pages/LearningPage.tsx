import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { cardOutline, personOutline, bookOutline } from 'ionicons/icons';

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
                    <IonTitle>Обучение</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {lessons.map((lesson) => (
                        <IonItem key={lesson.id}>
                            <IonLabel>{lesson.title}</IonLabel>
                            <IonButton slot="end">Начать</IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </>
    );
};

export default LearningPage;
