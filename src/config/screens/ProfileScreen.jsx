import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Avatar } from "@rneui/base";
import UsuarioPhoto from '../../../assets/img/logo.png'
import FlatListImages from '../components/FlatListImages';

const ProfileScreen = () => {

  const arrayImagenes = [
    {
        id: 1,
        image: 'https://www.vivaplaya.net/viva/wp-content/uploads/2022/04/amanecer-playa-del-carmen-viva-playa.jpg',
        description: 'Foto de la playa'
    },
    {
        id: 2,
        image: 'https://images.myguide-cdn.com/md/content/2/large/n-a-765978.jpg',
        description: 'Foto de la ciudad de México'
    },
    {
      id: 3,
      image: 'https://elviajista.com/wp-content/uploads/2019/02/hacersaopaulo.jpg',
      description: 'Sao Paulo, Brasil'
    },
    {
      id: 4,
      image: 'https://travelphotomagazine.com/wp-content/uploads/2023/07/curiosidades-Maldivas-5.jpg',
      description: 'Foto de Maldivas, un lugar paradisiaco'
    },
    {
      id: 5,
      image: 'https://assets.vogue.com/photos/659db809e0e9934642099815/16:9/w_6000,h_3375,c_limit/1189690204',
      description: 'Foto de la playa'
    },
    {
      id: 6,
      image: 'https://realestatemarket.com.mx/images/2022/12-diciembre/29-12/Hong-Kong-encabeza-Top-5-de-ciudades-mas-caras-del-mundo.jpg',
      description: 'Hong Kong, China'
    }
]

  return (
  <View style = {styles.container}>
    <View style={styles.row}>
      <Avatar
        size={64}
        rounded
        source={UsuarioPhoto}
      >
      </Avatar>
      <View style={styles.column}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
        Vulmaro Martinez
        </Text>
        <Text style={{ fontSize: 12 }}>20223tn069@utez.edu.mx</Text>
      </View>
    </View>
    <FlatList 
  data={arrayImagenes}
  numColumns={3}
  renderItem={({item}) => (
    <FlatListImages 
      image={item.image} 
      description={item.description} 
    />
  )}
/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  column: {
    flexDirection: "column",
    marginLeft: 16,
  },
})