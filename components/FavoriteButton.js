// components/FavoriteButton.js
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { addFavorite, removeFavorite, isFavorite } from '../services/BirdService';

const FavoriteButton = ({ bird }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const result = await isFavorite(bird.uid);
      setFavorite(result);
    };
    checkFavoriteStatus();
  }, [bird]);

  const handlePress = async () => {
    if (favorite) {
      await removeFavorite(bird.uid);
    } else {
      await addFavorite(bird);
    }
    setFavorite(!favorite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}</Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
