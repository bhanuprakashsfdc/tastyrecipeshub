// client/src/pages/CreateRecipe.jsx

import React, { useState } from 'react';
import { DEFAULT_USER_ID, API_URL } from '../constants/constants';

const CreateRecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recipeData = {
            title,
            ingredients,
            instructions,
            imageUrl,
            userId: DEFAULT_USER_ID,
        };

        try {
            const response = await fetch(`${API_URL}recipes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });

            if (response.ok) {
                alert('Recipe created successfully!');
                // Redirect or clear form here
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the recipe.');
        }
    };

    return (
        <div>
            <h2>Create a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Ingredients:</label>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input 
                                type="text" 
                                value={ingredient} 
                                onChange={(e) => handleIngredientChange(index, e.target.value)} 
                                required 
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addIngredient}>
                        Add Ingredient
                    </button>
                </div>
                <div>
                    <label>Instructions:</label>
                    <textarea 
                        value={instructions} 
                        onChange={(e) => setInstructions(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input 
                        type="text" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;
