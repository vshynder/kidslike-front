import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import logoOrange from '../../assets/images/logo-orange.png';
import logoWhite from '../../assets/images/logo-white.png';

export default function Logo() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  // location.pathname - path v Route
  const whiteLogoLocations = ['/', '/login', '/register'];

  const handleRedirect = () => {
    history.push('/main');
  };

  return (
    <img
      onClick={handleRedirect}
      src={
        whiteLogoLocations.includes(location.pathname) ? logoWhite : logoOrange
      }
    />
  );
}
