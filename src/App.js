import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
//import cards from './components/cards'
//import Alert from './components/Alert'
import React ,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
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
    <Router>
    <Navbar mode = {mode} toggleMode = {toggleMode}/>
    <Alert></Alert>
    <div className="container my-3">
    
    <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path='/'> 
          <TextForm heading="Enter the text to analyse below" mode = {mode}> </TextForm>
          </Route>
          
        </Switch>
       
    
    </div>
    </Router>
    <div>
     
    </div>
    
</>
  );
}

export default App;
