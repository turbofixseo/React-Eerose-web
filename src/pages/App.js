import React from 'react';
import './App.css';
import GoogleFontLoader from 'react-google-font-loader';

function App() {
  return (
    <div className='App'>
      <div className='header-bar'>
        <div className='logo'>
          <GoogleFontLoader
            fonts={[
              {
                font: 'Permanent Marker',
                weights: [400, 700],
              },
              {
                font: 'Syncopate',
                weights: [400, 700],
              },
              {
                font: 'Rasa',
                weights: [400, 700],
              }
            ]}
            subsets={['cyrillic-ext', 'greek']}
          />
          <div className='logo-contanier'>
            <p className='logo-ar'>AR</p>
            <p className='logo-large'>HERoEs</p>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='preview-text'>
          <p>AR World</p>
          <p>3D dragon hero fighting</p>
          <p>beathing fire</p>
        </div>
      </div>
      <div className='footer-bar'>
        
      </div>
    </div>
  );
}

export default App;
