import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Logo from './components/Logo/Logo';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/gallery">
          <main>About</main>
        </Route>
        <Route path="/">
          <BackgroundVideo file="src/app/components/assets/horror.mp4" />
          <main className={styles.container}>
            <div className={styles.logo}>
              <Logo fill="#fff" width={750} />
            </div>
          </main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
