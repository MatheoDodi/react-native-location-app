import React, { Component } from 'react';
import { Row, Input, SearchButton } from './styles';
import placeImage from '../assets/images/beautiful-place.jpg';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  handleChangePlaceName = value => {
    this.setState({ placeName: value });
  };

  // sends new input to the App.js component
  handlePlaceSubmit = () => {
    const { placeName } = this.state;
    this.props.addPlace({ placeName, placeImage });

    this.setState({ placeName: '' }); //clears input field
  };

  render() {
    const { placeName } = this.state;
    return (
      <Row>
        <Input
          style={{ borderColor: 'black', borderBottomWidth: 1 }}
          value={placeName}
          onChangeText={this.handleChangePlaceName}
          placeholder="Search for an awesome place"
        />
        <SearchButton onPress={this.handlePlaceSubmit} title="Add" />
      </Row>
    );
  }
}

export default PlaceInput;
