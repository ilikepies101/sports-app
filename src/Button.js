import React, { Component } from 'react';

const Button = ({name}) => {
  const text = name;
  return (<button>{text}</button>);
}

export default Button;
