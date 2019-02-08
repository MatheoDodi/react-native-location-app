import React from 'react';
import { Modal, View, Text, Image, Button } from 'react-native';

const placeDetail = ({ selectedPlace }) => {
  const content = selectedPlace && (
    <View style={{ flex: 1 }}>
      <Image
        source={selectedPlace && selectedPlace.image}
        style={{ width: 500, height: 500 }}
      />
      <Text>{selectedPlace && selectedPlace.name}</Text>
    </View>
  );

  return (
    <Modal visible={selectedPlace !== null} animationType="slide">
      {content}
      <View>
        <Button title="Delete" color="red" />
        <Button title="Close" />
      </View>
    </Modal>
  );
};

export default placeDetail;
