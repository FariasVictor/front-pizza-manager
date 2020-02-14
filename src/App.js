import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.js';
import Header from './components/Header.js';
import Container from './components/Container.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes />
      </Container >
    </BrowserRouter>
  )
}

export default App;
