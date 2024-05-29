import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const BirdListItem = ({ bird, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image
          source={{ uri: bird.images.thumb }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{bird.name.spanish}</Text>
      
      </View>
    </TouchableOpacity>
  );
};

export default BirdListItem;
