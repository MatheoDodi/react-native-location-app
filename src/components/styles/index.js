import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 70%;
`;

export const SearchButton = styled.Button`
  width: 30%;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ListItemContainer = styled.View`
  width: 100%;
  background-color: #eee;
  padding: 10px;
  margin: 5px;
`;

export const Container = styled.View`
  width: 80%;
  margin: 0 auto;
`;

export const TextAndImage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SmImage = styled.Image`
  height: 30px;
  width: 10px;
  margin-right: 10px;
`;

export const ImageDetails = styled.Image`
  width: 100%;
  height: 200px;
`;

export const DetailsModalContainer = styled.View`
  margin: 20px;
  margin-top: 60px;
`;

export const PlaceDetailsText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  margin-top: 5px;
`;
