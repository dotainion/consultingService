import React, { useEffect } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { IonApp, IonButton, IonRouterOutlet } from '@ionic/react';
import { IonReactHashRouter, IonReactRouter } from '@ionic/react-router';

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

/* testing */
import Test from './testing/Tests';

/* Pages */
import _404 from './_404/_404';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Offers from './pages/Offers';
import Form from './pages/Form';
import Design from './pages/Design';
import AboutUs from './pages/AboutUs';
import Model from './pages/PriceModel';
import Benefits from './pages/Benefits';
import FAQs from './pages/FAQ';
import Sustainability from './pages/Sustainability';
import Administrator from './admin/admin';
import AuthUi from './admin/authUi';
import AuthRouter from './AuthRoute';
import RealEstate from './pages/RealEstate';

const App = () =>{
  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet>
          <Route path={globalVar.route.Test} component={Test} exact={true} />
          <Route path={globalVar.route.Clients} component={Clients} exact={true} />
          <Route path={globalVar.route.Benefits} component={Benefits} exact={true} />
          <Route path={globalVar.route.Pricing} component={Model} exact={true} />
          <Route path={globalVar.route.AboutUs} component={AboutUs} exact={true} />
          <Route path={globalVar.route.Design} component={Design} exact={true} />
          <Route path={globalVar.route.Form} component={Form} exact={true} />
          <Route path={globalVar.route.Offers} component={Offers} exact={true} />
          <Route path={globalVar.route.Home} component={Home} exact={true} />
          <Route path={globalVar.route.FAQs} component={FAQs} exact={true} />
          <Route path={globalVar.route.Sustainability} component={Sustainability} exact={true} />
          <Route path={globalVar.route.AdminLogin} component={AuthUi} exact={true} />
          <Route path={globalVar.route.Admin} render={()=><AuthRouter/>} exact={true} />
          <Route path={globalVar.route.RealEstate} component={RealEstate} exact={true} />
          <Route exact path={globalVar.route.Default} render={()=><Redirect to={globalVar.route.Home}/>} />
          <Route component={_404}/>
        </IonRouterOutlet>
      </IonReactHashRouter>
    </IonApp>
  );
}

export default App;
