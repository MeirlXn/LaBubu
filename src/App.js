
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Addproduct from './components/AddProduct';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Products from './components/Products';
import Mpesapayment from './components/Mpesapayment';



function App() {
  
  return (
    <Router>
     <header className='header'>
         <div>
            <Link to="#" className='title'><b>LaBubu</b></Link>
        </div>

        
      <nav>
       
        <Link to="/" className='btnz'><b>Products</b></Link>
        <Link to="/addproduct" className='btnz'><b>Add a LaBubu</b></Link>
        <Link to="/signin" className='btnz'><b>Login</b></Link>
        <Link to="/signup"  className='btnz'><b>Signup</b></Link>
        
      </nav>
     
      </header>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/' element={<Products/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>
       
      </Routes>
       
      
      <footer className="emo-footer">
  <div className="footer-container">

    {/* About */}
    <div className="footer-col">
      <h3>About</h3>
      <p>
        <b>
        LaBubu is where soft souls meet dark aesthetics.  
        Crafted for those who feel deeply.
        </b>
      </p>
    </div>

    {/* Contact */}
    <div className="footer-col">
      <h3>Contact</h3>
      <b>
      <p>Email: LaBubu@gmail.com</p>
      <p>Instagram: @LaBubu</p>
      <p>X  : @LaBubu</p>
      </b>
    </div>

  </div>
   <hr />
  <p className="emo-copy"><b>© 2026 LaBubu. Stay soft.</b></p>
</footer>
    </Router>

  );
}

export default App;
