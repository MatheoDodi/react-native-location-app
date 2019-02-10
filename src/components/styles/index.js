import styled from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(2);
`;

export const Logo = styled.Image`
  width: 260px;
  height: 60px;
  margin-bottom: 45px;
`;

export const AuthScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 110px;
`;

export const StatusBarMargin = styled.View`
  margin-top: 29px;
`;

export const LoginButtonWrapper = styled.View`
  border-radius: 5;
  background-color: #6fc5a5;
  color: white;
  padding: 5px 8px;
  width: 150px;
  align-items: center;
  box-shadow: 0 0 15px rgba(111, 197, 165, 1);
`;

export const LoginButtonText = styled.Text`
  font-size: 30px;
  color: white;
`;

export const SignupButtonWrapper = styled.View`
  margin-top: 20px;
  border: 2px solid #b990ff;
  border-radius: 5;
  width: 100px;
  align-items: center;
  padding: 3px 5px;
`;

export const SignupButtonText = styled.Text`
  font-size: 20px;
  color: #b990ff;
`;

export const HomeView = styled.View`
  padding-top: 100;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  justify-content: flex-start;
  align-items: center;
`;

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
