import React from 'react';
import { Layout, Button, Modal, Card, List } from '@ui-kitten/components';
import { StyleSheet, ListRenderItem, Image } from 'react-native';

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        maxHeight: 270,
        backgroundColor: '#222B45',
        marginBottom: 10,
    },
    contentContainer: {
        alignItems: 'center',
    },
    item: {},
    icon: {
        marginVertical: 10,
    },
});

const sourceMap = {
    age1: require('@/../assets/wonders/age1.webp'),
    age2: require('@/../assets/wonders/age2.webp'),
    age3: require('@/../assets/wonders/age3.webp'),
} as const;

export const AgesHelperOption: React.FC = () => {
    const [visible, setVisible] = React.useState(false);

    const renderItem: ListRenderItem<'age1' | 'age2' | 'age3'> = (info) => (
        <Image style={styles.icon} source={sourceMap[info.item]} />
    );

    return (
        <Layout level="1">
            <Button appearance={'ghost'} onPress={() => setVisible(true)}>
                Ages configurations
            </Button>

            <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <List
                        style={styles.container}
                        contentContainerStyle={styles.contentContainer}
                        data={['age1', 'age2', 'age3'] as const}
                        renderItem={renderItem}
                    />
                    <Button onPress={() => setVisible(false)}>DISMISS</Button>
                </Card>
            </Modal>
        </Layout>
    );
};
