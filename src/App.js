import React from 'react'
import Pico8 from 'react-pico-8'
import { Controls,
         Reset,
         Pause,
         Sound,
         Carts,
         Fullscreen } from 'react-pico-8/buttons'
import 'react-pico-8/styles.css'
import './App.css';

const App = () => (

  <div className='App'>


    <div className='container'>
      <div className='logo'>
        <h1>Goblin Knight</h1>
        <h2>a pico-8 roguelike</h2>

      </div>

      <div className='game-container'>
        <Pico8 className='game' src="roguelike.js"
              autoPlay={true}
              legacyButtons={false}
              hideCursor={false}
              center={true}
              blockKeys={true}
              usePointer={true}
              unpauseOnReset={true}
        >
          <Reset/>
          <Sound/>
          <Fullscreen/>
        </Pico8>
      </div>

      <div className='controls'>
        <h2>controls</h2>
        <p>* arrow keys - move character / navigate equipment menu</p>
        <p>* z key - skip turn / close menu</p>
        <p>* x key - open equipment / confirm</p>
      </div>
    </div>
    
  </div>
)

export default App;