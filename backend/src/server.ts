import express from 'express';
import dotenv from 'dotenv';

import sequelize from './config/sequelize';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Database connection failed', error);
  });
