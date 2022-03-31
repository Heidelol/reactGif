import React from 'react'
import { useState } from 'react'

const AddCategory = ( { setCategories } ) => {

    const [InputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(InputValue.trim().length > 2){
            setCategories( cats => [ InputValue,...cats])
            setInputValue('')
        }   
    }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={InputValue}
                onChange={ handleInputChange }>
            </input>
        </form>
    </div>
  )
}


export default AddCategory;
