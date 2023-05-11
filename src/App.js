
import './App.css';
// router dom:
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// contexte du store :
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
// import des components:
import Event from './comp/Event';
import Quizz from './comp/Quizz';
import Admin from './comp/Admin';
import Connexion from './comp/Connexion';
import Events from './comp/Events';
import Inscription from './comp/inscription/Inscription';
import Home from './comp/melwin';
import Annonceur from './comp/annonceur';
import Compte from './comp/compte/index';
import Contact from './comp/contact';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path= '/' element={<Home/>}/>
            <Route  path='/co' element={<Connexion/>}/>
            <Route path= '/inscr' element={<Inscription/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/quizz' element={<Quizz/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/annonceur' element={<Annonceur/>}/>
            <Route path='/mon-compte' element={<Compte/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
