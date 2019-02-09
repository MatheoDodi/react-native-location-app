import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HomeView, Container } from './src/components/styles';
import PlaceInput from './src/components/PlaceInput';
import ListPlaces from './src/components/ListPlaces';
import PlaceDetail from './src/components/PlaceDetails';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions/index';
import Auth from './src/screens/Auth';

class App extends Component {
  handleAddPlace = place => {
    this.props.onAddPlace(place);
  };

  handleDeletePlace = id => {
    this.props.onDeletePlace(id);
    this.props.onDeselectPlace();
  };

  handleSelectItem = id => {
    this.props.onSelectPlace(id);
  };

  handleUnselectItem = () => {
    this.props.onDeselectPlace();
  };

  render() {
    console.log(this.props);
    return (
      <HomeView>
        <Container>
          <PlaceDetail
            deleteItem={this.handleDeletePlace}
            unselectItem={this.handleUnselectItem}
            selectedPlace={this.props.selectedPlace}
          />
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
  onDeletePlace: id => dispatch(deletePlace(id)),
  onSelectPlace: id => dispatch(selectPlace(id)),
  onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
