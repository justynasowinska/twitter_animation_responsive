import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, LayoutChangeEvent } from 'react-native';

import { MainScreen } from './src/MainScreen';
import { ScreenSizeContext } from './src/context/ScreenSizeContext';
import { colors } from './src/utils/colors';

export default function App() {
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  const onLayoutHandle = (e: LayoutChangeEvent) => {
    setScreenHeight(e.nativeEvent.layout.height);
  };

  return (
    <View style={styles.container} onLayout={onLayoutHandle}>
      <ScreenSizeContext.Provider value={{ height: screenHeight }}>
        <MainScreen />
      </ScreenSizeContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor
  }
});
