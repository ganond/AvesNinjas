import { useEffect, useState } from 'react';
import { getFavoriteBirds, saveFavoriteBirds } from '../services/FavoriteBirdServices';

const useFavoritesViewModel = () => {
    const [favoriteBirds, setFavoriteBirds] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            const favoriteIds = await getFavoriteBirds();
            setFavoriteBirds(favoriteIds);
        };

        loadFavorites();
    }, []);

    const toggleFavorite = async (birdId) => {
        let updatedFavorites = [...favoriteBirds];
        const index = updatedFavorites.indexOf(birdId);
        if (index !== -1) {
            updatedFavorites.splice(index, 1);
        } else {
            updatedFavorites.push(birdId);
        }
        setFavoriteBirds(updatedFavorites);
        await saveFavoriteBirds(updatedFavorites);
    };

    return { favoriteBirds, toggleFavorite };
};

export default useFavoritesViewModel;
