import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import AppStackMobile from '@/navigation/mobile/AppStackMobile';
import { initSentry } from '@/services/sentry';

function AppMobile(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
    initSentry();
  }, []);
  return (
    <NavigationContainer>
      <AppStackMobile />
    </NavigationContainer>
  );
}

export default AppMobile;
