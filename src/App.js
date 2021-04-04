import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Characters'
import Character from './components/Character'

const App = () => {

  const [dataObj, setDataObj] = useState(null)
  const [ charDetails, setCharDetails ] = useState(null)

  useEffect( () => {
    axios.get('https://swapi.dev/api/people/')
      .then( resp => {
        setDataObj(resp.data)
      })
      .catch( err => {
        debugger
        console.log(err)
      })
  },[])


  const getDetails = (event, obj) => {
    event.stopPropagation()
    if(event.target.textContent === '+'){
      setCharDetails(obj)
    }
  }

  const getChars = (event) => {
    event.stopPropagation()
    setCharDetails(null)
  }


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {!charDetails && dataObj ? <Characters getDetails={getDetails} charsObj={dataObj}/> : null}
      {charDetails ? <Character data={charDetails} getChars={getChars}/> : null}
    </div>
  );
}

export default App;
