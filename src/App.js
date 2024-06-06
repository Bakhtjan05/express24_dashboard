import './App.css';
import {Provider} from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import LoginPage from './Pages/LoginPage';
import store from './Redux/store';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard/*" element={<Hero/>}/>
        </Routes>
      
    </BrowserRouter>
    </Provider>
  );
}

export default App;
