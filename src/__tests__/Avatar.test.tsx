import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Avatar } from '../Avatar';
import { findByTestID } from '../utils/TestingUtils';

describe('Avatar component', () => {
    let component: ShallowWrapper;

    beforeEach(() => {
        component = shallow(
            <Avatar
                image={require('../../assets/me.jpeg')}
                username="John_Doe"
                animatedStyles={undefined}
                userNameFontSize={15}
            />
        );
    });

    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('renders correct username', () => {
        const username = 'Donald_Duck';
        component.setProps({ username });

        const foundElement = findByTestID(component, 'avatarUserName') as ShallowWrapper;

        expect(foundElement.dive().text()).toBe(username);
    });
});