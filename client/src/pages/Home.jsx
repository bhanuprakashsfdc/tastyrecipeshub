// client/src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import { API_URL } from '../constants/constants';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ ingredient: '', cuisine: '' });
    const [sortBy, setSortBy] = useState('title');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`${API_URL}recipes`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    // Filtering function
    const filteredRecipes = recipes.filter(recipe => {
        return (
            (filters.ingredient ? recipe.ingredients.includes(filters.ingredient) : true) &&
            (filters.cuisine ? recipe.cuisine === filters.cuisine : true)
        );
    });

    // Sorting function
    const sortedRecipes = filteredRecipes.sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'date') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    if (loading) return <p>Loading recipes...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Welcome to Tasty Recipes Hub!</h1>
            <h2>Recipe List</h2>
            <div>
                <label>
                    Filter by Ingredient:
                    <input
                        type="text"
                        name="ingredient"
                        value={filters.ingredient}
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Sort By:
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="title">Title</option>
                        <option value="date">Date Created</option>
                    </select>
                </label>
            </div>
            <RecipeList recipes={sortedRecipes} />
        </div>
    );
};

export default Home;
