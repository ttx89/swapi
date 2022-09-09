import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar1 from './Components/Navbar1';
import Home from './Components/Home';
import People from './Components/People';
import Planets from './Components/Planets';
import Starships from './Components/Starships';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  //const [loading, setLoading] = useState(true);
useEffect(() => {
  async function fetchPeople() {
    let result = await fetch('https://swapi.dev/api/people/?format=json');
    let data = await result.json();
    setPeople(data.results);
  }
  async function fetchPlanets() {
    let result = await fetch('https://swapi.dev/api/planets/?format=json');
    let data = await result.json();
    setPlanets(data.results);
  }
  async function fetchStarships() {
    let result = await fetch('https://swapi.dev/api/starships/?format=json');
    let data = await result.json();
    setStarships(data.results);
  }
  fetchPeople();
  fetchPlanets();
  fetchStarships();
},[])
//console.log('data', people);
//console.log('data', planets);
//console.log('data', starships);

  return (
    <>
      <Router>
        <Navbar1 />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/people' element={<People data={people}/>}></Route>
            <Route path='/planets' element={<Planets data={planets}/>}></Route>
            <Route path='/starships' element={<Starships data={starships}/>}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
