import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonRouterOutlet} from '@ionic/react';
import CreditOffersPage from "../pages/CreditOffersPages";
import ProfilePage from "../pages/ProfilePage";
import LearningPage from "../pages/LearningPage";

const Routes: React.FC = () => (
    <IonRouterOutlet>
        <Route path="/credit-offers" component={CreditOffersPage} exact/>
        <Route path="/profile" component={ProfilePage} exact/>
        <Route path="/learning" component={LearningPage} exact/>
        <Redirect from="/" to="/credit-offers" exact/>
    </IonRouterOutlet>
);

export default Routes;
