import React, {useState} from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonLoading, IonSelectOption, IonSelect, IonSpinner, IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import {caretDownSharp} from 'ionicons/icons';

const CreditOffersPage: React.FC = () => {
    const [desiredAmount, setDesiredAmount] = useState<number>(0);
    const [loanTerm, setLoanTerm] = useState<number>(0);
    const [creditOffers, setCreditOffers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getCreditOffers = async () => {
        setLoading(true);

        // Simulate an API call with setTimeout
        setTimeout(() => {
            setLoading(false);
            // Simulated API response
            const apiResponse = [
                {
                    bankName: 'Тинькофф бак',
                    products: [
                        {productName: 'Изи кредит', interest: 5.0, amountOfLoan: 10000},
                        {productName: 'Кредит минус', interest: 6.0, amountOfLoan: 15000}
                    ]
                },
                {
                    bankName: 'Сбербак',
                    products: [
                        {productName: 'Отдай почку', interest: 40.5, amountOfLoan: 12000},
                        {productName: 'Займись делом', interest: 55.5, amountOfLoan: 18000}
                    ]
                }
            ];
            setCreditOffers(apiResponse);
        }, 2000);
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
                            <IonButton
                                fill="outline"
                                color="warning"
                                onClick={getCreditOffers}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <IonSpinner name="lines-small" color="orange"/>
                                        <span className="loading-text">Подождите...</span>
                                    </>
                                ) : (
                                    'Показать предложения'
                                )}
                            </IonButton>
                        </div>

                    </IonCardContent>
                </IonCard>

                {creditOffers.map((offer, index) => (
                    <IonCard key={index} className="credit-offer-card" style={{borderRadius: '25px'}}>
                        <IonCardHeader>
                            <IonCardTitle className="credit-bank-name">{offer.bankName}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {offer.products.map((product: any, productIndex: any) => (

                                <div key={productIndex} className="product-info">
                                    <IonCardSubtitle className="credit-product-name">{product.productName}</IonCardSubtitle>
                                    <IonList className="credit-product-details">
                                        <IonItem>Процент: {product.interest}%</IonItem>
                                        <IonItem>Сумма: {product.amountOfLoan} руб.</IonItem>
                                    </IonList>
                                </div>
                            ))}
                        </IonCardContent>
                    </IonCard>
                ))}

            </IonContent>
        </>
    );
};

export default CreditOffersPage;
