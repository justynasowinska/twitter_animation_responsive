import { getHeightForElements, getMarginForAndroid, getAvatarTopMargin } from '../helpers';
import { Platform } from 'react-native';

describe('getMarginForAndroid method', () => {
    it('returns proper value for OS platform', () => {
        Platform.OS = 'ios';

        expect(getMarginForAndroid()).toBe(0);
    });

    it('returns proper value for Android platform', () => {
        Platform.OS = 'android';

        expect(getMarginForAndroid()).toBe(24);
    });
});

describe('getAvatarTopMargin method', () => {
    it('returns proper value', () => {
        expect(getAvatarTopMargin(0)).toBe(0);
        expect(getAvatarTopMargin(1000)).toBe(125);
    });
});

describe('getHeightForElements method', () => {
    it('returns proper values for given height', () => {
        const resultsForZero = getHeightForElements(0);

        expect(resultsForZero).toEqual({
            headerMaxHeight: 0,
            headerMinHeight: 0,
            imageMaxHeight: 0,
            imageMinHeight: 0,
            headerFontSize: 0,
            avatarFontSize: 0
        });

        const results = getHeightForElements(1000);

        expect(results).toEqual({
            headerMaxHeight: 160,
            headerMinHeight: 110,
            imageMaxHeight: 100,
            imageMinHeight: 50,
            headerFontSize: 22,
            avatarFontSize: 27
        });
    });
});