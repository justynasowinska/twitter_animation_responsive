import React from 'react';
import { StyleSheet, Image, Animated, View, Text, ViewStyle } from 'react-native';
import { colors } from './utils/colors';
import { setTestID } from './utils/TestingUtils';

interface PropsType {
  image: any;
  username: string;
  containerStyles?: ViewStyle;
  animatedStyles: any;
  userNameFontSize: number;
}

export const Avatar = (props: PropsType) => {
    const { image, containerStyles, animatedStyles, username, userNameFontSize } = props;

    return (
        <View style={containerStyles}>
          <Animated.View style={[styles.imageContainer, animatedStyles]}>
              <Image
                  source={image}
                  style={styles.image}
              />
          </Animated.View>
          <View>
              <Text
                testID={setTestID('avatarUserName')}
                style={[styles.headerText,
                { fontSize: userNameFontSize }]}
              >
                {username}
              </Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
    borderColor: colors.avatarBorderColor,
    borderWidth: 3,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  headerText: {
    fontWeight: 'bold',
    color: colors.usernameDarkTextColor
  },
});
