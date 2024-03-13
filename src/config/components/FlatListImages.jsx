import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

const FlatListImages = (props) => {
  const { image, description } = props;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details',{
      image, description
    });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
      source={{uri: `${image}`}}
      style={styles.image}
      />
    </TouchableOpacity>
  )
}

export default FlatListImages

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginEnd: 10,
  }
})