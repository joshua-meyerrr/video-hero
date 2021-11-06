import React from 'react';
import styles from './BackgroundVideo.module.css';

type BackgroundVideoProps = {
  file: string;
};

export default function BackgroundVideo({
  file,
}: BackgroundVideoProps): JSX.Element {
  return (
    <video className={styles.video} autoPlay loop muted>
      <source src={file} type="video/mp4" />
    </video>
  );
}
