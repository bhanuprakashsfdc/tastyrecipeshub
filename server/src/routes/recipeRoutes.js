// server/src/routes/recipeRoutes.js

const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();

// Get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get a recipe by title
router.get('/title', async (req, res) => {
    const { title } = req.query;
    
    try {
        const recipe = await Recipe.findOne({ title });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Create a new recipe
router.post('/', async (req, res) => {
    const { title, ingredients, instructions, imageUrl, userId } = req.body;

    try {
        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            imageUrl,
            userId,
        });

        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
