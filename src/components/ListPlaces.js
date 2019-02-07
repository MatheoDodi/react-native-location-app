import React from 'react';

import ListItem from './ListItem';

const ListPlaces = ({ places }) =>
  places.length > 0 &&
  places.map((place, i) => <ListItem placeName={place} key={i} />);

export default ListPlaces;
