import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { TextAndImage, SmImage, ListItemContainer } from './styles';

class ListItem extends PureComponent {
  render() {
    const { placeName, placeImage } = this.props;
    return (
      <ListItemContainer>
        <TextAndImage>
          <SmImage style={{ width: 30, height: 30 }} source={placeImage} />
          <Text>{placeName}</Text>
        </TextAndImage>
      </ListItemContainer>
    );
  }
}

export default ListItem;
