import React, { Component } from 'react'
import Footer from './components/Footer';
import Nav from './components/Nav';
import News from './components/News';
// cfe1199c07ab49a580a4b5c98e338a13
class App extends Component {
  render() {
    return (
      <>
      <Nav />
      <News />
      <Footer />
      </>
    )
  }
}

export default App;