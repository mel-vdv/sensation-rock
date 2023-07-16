import React, { useEffect } from 'react'
import Header from './header'
import Nav from './nav'
import Banderolle from './banderolle'
import Categories from './categories'
import Deadline from './deadline'
import Nouveaux from './nouveaux'
import Footer from './footer'
import Prefooter from './prefooter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConcours} from '../../lib/redux/actions'
import './index.css';

const Home = () => {

  const dispatch = useDispatch();
  const stateConcours = useSelector(state => ({ ...state.concoursRed }));
  //----------------------------------------------
  useEffect(() => {
    dispatch(fetchConcours());
  }, [dispatch]);
  //----------------------------------------------
  return (
    <>

    {
      (stateConcours.isLoading ) && <div>isLoading...</div>
    }
      {
        (!stateConcours.isLoading && !!stateConcours.items) &&
         <>
          <Header />
          <Nav />
          <Banderolle />
          <Categories />
          <Nouveaux />
          <Deadline />
          <Prefooter />
          <Footer />
        </>
      }
    </>
  )
}

export default Home