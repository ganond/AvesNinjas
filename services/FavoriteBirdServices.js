import AsyncStorage from '@react-native-async-storage/async-storage';

const getFavoriteBirds = async () => {
    try {
        const storedFavorites = await AsyncStorage.getItem('favoriteBirds');
        if (storedFavorites) {
            const favoriteIds = JSON.parse(storedFavorites);
            return favoriteIds;
        }
        return [];
    } catch (error) {
        console.error('Error al obtener aves favoritas:', error);
        throw error; 
    }
};

const saveFavoriteBirds = async (favoriteIds) => {
    try {
        await AsyncStorage.setItem('favoriteBirds', JSON.stringify(favoriteIds));
    } catch (error) {
        console.error('Error al guardar aves favoritas:', error);
        throw error; 
    }
};

export { getFavoriteBirds, saveFavoriteBirds };
