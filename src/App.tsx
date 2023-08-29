import React from 'react';
import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonApp,
    IonRouterOutlet, setupIonicReact, IonPage,
} from '@ionic/react';
import {searchOutline, personOutline, bookOutline, cashOutline} from 'ionicons/icons';
import {Redirect, Route} from "react-router-dom";
import LearningPage from "./pages/LearningPage";
import ProfilePage from "./pages/ProfilePage";
import CreditOffersPage from "./pages/CreditOffersPages";
import {IonReactRouter} from "@ionic/react-router";
import ActiveCreditsPage from "./pages/ActiveCreditsPage";
import './styles/App.css';

setupIonicReact()
const App: React.FC = () => (
    <IonApp>
        <IonPage>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path="/credit-offers" component={CreditOffersPage} exact/>
                        <Route path="/profile" component={ProfilePage} exact/>
                        <Route path="/learning" component={LearningPage} exact/>
                        <Route path="/active-offers" component={ActiveCreditsPage} exact/>
                        <Redirect from="/" to="/credit-offers" exact/>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" className="custom-tab-bar">
                        <IonTabButton tab="search" href="/credit-offers">
                            <IonIcon icon={searchOutline}/>
                            <IonLabel>Поиск</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="profile" href="/profile">
                            <IonIcon icon={personOutline}/>
                            <IonLabel>Аккаунт</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="learning" href="/learning">
                            <IonIcon icon={bookOutline}/>
                            <IonLabel>Обучение</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="bank" href="/active-offers">
                            <IonIcon icon={cashOutline}/>
                            <IonLabel>Кредиты</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonPage>
    </IonApp>

);

export default App;
