import React from 'react';

class StarWars extends React.Component{
  render(){
    return(
      <div> 
        <p>Character Name: { this.props.name }</p>
        <p> Character Aliases: { this.props.aliases }</p> 
        <p> Character Affiliates: {this.props.affiliates }</p>
        <p> Character Relatives: { this.props.relatives }</p>
        <p> Character Overall Power: { this.props.power }</p>
        <p> Character Overall Speed: { this.props.speed }</p> 
      </div>
    )
  }
}

export default StarWars;