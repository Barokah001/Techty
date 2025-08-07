import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './components/Homepage';

const App = () => {
  return (
    <section className="flex flex-col h-fit w-full">
      <Navbar />
      <Homepage />
      <Footer />
    </section>
  );
}

export default App