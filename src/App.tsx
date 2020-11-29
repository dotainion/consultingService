import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* import other tools */
import { globalVar } from './global/globalVar';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Home from './pages/Home';
import Clients from './pages/Clients';
import Offers from './pages/Offers';
import Form from './pages/Form';
import Design from './pages/Design';
import AboutUs from './pages/AboutUs';
import Model from './pages/Model';
import Benefits from './pages/Benefits';

const App: React.FC = () =>{
return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path={globalVar.route.Clients} component={Clients} exact={true} />
          <Route path={globalVar.route.Benefits} component={Benefits} exact={true} />
          <Route path={globalVar.route.Model} component={Model} exact={true} />
          <Route path={globalVar.route.AboutUs} component={AboutUs} exact={true} />
          <Route path={globalVar.route.Design} component={Design} exact={true} />
          <Route path={globalVar.route.Form} component={Form} exact={true} />
          <Route path={globalVar.route.Offers} component={Offers} exact={true} />
          <Route path={globalVar.route.Home} component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to={globalVar.route.Home} />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
