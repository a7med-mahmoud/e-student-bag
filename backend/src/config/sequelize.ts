import { Sequelize } from 'sequelize';

if (!process.env.DB_URI) {
  throw new Error('The environment variable DB_URI is not set');
}

const sequelize = new Sequelize(process.env.DB_URI);

export default sequelize;
