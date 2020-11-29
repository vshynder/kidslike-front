import React from 'react';
import { useLocation } from 'react-router-dom';

import logoOrange from '../../assets/images/logo-orange.png';
import logoWhite from '../../assets/images/logo-white.png';

export default function Logo() {
  const location = useLocation();
  console.log(location);
  // location.pathname - path v Route
  const whiteLogoLocations = ['/', '/login', '/register'];

  return (
    <img
      src={
        whiteLogoLocations.includes(location.pathname) ? logoWhite : logoOrange
      }
    />
  );
}
