import './Recipe.css'

import axios from "axios";
import React from 'react'
import {useState} from "react";

function Recipe() {

    const [ingredients, setIngredients] = useState([])

    const fetch = () => {

        axios.get('https://rs-food-craft.herokuapp.com/ingredients')
            .then(function (response) {
                console.log(response.data);
                setIngredients(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    fetch()

    console.log(ingredients)

    return (
        <div>cip</div>
    );
}

export default Recipe;