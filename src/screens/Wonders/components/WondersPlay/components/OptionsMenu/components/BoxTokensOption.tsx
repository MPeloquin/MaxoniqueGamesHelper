import React from 'react';
import { Layout, Button, Modal, Card } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { BoxProgressTokens } from './BoxProgressTokens';

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export const BoxTokensOption = () => {
    const [visible, setVisible] = React.useState(false);

    return (
        <Layout level="1">
            <Button appearance={'ghost'} onPress={() => setVisible(true)}>
                Tokens in box
            </Button>

            <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <BoxProgressTokens />
                    <Button onPress={() => setVisible(false)}>DISMISS</Button>
                </Card>
            </Modal>
        </Layout>
    );
};
