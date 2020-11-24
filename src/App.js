import React from 'react';
/* AddChildForm & Sidebar */
import AddChildForm from './components/AddChildForm/Form';
import Sidebar from './components/IformationOnChild_(sidebar)/InformationList';

/* AuthPage*/
import AuthPageNavigation from './components/AuthPageNavigation/AuthPageNavigation';
import ChangeHabbitForm from './components/ChangeHabbitForm';

import InformationByHabbit from './components/InformationByHabbit/InformationByHabbit';

import './assets/fonts.css';
import './assets/basic.css';

function App() {
  return (
    <div className="App">
      Hello <InformationByHabbit />
    </div>
  );
}

export default App;
