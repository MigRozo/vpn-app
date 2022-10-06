import { useState } from 'react';
import icon from './assets/react.svg';
import MainStatus from './components/MainStatus';

const App = () => {
  const [connected, setConnected] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [currentConnection, setCurrentConnection] = useState('Japan');

  return (
    <main className={`Main ${connected ? 'active' : null}`}>
      <button className={`MainToggle ${connected ? 'active' : null}`} type="button" onClick={() => setConnected(!connected)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M 10 1 V 10 M 6 4 A 8 8 0 1 0 14 4" />
        </svg>
      </button>

      <MainStatus icon={icon} connectionName={currentConnection} connectionStatus={connected} navVisible={navVisible} setNavVisible={setNavVisible} />

      <aside className={`MainNav ${navVisible ? 'active' : null}`}>
        <div className="MainNav_top">back-search</div>
        <div className="MainNav_groups">
          <h2 className="Subtitles">Automatic Connection (3)</h2>
          <ul className="MainNav_list">
            <li className="MainNav_item">
              <input value="Japan" type="radio" name="current_item" id="item_id1" onChange={ () => {setCurrentConnection('Japan'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id1">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Japan</strong>
                <span className="MainNav_item-speed">33%</span>
              </label>
            </li>
            <li className="MainNav_item">
              <input value="Canada" type="radio" name="current_item" id="item_id2" onChange={ () => {setCurrentConnection('Canada'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id2">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Canada</strong>
                <span className="MainNav_item-speed">10%</span>
              </label>
            </li>
            <li className="MainNav_item">
              <input value="Australia" type="radio" name="current_item" id="item_id3" onChange={ () => {setCurrentConnection('Australia'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id3">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Australia</strong>
                <span className="MainNav_item-speed">90%</span>
              </label>
            </li>
          </ul>

          <h2 className="Subtitles">Recent Connections (3)</h2>
          <ul className="MainNav_list">
            <li className="MainNav_item">
              <input value="Japan" type="radio" name="current_item" id="item_id4" onChange={ () => {setCurrentConnection('Japan'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id4">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Japan</strong>
                <span className="MainNav_item-speed">33%</span>
              </label>
            </li>
            <li className="MainNav_item">
              <input value="Canada" type="radio" name="current_item" id="item_id5" onChange={ () => {setCurrentConnection('Canada'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id5">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Canada</strong>
                <span className="MainNav_item-speed">10%</span>
              </label>
            </li>
            <li className="MainNav_item">
              <input value="Australia" type="radio" name="current_item" id="item_id6" onChange={ () => {setCurrentConnection('Australia'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id6">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Australia</strong>
                <span className="MainNav_item-speed">90%</span>
              </label>
            </li>
          </ul>

          <h2 className="Subtitles">All (10)</h2>
          <ul className="MainNav_list">
            <li className="MainNav_item">
              <input value="Japan" type="radio" name="current_item" id="item_id7" onChange={ () => {setCurrentConnection('Japan'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id7">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Japan</strong>
                <span className="MainNav_item-speed">33%</span>
              </label>
            </li>
            <li className="MainNav_item">
              <input value="Canada" type="radio" name="current_item" id="item_id8" onChange={ () => {setCurrentConnection('Canada'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id8">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Canada</strong>
                <span className="MainNav_item-speed">10%</span>
              </label>
            </li>
            <li className="MainNav_item">
              <input value="Australia" type="radio" name="current_item" id="item_id9" onChange={ () => {setCurrentConnection('Australia'); setNavVisible(false); setConnected(true); } } />
              <label htmlFor="item_id9">
                <img className="MainNav_item-icon" src={icon} alt="Item Icon" />
                <strong className="MainNav_item-name">Australia</strong>
                <span className="MainNav_item-speed">90%</span>
              </label>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
}

export default App;
