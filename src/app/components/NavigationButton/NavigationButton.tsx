import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationButton.module.css';

type NavigationButtonProps = {
  redirect: string;
  className?: string;
  children: React.ReactNode;
};

export default function NavigationButton({
  redirect,
  className,
  children,
}: NavigationButtonProps): JSX.Element {
  return (
    <Link className={`${styles.link} ${className}`} to={redirect}>
      {children}
    </Link>
  );
}
