import React, { useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, Animated, ViewStyle } from 'react-native';
import { Header } from './Header';
import { Avatar } from './Avatar';
import { images } from './utils/images';
import { getAnimatedValues } from './animations/Animations';
import { ScreenSizeContext } from './context/ScreenSizeContext';
import { getHeightForElements } from './animations/helpers';

export const MainScreen = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const { height } = useContext(ScreenSizeContext);

  const mock_username = 'Justyna_S';

  const {
    headerHeight,
    imageSize,
    imageMarginTop,
    headerZIndex,
    headerTitleBottom,
  } = getAnimatedValues(scrollY, height);

  const { headerFontSize, avatarFontSize } = getHeightForElements(height);

  return (
    <>
      <Header
          userName={mock_username}
          animatedHeaderStyles={{ height: headerHeight, zIndex: headerZIndex }}
          animatedTextStyles={{ bottom: headerTitleBottom }}
          userNameFontSize={headerFontSize}
      />
      <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          onScroll={
              Animated.event([
                  { nativeEvent: { contentOffset: { y: scrollY } } }
              ])
          }
      >
          <Avatar
              image={images.avatarImg}
              username={mock_username}
              containerStyles={styles.avatarContainer}
              userNameFontSize={avatarFontSize}
              animatedStyles={{ width: imageSize, height: imageSize, marginTop: imageMarginTop }}
          />
          <View style={{ height: height * 2 }} />
      </ScrollView>
    </>
  );
};

interface Style {
    scrollView: ViewStyle;
    avatarContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  scrollView: {
    flex: 1
  },
  avatarContainer: {
      marginLeft: '3%'
  }
});
