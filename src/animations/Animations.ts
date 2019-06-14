import { Animated } from 'react-native';
import { getMarginForAndroid, getAvatarTopMargin, getHeightForElements } from './helpers';

interface AnimatedType {
    animatedValue: Animated.Value;
}

interface AnimatedHeight extends AnimatedType {
    minHeight: number;
    maxHeight: number;
}

interface AnimatedHeightWithMaxOutput extends AnimatedHeight {
    outputMaxHeight: number;
}

interface AnimatedHeightWithMinOutput extends AnimatedHeight {
    outputMinHeight: number;
}

interface AnimatedWithFontSizes extends AnimatedHeightWithMinOutput {
    headerFontSize: number;
    avatarFontSize: number;
}

type AnimatedHeightWithOutput = AnimatedHeightWithMaxOutput & AnimatedHeightWithMinOutput;

export const getAnimatedHeaderHeight = (
    { animatedValue, minHeight, maxHeight }: AnimatedHeight
    ): Animated.AnimatedInterpolation => (
        animatedValue.interpolate({
            inputRange: [0, maxHeight - minHeight],
            outputRange: [maxHeight, minHeight],
            extrapolate: 'clamp'
        })
    );

export const getAnimatedImageSize = (
    { animatedValue, minHeight, maxHeight, outputMinHeight, outputMaxHeight }: AnimatedHeightWithOutput
    ): Animated.AnimatedInterpolation => (
        animatedValue.interpolate({
            inputRange: [0, maxHeight - minHeight],
            outputRange: [outputMaxHeight, outputMinHeight],
            extrapolate: 'clamp'
          })
    );

export const getAnimatedImagePosition = (
    { animatedValue, minHeight, maxHeight, outputMaxHeight }: AnimatedHeightWithMaxOutput
    ): Animated.AnimatedInterpolation => (
        animatedValue.interpolate({
            inputRange: [0, maxHeight - minHeight],
            outputRange: [
                maxHeight - (outputMaxHeight / 2),
                maxHeight + getAvatarTopMargin(minHeight)
            ],
            extrapolate: 'clamp'
          })
    );

export const getAnimatedZIndex = (
    { animatedValue, minHeight, maxHeight }: AnimatedHeight
): Animated.AnimatedInterpolation => (
    animatedValue.interpolate({
        inputRange: [0, maxHeight - minHeight + getMarginForAndroid()],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
);

export const getAnimatedUsernamePosition = (
    { animatedValue, minHeight, maxHeight, outputMinHeight, avatarFontSize, headerFontSize }: AnimatedWithFontSizes
): Animated.AnimatedInterpolation => {
    const avatarTopMargin = getAvatarTopMargin(minHeight);
    const avatarHiddenBehindHeader = maxHeight - minHeight + avatarTopMargin + outputMinHeight;

    return animatedValue.interpolate({
        inputRange: [
          0,
          avatarHiddenBehindHeader,
          avatarHiddenBehindHeader + (avatarFontSize / 2),
          avatarHiddenBehindHeader + avatarFontSize
        ],
        outputRange: [
          -avatarFontSize - avatarTopMargin,
          -avatarFontSize - avatarTopMargin,
          -headerFontSize / 2 - avatarTopMargin / 2,
          minHeight / 4 - avatarTopMargin
        ],
        extrapolate: 'clamp'
      });
};

export const getAnimatedValues = (scrollY: Animated.Value, screenHeight: number) => {
    const {
        headerMaxHeight,
        headerMinHeight,
        imageMinHeight,
        imageMaxHeight,
        headerFontSize,
        avatarFontSize
    } = getHeightForElements(screenHeight);

    const headerHeight = getAnimatedHeaderHeight({
        animatedValue: scrollY,
        minHeight: headerMinHeight,
        maxHeight: headerMaxHeight
    });

    const imageSize = getAnimatedImageSize({
        animatedValue: scrollY,
        minHeight: headerMinHeight,
        maxHeight: headerMaxHeight,
        outputMinHeight: imageMinHeight,
        outputMaxHeight: imageMaxHeight
    });

    const imageMarginTop = getAnimatedImagePosition({
        animatedValue: scrollY,
        minHeight: headerMinHeight,
        maxHeight: headerMaxHeight,
        outputMaxHeight: imageMaxHeight
    });

    const headerZIndex = getAnimatedZIndex({
        animatedValue: scrollY,
        minHeight: headerMinHeight,
        maxHeight: headerMaxHeight
    });

    const headerTitleBottom = getAnimatedUsernamePosition({
        animatedValue: scrollY,
        maxHeight: headerMaxHeight,
        minHeight: headerMinHeight,
        outputMinHeight: imageMinHeight,
        avatarFontSize,
        headerFontSize
    });

    return {
        headerHeight,
        imageSize,
        imageMarginTop,
        headerZIndex,
        headerTitleBottom
    };
};