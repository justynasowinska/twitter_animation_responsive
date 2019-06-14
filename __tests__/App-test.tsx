import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

it('renders correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
});
