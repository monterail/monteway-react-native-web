import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppStackMobile from '@/navigation/mobile/AppStackMobile';

function AppMobile(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStackMobile />
    </NavigationContainer>
  );
}

export default AppMobile;
