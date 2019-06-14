import { Platform } from 'react-native';

export const getMarginForAndroid = () => {
    if (Platform.OS === 'android') {
        return 24;
    }

    return 0;
};

export const getAvatarTopMargin = (height: number) => {
    return height * 0.125;
};

export const getHeightForElements = (screenHeight: number) => {
    return {
        headerMaxHeight: screenHeight * 0.16,
        headerMinHeight: screenHeight * 0.11,
        imageMaxHeight: screenHeight * 0.1,
        imageMinHeight: screenHeight * 0.05,
        headerFontSize: screenHeight * 0.022,
        avatarFontSize: screenHeight * 0.027
    };
};