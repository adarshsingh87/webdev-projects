import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
      {/* <Rank /> */}
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
