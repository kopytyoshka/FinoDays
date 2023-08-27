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
    IonLoading, IonSelectOption, IonSelect, IonSpinner, IonCardSubtitle, IonCardTitle, IonPage, IonModal
} from '@ionic/react';
import {caretDownSharp} from 'ionicons/icons';

const CreditOffersPage: React.FC = () => {
    const [desiredAmount, setDesiredAmount] = useState<number>(0);
    const [loanTerm, setLoanTerm] = useState<number>(0);
    const [creditOffers, setCreditOffers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const [selectedBankName, setSelectedBankName] = useState<string | null>(null);

    const openModal = (product: any, bankName: string) => {
        setSelectedProduct(product);
        setSelectedBankName(bankName);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };


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
                            <IonButton className="custom-button"
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
                    <div key={index} className="bank-offers">
                        {offer.products.map((product: any, productIndex: any) => (
                            <IonCard key={productIndex} className="product-card" style={{borderRadius: '25px'}}
                                     onClick={() => openModal(product, offer.bankName)}>
                                <IonCardSubtitle className="credit-bank-name">{offer.bankName}</IonCardSubtitle>
                                <IonCardContent>
                                    <IonCardTitle className="credit-product-name">{product.productName}</IonCardTitle>
                                    <IonList className="credit-product-details">
                                        <IonItem>Процент: {product.interest}%</IonItem>
                                        <IonItem>Максимальная сумма: {product.amountOfLoan} руб.</IonItem>
                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                        ))}
                    </div>
                ))}
                <IonModal isOpen={showModal} onDidDismiss={closeModal} animated={true}
                          trigger="open-modal"
                          initialBreakpoint={0.25}
                          breakpoints={[0, 0.25, 0.5, 0.75]}
                          handleBehavior="cycle">
                    {selectedProduct && (
                        <>
                            <IonHeader>
                                <IonToolbar>
                                    <IonTitle className="credit-product-name">{selectedProduct.productName}</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <IonList className="credit-product-details" style={{paddingLeft: '6px'}}>
                                <p>Bank: {selectedBankName}</p>
                                <p>This is a sample description for {selectedProduct.productName}.</p>
                                <p>Interest rate: {selectedProduct.interest}%</p>
                                <p>Maximum amount of loan: {selectedProduct.amountOfLoan} руб.</p>
                                <p>Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test TestTest Test TestTest Test Test
                                    Test Test TestTest Test TestTest Test TestTest Test Test</p>

                            </IonList>
                            <IonButton expand="block" onClick={closeModal} style={{fontFamily: "RubikRegular"}}>Закрыть</IonButton>
                        </>
                    )}
                </IonModal>
            </IonContent>
        </>
    );
};

export default CreditOffersPage;
