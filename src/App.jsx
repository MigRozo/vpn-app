import { useState } from 'react';
import icon from './assets/react.svg';

const App = () => {
  const [connected, setConnected] = useState(false);

  return (
    <main className={`Main ${connected ? 'active' : null}`}>
      <button className={`MainToggle ${connected ? 'active' : null}`} type="button" onClick={() => setConnected(!connected)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M 10 1 V 10 M 6 4 A 8 8 0 1 0 14 4" />
        </svg>
      </button>

      <button className="MainStatus" type="button">
        <img className="MainStatus_icon" src={icon} alt="Status Icon" />
        <div className="MainStatus_label">
          <strong>Japan</strong>
          <span>Connection {connected ? 'Enabled' : 'Disabled'}</span>
        </div>
      </button>
    </main>
  );
}

export default App;
