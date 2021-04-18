import React, { useState } from 'react'
import { PropTypes } from "prop-types";

function AddCategory( { setCategories } ) {

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e)=>{
        const val = e.target.value;
        setInputValue( val );
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories( cats => [inputValue, ...cats] );
            setInputValue("");
        }
    }

    return (
        <form onSubmit= {handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
