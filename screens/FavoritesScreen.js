import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import useFavoritesViewModel from '../viewmodels/FavoritesViewModel';

const FavoritesScreen = () => {
    const { favoriteBirds, toggleFavorite } = useFavoritesViewModel();

    const navigateToBirdDetail = (birdId) => {
      
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigateToBirdDetail(item.uid)} style={styles.itemContainer}>
             
                <Text>{item.name}</Text>
                <TouchableOpacity onPress={() => toggleFavorite(item.uid)}>
                    <Text>{favoriteBirds.includes(item.uid) ? '★' : '☆'}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={favoriteBirds}
            renderItem={renderItem}
            keyExtractor={(item) => item.uid}
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default FavoritesScreen;
