import React from 'react'
import Header from './header'
import Nav from './nav'
import Banderolle from './banderolle'
import Categories from './categories'
import Deadline from './deadline'
import Nouveaux from './nouveaux'
import Footer from './footer'
import Prefooter from './prefooter'

const Home = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Banderolle/>
    <Categories/>
    <Deadline/>
    <Nouveaux/>
    <Prefooter/>
    <Footer/>
    </>
  )
}

export default Home