import React from 'react';
import { InputAuth, InputAuthPlaceholder } from '../styles';

const AuthInput = ({ position, value, secure, placeholder, changeValue }) => (
  <InputAuthPlaceholder
    top={position}
    style={{
      borderBottomColor: '#b990ff',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderWidth: 2
    }}
  >
    <InputAuth
      value={value}
      secureTextEntry={secure && secure}
      placeholder={placeholder}
      onChangeText={changeValue}
    />
  </InputAuthPlaceholder>
);

export default AuthInput;
