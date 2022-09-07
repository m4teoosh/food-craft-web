import React, {useState} from 'react';
import './Recipe.css'
import IngredientsContainer from "./containers/Ingredients/IngredientsContainer";
import Basket from "./Basket/Basket";
import Search from "./Search/Search";
import axios from "axios";

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
        <div className='new-recipe'>
            <div className='selected-ingredients'>
                <Basket />
            </div>
            <Search />
            <div className='ingredients-container'>
                <IngredientsContainer
                    arr={ingredients}
                />
            </div>
        </div>
    );
}

export default Recipe;