import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import ListItem from './ListItem';

const ListPlaces = ({ places, deletePlace }) => (
  <ScrollView>
    {places.length > 0 &&
      places.map((place, i) => (
        <TouchableOpacity key={i} onPress={() => deletePlace(i)}>
          <ListItem placeName={place} />
        </TouchableOpacity>
      ))}
  </ScrollView>
);

export default ListPlaces;
