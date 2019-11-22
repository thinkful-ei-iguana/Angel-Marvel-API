import React from 'react';

class Form extends React.Component {
  render(){
    return(
     <form onSubmit={this.props.getCharacter} >
       <input type="text" name="character" placeholder="Marvel Character..."/>
       <button> Get Character </button>
     </form>
    )
  }
}

export default Form;