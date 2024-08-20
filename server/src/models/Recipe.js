// server/src/models/Recipe.js

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,  // Ensures that each title is unique
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you'll have a User model later
        required: true,
    },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
