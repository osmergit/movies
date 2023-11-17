
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LabelBottomNavigation from './components/mainnav.js'
import Header from './components/Header/Header.js'
import Movies from "./paginas/Movies/Movies.js";
function App() {
  return (
    
    <div className="app"> 
   <Header />
    <BrowserRouter>
                    <Routes> 
                      <Route>
                      <Route path="/movies"  element={ <Movies />} />
                      <Route path='/' element={ <LabelBottomNavigation />} /> 
                     
   
      </Route>
      </Routes>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
