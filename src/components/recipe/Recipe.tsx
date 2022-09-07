import React from 'react';
import './Recipe.css'
import IngredientsContainer from "./containers/Ingredients/IngredientsContainer";
import Basket from "./Basket/Basket";
import Search from "./Search/Search";

function Recipe() {
    return (
        <div className='new-recipe'>
            <div className='selected-ingredients'>
                <Basket />
            </div>
            <Search />
            <div className='ingredients-container'>
                <IngredientsContainer />
            </div>
        </div>
    );
}

export default Recipe;