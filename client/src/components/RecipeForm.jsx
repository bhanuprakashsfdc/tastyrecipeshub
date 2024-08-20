// client/src/components/RecipeForm.js

import React, { useState } from 'react';

const RecipeForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientsArray = ingredients.split(',').map(item => item.trim());
        onAdd({ title, ingredients: ingredientsArray, instructions, imageUrl });
        setTitle('');
        setIngredients('');
        setInstructions('');
        setImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Recipe</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Ingredients (comma separated)" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Instructions" 
                value={instructions} 
                onChange={(e) => setInstructions(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Image URL" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                required 
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
