import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

const ActiveCreditsPage: React.FC = () => {
    const activeCredits = [
        { id: 1, bankName: 'Bank A', nextPaymentDate: '2023-09-01', totalAmount: 10000, toBePaidTill: '2024-08-01' },
        { id: 2, bankName: 'Bank B', nextPaymentDate: '2023-09-10', totalAmount: 15000, toBePaidTill: '2024-07-10' },
        // Add more active credit details
    ];

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Активные кредиты</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {activeCredits.map((credit) => (
                    <IonCard key={credit.id}>
                        <IonCardHeader>
                            <IonCardSubtitle>Банк: {credit.bankName}</IonCardSubtitle>
                            <IonCardTitle>Следующий платеж: {credit.nextPaymentDate}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>Общая сумма: {credit.totalAmount}</p>
                            <p>До оплаты: {credit.toBePaidTill}</p>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </>
    );
};

export default ActiveCreditsPage;
