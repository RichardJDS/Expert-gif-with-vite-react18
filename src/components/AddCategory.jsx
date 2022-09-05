import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{

        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2){
            onNewCategory(inputValue);
        // setCategories(c=>{
        //     if(!c.includes(inputValue)){
        //         return [inputValue, ...c];
        //     }
        //      else{
        //     return c}});
        setInputValue('');
        }
    }
    
    console.log("Se ejecuto el teclado")
  return (
    <form onSubmit={handleSubmit} aria-label ="form">
    <h2>{inputValue}</h2>
    <input 
    type="text"
    value={inputValue}
    onChange={handleInputChange}
    />
    </form>
  )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}