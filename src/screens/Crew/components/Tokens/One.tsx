import React from 'react';
import { Token } from './Token';

export const One: React.FC = () => {
    console.log('One');
    return <Token source={require('../../../../../assets/crew/one.png')} />;
};
