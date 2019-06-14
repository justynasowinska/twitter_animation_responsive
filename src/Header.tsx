import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { colors } from './utils/colors';
import { setTestID } from './utils/TestingUtils';

interface PropsType {
  animatedHeaderStyles: any;
  animatedTextStyles: any;
  userName: string;
  userNameFontSize: number;
}

export const Header = (props: PropsType) => {
    const { animatedHeaderStyles, animatedTextStyles, userName, userNameFontSize } = props;

    return (
        <Animated.View style={[styles.header, animatedHeaderStyles]}>
            <Animated.Text
              testID={setTestID('headerUserName')}
              style={
                [styles.username, { fontSize:  userNameFontSize }, animatedTextStyles]
                }
            >
              {userName}
            </Animated.Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.headerBgColor,
    alignItems: 'center',
  },
  usernameContainer: {
    position: 'absolute'
  },
  username: {
    position: 'absolute',
    fontWeight: 'bold',
    color: colors.usernameLightTextColor
  }
});
