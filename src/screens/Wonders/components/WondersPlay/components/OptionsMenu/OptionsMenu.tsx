import React from 'react';
import { StyleSheet } from 'react-native';
import { Popover, Layout, Button, Icon } from '@ui-kitten/components';
import { AgesHelperOption } from '@/screens/Wonders/components/WondersPlay/components/OptionsMenu/components/AgesHelperOption';
import { BoxTokensOption } from './components/BoxTokensOption';

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
        position: 'relative',
    },
    triggerButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export const OptionsMenu: React.FC = () => {
    const [visible, setVisible] = React.useState(false);

    const renderToggleButton = () => (
        <Button
            style={styles.triggerButton}
            appearance={'ghost'}
            accessoryLeft={<Icon name="menu-outline" />}
            onPress={() => setVisible(true)}
        />
    );

    return (
        <Popover visible={visible} anchor={renderToggleButton} onBackdropPress={() => setVisible(false)}>
            <Layout style={styles.content}>
                <BoxTokensOption />
                <AgesHelperOption />
            </Layout>
        </Popover>
    );
};
