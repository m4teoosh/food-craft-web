import React from 'react'
import './Ingredients.css'
import Ingredient from "../../Ingredient/Ingredient";

export default function IngredientsContainer(props: {arr: {}}) {

    const ingredients = props.arr

    const components = ingredients.map(component = () => {
        return (
            <Ingredient data={component} />
        )
    })

    return (
        <div className='ingredients-grid'>
            {components}
        </div>
    )

}