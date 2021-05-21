import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import { Test, QuestionGroup, Question, Option } from 'react-multiple-choice';

function App() {
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(() => {

  });

  const handleClick = (e,index) => {
    let options = [...selectedOptions];
    

 
    if(e.target.checked){
      // options.length +=1;
      
      options.push(e.target.value);
    }else{
    
      options.splice(options.indexOf(e.target.value),1);
    }
    
    
    console.log(options);
    setSelectedOptions(options);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Choose the best games</p>
        <div>
          <input value={false}  type="checkbox" onClick={e=>handleClick(e,0)}/><label>Mario</label><br />
          <input value={true} type="checkbox" onClick={e=>handleClick(e,1)}/><label> Witcher</label><br />
          <input value={true} type="checkbox" onClick={e=>handleClick(e,2)} /><label>Porn Skurim</label><br />
          <input value={true} type="checkbox" onClick={e=>handleClick(e,3)}/><label>WoW</label><br />
        </div>
      </header>
    </div>
  );
}

export default App;
