import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
  state = {
    pickedImage: null
  };

  handlePickImage = () => {
    ImagePicker.showImagePicker({ title: 'Pick an Image' }, res => {
      if (res.didCancel) {
        console.log('User Cancelled!');
      } else if (res.error) {
        console.log('Error', res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <Image
          source={this.state.pickedImage}
          style={{ width: '100%', height: 200 }}
        />
        <Button onPress={this.handlePickImage} title="Pick Image" />
      </View>
    );
  }
}

export default PickImage;