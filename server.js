import dotenv from 'dotenv';
dotenv.config(); // Loads environment variables from .env

import app from './src/app.js'; // Import the Express app configuration

const PORT = process.env.PORT || 8080; // Default port if not set in .env

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});