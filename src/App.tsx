import React from 'react';
import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonApp,
    IonRouterOutlet,
    setupIonicReact
} from '@ionic/react';
import {cardOutline, personOutline, bookOutline} from 'ionicons/icons';
import {Redirect, Route} from "react-router-dom";
import LearningPage from "./pages/LearningPage";
import ProfilePage from "./pages/ProfilePage";
import CreditOffersPage from "./pages/CreditOffersPages";
import {IonReactRouter} from "@ionic/react-router";

setupIonicReact();
const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/credit-offers" component={CreditOffersPage} exact/>
                    <Route path="/profile" component={ProfilePage} exact/>
                    <Route path="/learning" component={LearningPage} exact/>
                    <Redirect from="/" to="/credit-offers" exact/>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="search" href="/credit-offers">
                        <IonIcon icon={cardOutline}/>
                        <IonLabel>Поиск продуктов</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="profile" href="/profile">
                        <IonIcon icon={personOutline}/>
                        <IonLabel>Личный кабинет</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="learning" href="/learning">
                        <IonIcon icon={bookOutline}/>
                        <IonLabel>Обучение</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>

);

export default App;
