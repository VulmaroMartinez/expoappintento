import { StyleSheet, Text, View } from 'react-native'
import { Image, Icon } from '@rneui/base'
import React from 'react'

const Details = ({ route }) => {
    const { image, description } = route.params;
  return (
    <View style={styles.container}>
        <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.image}
      />
        <View style={styles.icons}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginEnd: 5 }}>15</Text>
        <Icon name='heart' type='material-community' color={'red'} />
        <View style={styles.iconsRight}>
          <Icon name='send' type='material-community' />
          <Icon name='arrow-left-top' type='material-community' />
        </View>
      </View>
      <Text>{description}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 320,
        height: 150,
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