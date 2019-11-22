import React from 'react';
import './App.css';
import Marvel from './Marvel';
import Form from './Form';
import Titles from './Titles';

const api_key = "2390526091069491"

class App extends React.Component {
  getCharacter = async (e) => {
    e.preventDefault();
    // const characterId = e.target.element.character.value;

    const api_call = await fetch(`https://www.superheroapi.com/api.php/${api_key}/search/name`)
    const data = await api_call.json();
    console.log(data)
  }
  render(){
    return (
    <div className="App">
      <Titles />
      <Form getCharacter={this.getCharacter}/>
      <Marvel />
    </div>
    );
  }
}

export default App;
