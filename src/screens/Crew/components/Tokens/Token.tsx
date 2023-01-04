import React from 'react';
import { ImageSourcePropType, Image } from 'react-native';
import { tokenStyles } from 'src/screens/crew/components/Tokens/styles';

interface TokenProps {
    source: ImageSourcePropType;
}

export const Token: React.FC<TokenProps> = ({ source }) => {
    return <Image style={tokenStyles.small} source={source} />;
};
