import React from 'react';
/* AddChildForm & Sidebar */
import AddChildForm from './components/AddChildForm/Form';
import Sidebar from './components/IformationOnChild_(sidebar)/InformationList';

/* AuthPage*/
import AuthPageNavigation from './components/AuthPageNavigation/AuthPageNavigation'
import ChangeHabbitForm from './components/ChangeHabbitForm';

import './assets/fonts.css';
import './assets/basic.css';

import InformationByHabbit from './components/InformationByHabbit/InformationByHabbit';

// function App() {
//   return <div className="App">Hello</div>;
// }

function App() {
  return (
    <div className="App">
      <InformationByHabbit />
    </div>
  );
}

export default App;
