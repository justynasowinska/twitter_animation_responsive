import React from 'react';
import { shallow } from 'enzyme';

import { MainScreen } from '../MainScreen';

describe('MainScreen component', () => {
    it('initially renders correctly', () => {
        const component = shallow(<MainScreen />);
        expect(component).toMatchSnapshot();
    });
});