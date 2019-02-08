import React from 'react';
import { Modal, View, Text, Image, Button } from 'react-native';
import {
  ImageDetails,
  DetailsModalContainer,
  PlaceDetailsText
} from './styles';

const placeDetail = ({ unselectItem, selectedPlace, deleteItem }) => {
  const content = selectedPlace && (
    <View>
      <ImageDetails source={selectedPlace.image} />
      <PlaceDetailsText>{selectedPlace.name}</PlaceDetailsText>
    </View>
  );

  return (
    <Modal visible={selectedPlace !== null} animationType="slide">
      <DetailsModalContainer>
        {content}
        <Button
          onPress={() => deleteItem(selectedPlace.key)}
          title="Delete"
          color="red"
        />
        <Button onPress={unselectItem} title="Close" />
      </DetailsModalContainer>
    </Modal>
  );
};

export default placeDetail;
