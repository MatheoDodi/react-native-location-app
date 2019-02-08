import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';

import ListItem from './ListItem';

const ListPlaces = ({ places, selectItem }) => (
  <FlatList
    data={places}
    renderItem={info => (
      <TouchableOpacity
        key={info.item.key}
        onPress={() => selectItem(info.item.key)}
      >
        <ListItem placeName={info.item.name} placeImage={info.item.image} />
      </TouchableOpacity>
    )}
    keyExtractor={item => item.key.toString()}
  />
);

export default ListPlaces;
