import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { Card } from './Card';
import DrawCanvas from "./DrawCanvas"
import Init from "./DrawCanvas"
const firebaseConfig = {
  apiKey: "AIzaSyAopZTSO6fDpfHhyQ5csKE1MSTwxDLV7eg",
  authDomain: "tabecard.firebaseapp.com",
  databaseURL: "https://tabecard-default-rtdb.firebaseio.com",
  projectId: "tabecard",
  storageBucket: "tabecard.appspot.com",
  messagingSenderId: "697210402988",
  appId: "1:697210402988:web:5d7a2faeaee03e61164709",
  measurementId: "G-XJL2X9RS58"
};

// const db = getDatabase(app)



const App = () => {
  return (
    <div>
      <Init></Init>
      <DrawCanvas></DrawCanvas>

    </div>
  )

}

export default App;
