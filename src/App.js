import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
//import cards from './components/cards'
//import Alert from './components/Alert'
import React ,{useState} from 'react'


import Alert from './components/Alert';




function App() {
 

const [mode,setMode] = useState('dark');
const toggleMode =() =>{
  if(mode === 'light') {
    setMode('dark');
  }

  else{
    setMode('light');
  }
}

  return (
    <>
   
    <Navbar mode = {mode} toggleMode = {toggleMode}/>
    <Alert></Alert>
    <div className="container my-3">
    
    
       
    
    </div>
   
    <div>
     
    </div>
    
</>
  );
}

export default App;
