import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Ragistaration from './components/Ragistaration';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={ <Ragistaration/>}/>

  
</Routes>
{/* <Login/><br></br> */}
{/* <Ragistaration/><br></br> */}
      
    </div>
  );
}

export default App;
