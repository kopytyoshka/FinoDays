import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { cardOutline, personOutline, bookOutline } from 'ionicons/icons';

const CreditOffersPage: React.FC = () => {
    const [desiredAmount, setDesiredAmount] = useState<number>(0);
    const [loanTerm, setLoanTerm] = useState<number>(0);
    const [creditOffers, setCreditOffers] = useState<any[]>([]);

    const getCreditOffers = () => {
        // Здесь используйте ваш API для получения предложений и установите creditOffers.
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="header-title">Кредитные предложения</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Желаемая сумма:</IonLabel>
                        <IonInput type="number" value={desiredAmount} onIonChange={(e) => setDesiredAmount(parseInt(e.detail.value!, 10))}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Срок (в годах):</IonLabel>
                        <IonInput type="number" value={loanTerm} onIonChange={(e) => setLoanTerm(parseInt(e.detail.value!, 10))}></IonInput>
                    </IonItem>
                </IonList>

                <IonButton expand="full" onClick={getCreditOffers}>Показать предложения</IonButton>

                <IonList>
                    {creditOffers.map((offer, index) => (
                        <IonItem key={index}>
                            <IonLabel>{offer.bankName}</IonLabel>
                            <IonLabel slot="end">{offer.interestRate}%</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </>
    );
};

export default CreditOffersPage;
