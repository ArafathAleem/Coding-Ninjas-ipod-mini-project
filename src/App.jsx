import { useState } from "react";
import styles from "./App.module.css";
import IPod from "./Components/Ipod/IPod";

function App() {
  return (
    <>
      <IPod className={styles.app} />
    </>
  );
}

export default App;
