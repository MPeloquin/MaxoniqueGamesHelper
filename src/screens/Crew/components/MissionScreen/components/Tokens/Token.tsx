import React from 'react';
import { ImageSourcePropType, Image, StyleSheet } from 'react-native';

export const tokenStyles = StyleSheet.create({
    small: {
        height: 75,
        width: 75,
        marginHorizontal: 5,
    },
});

interface TokenProps {
    source: ImageSourcePropType;
}

export const Token: React.FC<TokenProps> = ({ source }) => {
    return <Image style={tokenStyles.small} source={source} />;
};
