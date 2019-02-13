import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HomeView, Container } from './src/components/styles';
import PlaceInput from './src/components/PlaceInput';
import ListPlaces from './src/components/ListPlaces';
import { addPlace, deletePlace } from './src/store/actions/index';

class App extends Component {
  handleAddPlace = place => {
    this.props.onAddPlace(place);
  };

  handleDeletePlace = id => {
    this.props.onDeletePlace(id);
    this.props.onDeselectPlace();
  };

  render() {
    console.log(this.props);
    return (
      <HomeView>
        <Container>
          <PlaceInput addPlace={this.handleAddPlace} />
          <ListPlaces
            places={this.props.places}
            selectItem={id => this.handleSelectItem(id)}
          />
        </Container>
      </HomeView>
    );
  }
}

const mapStateToProps = state => {
  const { places, selectedPlace } = state.places;

  return {
    places,
    selectedPlace
  };
};

const mapDispatchToProps = dispatch => ({
  onAddPlace: place => dispatch(addPlace(place)),
  onDeletePlace: id => dispatch(deletePlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
