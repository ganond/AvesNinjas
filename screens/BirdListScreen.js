import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import useBirdListViewModel from '../viewmodels/BirdListViewModel';

const BirdListScreen = () => {
  const { birds, isLoading } = useBirdListViewModel();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToBirdDetail(item.uid)} style={styles.itemContainer}>
      <View style={styles.item}>
        <Image source={{ uri: item.images.thumb }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.spanishName}>{item.name.spanish}</Text>
          <Text style={styles.englishName}>{item.name.english}</Text>
          <Text style={styles.latinName}>{item.name.latin}</Text> 
        </View>
      </View>
    </TouchableOpacity>
  );

  const navigateToBirdDetail = (uid) => {
    navigation.navigate('BirdDetail', { uid });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={birds}
      renderItem={renderItem}
      keyExtractor={(item) => item.uid}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  spanishName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  englishName: {
    fontSize: 14,
    color: '#666',
  },
  latinName: {
    fontSize: 12,
    color: '#999',
  },
});

export default BirdListScreen;
