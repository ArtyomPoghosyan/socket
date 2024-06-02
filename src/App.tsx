
import { useEffect, useState } from 'react';
import { socket } from './socket';

import './App.css'
// import { Chat } from './pages/chat';
import { Translation } from './pages/translation';

function App() {
  return (
    <div className="App">
      {/* <Chat /> */}
      <Translation/>
    </div>
  );
}

export default App
