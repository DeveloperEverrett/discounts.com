import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Promo from './components/Promo';

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <Promo />
      <Footer />
    </>
  );
};

export default App;
