import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Canvas colorManagement>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <App position={[-1.2, 0, 0]} />
    <App position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
