import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Routing from './Components/Routing/Routing';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App(){
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
    <Routing/>
      
  </div>
  );}


export default App;
