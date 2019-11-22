import React from 'react';
import './App.css';
import Marvel from './Marvel';
import Form from './Form';
import Titles from './Titles';

const api_key = "2390526091069491"

class App extends React.Component {
  state= {
    fullName: undefined,
    aliases: undefined,
    affiliates: undefined,
    relatives: undefined,
    power: undefined,
    speed: undefined,
    error: undefined
  }

  getCharacter = async (e) => {
    e.preventDefault();
    const character = e.target.elements.character.value;

    const api_call = await fetch(`https://www.superheroapi.com/api.php/${api_key}/search/${character}`)
    const data = await api_call.json();
    console.log(data)

    this.setState ({
      name: data.results[0].name,
      aliases: data.results[0].biography.aliases,
      affiliates: data.results[0].connections["group-affiliation"],
      relatives:data.results[0].connections.relatives,
      power: data.results[0].powerstats.power,
      speed: data.results[0].powerstats.speed,
      error: ""
    })
  }
  render(){
    return (
    <div className="App">
      <Titles />
      <Form getCharacter={this.getCharacter}/>
      <Marvel 
        name={this.state.name}
        aliases={this.state.aliases}
        affiliates={this.state.affiliates}
        relatives={this.state.relatives}
        powerstats={this.state.powerstats}
        error={this.state.error}

        

      />
    </div>
    );
  }
}

export default App;
