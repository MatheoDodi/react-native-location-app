import React from 'react';
import { Text } from 'react-native';
import { ListItem } from './styles';

const listItem = ({ placeName }) => (
  <ListItem>
    <Text>{placeName}</Text>
  </ListItem>
);

export default listItem;
