import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// -----------------------------------------COMPONENTS-------------------------------

import Body from '../src/Component/Body/Body';
import Header from '../src/Component/Header/Header';
import Footer from '../src/Component/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
