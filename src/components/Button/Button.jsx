import React from 'react';
import { LoadMore } from './Button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      {text}
    </LoadMore>
  );
};
