import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services';
import Footer from './Components/Footer';
import './App.css'
import '../src/Style/mediaquery.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          
          <Route path='/service' element={<Services/>}/>
        </Routes>

       <Footer/>  
    </Router>
      
    </div>
  );
}

export default App;
