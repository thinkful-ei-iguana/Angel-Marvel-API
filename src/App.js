import React from 'react';
import './App.css';
import SuperHumans from './SuperHumans';
import Form from './Form';
import Titles from './Titles';

const api_key = "2390526091069491"

class App extends React.Component {
  state= {
    name: undefined,
    
    aliases: undefined,
    affiliates: undefined,
    relatives: undefined,
    height: undefined,
    weight: undefined,

    error: undefined
  }

  getCharacter = async (e) => {
    e.preventDefault();
    const character = e.target.elements.character.value;

    const api_call = await fetch(`https://www.superheroapi.com/api.php/${api_key}/search/${character}`)
    const data = await api_call.json();
    if(character){
      console.log(data);
      this.setState ({
        name: data.results[0].name,

        aliases: data.results[0].biography.aliases,
        affiliates: data.results[0].connections["group-affiliation"],
        relatives:data.results[0].connections.relatives,
        height: data.results[0].appearance.height[0],
        weight: data.results[0].appearance.weight[0],
        error: ""
      });
    }else{
      this.setState({  
        name: undefined,

        aliases: undefined,
        affiliates: undefined,
        relatives: undefined,
        height: undefined,
        weight: undefined,
        error: "Enter a character please!"
      })
    }
  }
  render(){
    return (
    <div className="App">
      <Titles />
      <Form getCharacter={this.getCharacter}/>
      <SuperHumans 
        name={this.state.name}

        aliases={this.state.aliases}
        affiliates={this.state.affiliates}
        relatives={this.state.relatives}
        height={this.state.height}
        weight={this.state.weight}
        error={this.state.error}
      />
    </div>
    );
  }
}

export default App;
