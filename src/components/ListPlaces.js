import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';

import ListItem from './ListItem';

const ListPlaces = ({ places, deletePlace }) => (
  <FlatList
    data={places}
    renderItem={info => (
      <TouchableOpacity
        key={info.item.key}
        onPress={() => deletePlace(info.item.key)}
      >
        <ListItem placeName={info.item.value} />
      </TouchableOpacity>
    )}
    keyExtractor={item => item.key.toString()}
  />
);

export default ListPlaces;
