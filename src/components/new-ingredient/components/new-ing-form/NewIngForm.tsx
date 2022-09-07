import React from 'react';
import './NewIngForm.css'
import items from '../../IngredientsData'

function createJSON() {

}

export default function NewIngForm() {

    const inputs = items.map(item => {
        return (
            <div className='input-container'>
                <input type='text' placeholder={item} className='input'/>
            </div>
                )
    })

    return (
        <div className='form'>
            {inputs}
        </div>
    );
}

