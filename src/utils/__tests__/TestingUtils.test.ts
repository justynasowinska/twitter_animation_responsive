import React from 'react';
import { shallow } from 'enzyme';

import { setTestID, findByTestID } from '../TestingUtils';

describe('SetTestID', () => {
    it('returns proper data if __DEV__ env is set', () => {
        // @ts-ignore
        __DEV__ = true;
        const testID = 'someTestId';

        const result = setTestID(testID);
        expect(result).toBe(testID);

    });

    it('returns undefined if not __DEV__ env is set', () => {
        // @ts-ignore
        __DEV__ = false;

        const testID = 'anotherTestId';

        const result = setTestID(testID);
        expect(result).toBe(undefined);
    });
});

describe('findByTestID', () => {
    it('returns proper element if it was found in wrapper', () => {
        const testID = 'someTestId';
        const Wrapper = React.createElement('div', { testID });
        const component = shallow(Wrapper);

        expect(findByTestID(component, testID)).toHaveLength(1);
    });

    it('returns empty object if element was not found in wrapper', () => {
        const Wrapper = React.createElement('div', { testID: 'someTestId' });
        const component = shallow(Wrapper);

        expect(findByTestID(component, 'anotherTestId')).toHaveLength(0);
    });
});