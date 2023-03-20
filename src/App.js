
import './App.css';
// router dom:
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// contexte du store :
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';
// import des components:
import Home from './comp/Home/index'
import Event from './comp/Event';
import Quizz from './comp/Quizz';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path= '/' element={<Home/>}/>
            <Route path='/events' element={<Event/>}/>
            <Route path='/quiz' element={<Quizz/>}/>
          </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
