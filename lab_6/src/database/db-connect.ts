import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 10, // Maximum number of connection in the pool
      min: 0, // Minimum number of connection in the pool
      acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000, // Maximum time, in milliseconds, that a connection can be idle before being released
    },
    logging: false, // Disable logging of SQL queries (set to true to enable)
    define: {
      timestamps: true, // Adds createdAt and updatedAt fields to the model
      underscored: true, // Uses underscored naming convention for the fields (e.g., created_at)
    },
  });
  

export { sequelize };
