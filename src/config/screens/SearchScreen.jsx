import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base'; // Asegúrate de instalar esta biblioteca
import FlatListImages from '../components/FlatListImages';

const SearchScreen = () => {
  const arrayImagenes = [
    {
        id: 1,
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/46/59/intercontinental-bora.jpg?w=600&h=400&s=1',
        description: 'Bora Bora, Isla de la Polinesia Francesa'
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
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="magnify" type='material-community' size={20} color="#000"/>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
        />
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
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
  },
});