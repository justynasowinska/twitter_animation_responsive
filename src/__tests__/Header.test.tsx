import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Header } from '../Header';
import { findByTestID } from '../utils/TestingUtils';

describe('Header component', () => {
    let component: ShallowWrapper;

    beforeEach(() => {
        component = shallow(
            <Header
                animatedHeaderStyles={undefined}
                animatedTextStyles={undefined}
                userName="Someone"
                userNameFontSize={12}
            />
        );
    });

    it('render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('renders given username', () => {
        const username = 'Wendy_W';
        component.setProps({ userName: username });

        expect(findByTestID(component, 'headerUserName').render().text()).toBe(username);
    });
});