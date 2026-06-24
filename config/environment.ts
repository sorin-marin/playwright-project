import path from 'path';

// Load .env file only in Node environment
let baseUrl = 'https://automationexercise.com';

try {
  // Dynamically import dotenv only if available
  const dotenv = require('dotenv');
  if (dotenv && dotenv.config) {
    dotenv.config({ path: path.resolve(__dirname, '../.env') });
    baseUrl = process.env.BASE_URL || baseUrl;
  }
} catch (e) {
  // dotenv not available or error loading - use default
  baseUrl = process.env.BASE_URL || baseUrl;
}

export const environment = {
  baseUrl,
};
