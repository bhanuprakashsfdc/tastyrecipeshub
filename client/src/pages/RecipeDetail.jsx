// client/src/pages/RecipeDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../constants/constants';

const RecipeDetail = () => {
    const { title } = useParams(); // Assuming title is passed in the URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`${API_URL}title?title=${title}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [title]);

    if (loading) return <p>Loading recipe...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {recipe ? (
                <>
                    <h1>{recipe.title}</h1>
                    <img src={recipe.imageUrl} alt={recipe.title} />
                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h2>Instructions:</h2>
                    <p>{recipe.instructions}</p>
                    <p>Created at: {new Date(recipe.createdAt).toLocaleDateString()}</p>
                </>
            ) : (
                <p>No recipe found.</p>
            )}
        </div>
    );
};

export default RecipeDetail;
