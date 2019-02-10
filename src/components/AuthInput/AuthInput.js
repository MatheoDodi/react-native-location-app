import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { InputAuth, InputAuthPlaceholder } from '../styles';

const AuthInput = ({
  position,
  value,
  secure,
  placeholder,
  changeValue,
  error
}) => (
  <Fragment>
    {error && (
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Poppins',
          position: 'absolute',
          top: position - 35,
          color: 'red'
        }}
      >
        {error}
      </Text>
    )}
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
  </Fragment>
);

export default AuthInput;
