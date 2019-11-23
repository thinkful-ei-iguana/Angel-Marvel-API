import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getCharacter} >
      <input type="text" name="character" placeholder="DC or Marvel Character..."/>
      <button> Get Character </button>
    </form>
  )
}

export default Form;