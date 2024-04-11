import React from 'react'
import Hero from './Hero';
import Books from "./Books";
import AddBooks from "./AddBooks";
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Books/>
      <AddBooks/>
    </div>
  )
}

export default Home;