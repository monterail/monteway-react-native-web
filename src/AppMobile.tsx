import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import { initSentry } from '@/services/sentry';

function AppMobile() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
    initSentry();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

export default AppMobile;
