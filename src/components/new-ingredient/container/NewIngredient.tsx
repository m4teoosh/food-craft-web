import React from 'react'
import './NewIngredient.css'
import NewIngForm from "../components/new-ing-form/NewIngForm";

export default function NewIngredient() {



    return (
        <div className='container'>
            <div className='header'>
               NEW INGREDIENT
            </div>
            <NewIngForm />
            <div className='footer'>
                <button
                    className='go-to-recipe-button'
                />
            </div>
        </div>
    )
}