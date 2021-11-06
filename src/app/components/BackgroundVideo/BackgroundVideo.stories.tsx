import React from 'react';
import BackgroundVideo from './BackgroundVideo';

export default {
  title: 'Component/BackgroundVideo',
  component: BackgroundVideo,
};

export const Video = (): JSX.Element => (
  <BackgroundVideo file="../assets/horror.mp4" />
);
