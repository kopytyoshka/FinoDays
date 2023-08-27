import React, { useState } from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonCard, IonCardContent, IonSelectOption, IonSelect
} from '@ionic/react';
import {cardOutline, personOutline, bookOutline, caretDownSharp} from 'ionicons/icons';

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
                <IonCard style={{borderRadius: '20px'}} className="creditOffersCard">
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonInput
                                    label="Желаемая сумма:"
                                    type="number"
                                    placeholder="Введите сумму"
                                    onIonChange={(e) => setDesiredAmount(parseInt(e.detail.value!, 10))}
                                ></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonSelect
                                    justify="start"
                                    className="always-flip"
                                    toggleIcon={caretDownSharp}
                                    interface="popover"
                                    label="Срок:"
                                    placeholder="Выберите"
                                    onIonChange={(e) => setLoanTerm(parseInt(e.detail.value!, 10))}
                                >
                                    <IonSelectOption value="month">1 месяц</IonSelectOption>
                                    <IonSelectOption value="twoMonthes">3 месяца</IonSelectOption>
                                    <IonSelectOption value="sixMonthes">6 месяцев</IonSelectOption>
                                    <IonSelectOption value="twoYears">2 года</IonSelectOption>
                                    <IonSelectOption value="threeYears">3 года</IonSelectOption>
                                    <IonSelectOption value="fiveYears">5 лет</IonSelectOption>
                                </IonSelect>
                            </IonItem>


                        </IonList>

                        <div className="button-container">
                            <IonButton fill="outline" onClick={getCreditOffers}>Показать предложения</IonButton>
                        </div>

                    </IonCardContent>
                </IonCard>

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
