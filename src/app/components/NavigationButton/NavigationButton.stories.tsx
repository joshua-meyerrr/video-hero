import React from 'react';
import NavigationButton from './NavigationButton';

export default {
  title: 'Component/navigationButton',
  component: NavigationButton,
};

export const Gallery = (): JSX.Element => (
  <NavigationButton redirect="#">Gallery</NavigationButton>
);
