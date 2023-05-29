import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/db-connect'; // Подключение к базе данных

interface UserAttributes {
  id: number | string;
  username: string;
  email: string;
  age: number;
  info?: string;
  address?: { city: string; street: string };
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number | string;
  public username!: string;
  public email!: string;
  public age!: number;
  public info?: string;
  public address?: { city: string; street: string };

  // Методы модели и другие свойства

  // Типы атрибутов
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER, // Используйте DataTypes.UUID для UUID-идентификатора
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User', // Название модели
    tableName: 'users', // Название таблицы в базе данных
  }
);

export default User;
