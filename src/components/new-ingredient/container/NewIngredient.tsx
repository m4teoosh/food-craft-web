import React from 'react'
import './NewIngredient.css'
import NewIngForm from "../components/new-ing-form/NewIngForm";
import axios from "axios";

export default function NewIngredient() {

    const fetch = () => {

        axios.post('https://rs-food-craft.herokuapp.com/ingredients',
            {
                "name": "dsd",
                "protein": 1,
                "carbohydrates": 1,
                "fat": 1,
                "calories": 10
            }
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='container'>
            <div className='header'>
               NEW INGREDIENT
            </div>
            <NewIngForm />
            <div className='footer'>
                <button
                    className='go-to-recipe-button'
                    onClick={fetch}
                />
            </div>
        </div>
    )
}