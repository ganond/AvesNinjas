
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import useBirdDetailViewModel from '../viewmodels/BirdDetailViewModel';

const BirdDetailScreen = ({ route }) => {
  const { uid } = route.params;
  const { birdDetail } = useBirdDetailViewModel(uid);

  if (!birdDetail) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: birdDetail.images.main }} style={styles.image} />
      <Text style={styles.name}>{birdDetail.name.spanish}</Text>
      <Text style={styles.name}>{birdDetail.name.english}</Text>
      <Text style={styles.name}>{birdDetail.name.latin}</Text>
      <Text style={styles.detailTitle}>IUCN:</Text>
      <Text style={styles.detail}>{birdDetail.iucn.title}</Text>
      <Text style={styles.detail}>{birdDetail.iucn.description}</Text>
      <Text style={styles.detailTitle}>Hábitat:</Text>
      <Text style={styles.detail}>{birdDetail.habitat}</Text>
      <Text style={styles.detailTitle}>¿Sabías qué?:</Text>
      <Text style={styles.detail}>{birdDetail.didyouknow}</Text>
      <Text style={styles.detailTitle}>Tamaño:</Text>
      <Text style={styles.detail}>{birdDetail.size}</Text>
      <Text style={styles.detailTitle}>Orden:</Text>
      <Text style={styles.detail}>{birdDetail.order}</Text>
      <Text style={styles.detailTitle}>Tipo de especie:</Text>
      <Text style={styles.detail}>{birdDetail.species}</Text>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 8,
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 16,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  detail: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default BirdDetailScreen;
