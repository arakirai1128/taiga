/* eslint-disable jsx-a11y/alt-text */
import taiga_image from './image/taiga.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>✨たいがくんのLINE QR✨</h2>
      </div>
      <div className="image">
        <img src={taiga_image} width="300" height="300"/>
      </div>
    </div>
  );
}

export default App;
