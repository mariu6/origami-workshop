import React from 'react';
import Header from "./components/header";
import styles from './App.module.css';
import Aside from './components/aside';
import Origamis from './components/origamis';




function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
    </div>
  );
}

export default App;
