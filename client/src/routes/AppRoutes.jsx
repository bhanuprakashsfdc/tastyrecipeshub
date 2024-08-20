// client/src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import RecipeDetail from '../pages/RecipeDetail';
import CreateRecipe from '../pages/CreateRecipe'; // Import the new page
import Error from '../pages/Error';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Route path="/recipe/:title" element={<RecipeDetail />} />
                <Route path="/create" element={<CreateRecipe />} /> {/* New route for creating recipes */}
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
