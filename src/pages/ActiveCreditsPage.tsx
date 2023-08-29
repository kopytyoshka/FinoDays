import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
} from '@ionic/react';

const ActiveCreditsPage: React.FC = () => {
    const activeCredits: any[] = [
        {id: 1, bankName: 'Tinkoff', nextPaymentDate: '2023-09-01', totalAmount: 10000, nextPaymentAmount: 2000},
        {id: 2, bankName: 'Сбер', nextPaymentDate: '2023-09-10', totalAmount: 15000, nextPaymentAmount: 2005},
        {id: 3, bankName: 'Альфа-банк', nextPaymentDate: '2023-09-10', totalAmount: 15000, nextPaymentAmount: 30420.32},
        {id: 4, bankName: 'Совкомбанк', nextPaymentDate: '2023-09-10', totalAmount: 15000, nextPaymentAmount: 123},
    ];

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Активные кредиты</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {activeCredits.length === 0 ? (
                    <div className="no-credits">
                        <img src="./assets/icon/404.png" alt="No active credits"/>
                        <p>У вас нет активных кредитов</p>
                    </div>
                ) : (
                    activeCredits.map((credit) => (
                        <IonCard key={credit.id} className="active-credit-card">
                            <IonCardHeader>
                                <IonCardSubtitle className="card-info">Сумма
                                    кредита: {credit.totalAmount} руб.</IonCardSubtitle>
                                <IonCardTitle className="title-bank-name">{credit.bankName}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent className="card-info">
                                <p>Следующий платёж: {credit.nextPaymentAmount} руб.</p>
                                <p>Оплатить до: {credit.nextPaymentDate}</p>
                            </IonCardContent>
                        </IonCard>
                    ))
                )}
            </IonContent>
        </>
    );
};

export default ActiveCreditsPage;
