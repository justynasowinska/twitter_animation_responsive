import React from 'react';
import { Dimensions } from 'react-native';

const initialContext = {
    height: Dimensions.get('window').height
};

export const ScreenSizeContext = React.createContext(initialContext);