require('dotenv').config();

// Access the variables
const config = {
    apiKey: process.env.API_KEY,
    serverSecret: process.env.SERVER_SECRET,
    isKalvian: process.env.IS_KALVIAN === 'true', // Convert string to boolean
};

module.exports = config;

// Log the variables (for testing)
console.log('Configuration Loaded:', config);
