import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character.js'
import styled from 'styled-components'


const CharHolder = styled.div`
  background-color: rgba(46, 50, 59, .8);
  width: 70vw;
  margin-left:15vw;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //get data, define state, variables to hold info
  //state  page 

  const [charArr,setCharArr] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharArr(res.data.results)
    })
    .catch(err=>{
      console.log('oops')
    })
  },[])


  const pageUp = ()=>{
    
  }


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <p>Click below to expand information</p>
      <CharHolder>
        {
          charArr.map(a=>{
            return <Character 
                      name ={a.name} 
                      birth = {a['birth_year']} 
                      height = {a.height} 
                      mass = {a.mass}
                      hair = {a['hair_color']}
                      gender = {a.gender}
                      skin = {a['skin_color']}
                      eye = {a['eye_color']}
                    />
          })
        }
      </CharHolder>

    </div>
  );
}

export default App;
