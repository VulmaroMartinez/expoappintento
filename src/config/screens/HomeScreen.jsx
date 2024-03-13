import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, Card, Icon } from '@rneui/base'
import bali from '../../../assets/img/balihotel.jpg'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Card>
                <Image
                    source={bali}
                    style={{ width: 320, height: 150 }}
                />
                <View style={styles.icons}>
                    <Text style={{fontSize: 16, fontWeight:'bold', marginEnd: 5}}>15</Text>
                    <Icon name='heart' type='material-community' color={'red'} />
                    <View style={styles.iconsRight}>
                    <Icon name='send' type='material-community' />
                    <Icon name='arrow-left-top' type='material-community' />
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    icons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsRight: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    }
})