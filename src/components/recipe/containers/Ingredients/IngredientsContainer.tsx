import React from 'react'
import './Ingredients.css'
import Ingredient from "../../Ingredient/Ingredient";

export default function IngredientsContainer() {
    return (
        <div className='ingredients-grid'>

            <Ingredient />
            <Ingredient />
        </div>
    )
}