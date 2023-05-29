import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/db-connect'; // Подключение к базе данных
import User from './user'; // Импортируем модель User

interface PostAttributes {
  id: number | string;
  dateCreation: Date;
  title: string;
  text: string;
  userId: number | string;
}

class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number | string;
  public dateCreation!: Date;
  public title!: string;
  public text!: string;
  public userId!: number | string;

  // Методы модели и другие свойства

  // Типы атрибутов
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER, // Используйте DataTypes.UUID для UUID-идентификатора
      primaryKey: true,
      autoIncrement: true,
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER, // Используйте DataTypes.UUID для UUID-идентификатора
      allowNull: false,
      references: {
        model: User, // Ссылка на модель User
        key: 'id', // Ключ в модели User, на который будет ссылаться userId
      },
    },
  },
  {
    sequelize,
    modelName: 'Post', // Название модели
    tableName: 'posts', // Название таблицы в базе данных
  }
);

// Определяем отношение OneToMany между User и Post
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

export default Post;
