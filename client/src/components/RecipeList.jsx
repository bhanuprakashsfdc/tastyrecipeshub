// client/src/components/RecipeList.jsx

import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes }) => {
    return (
        <ul>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.imageUrl} alt={recipe.title} />
                        <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                        <p>Instructions: {recipe.instructions}</p>
                    </li>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </ul>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
            instructions: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default RecipeList;
