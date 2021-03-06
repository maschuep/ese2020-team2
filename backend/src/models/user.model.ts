import { TodoItem, TodoItemAttributes, TodoItemCreationAttributes } from './todoitem.model';
import {Optional, Model, Sequelize, DataTypes, STRING} from 'sequelize';

export interface UserAttributes {
    userId: number;
    userName: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    telephone: string;
    street: string;
    pinCode: number;
    city: string;
    country: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'userId'> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    userId!: number;
    userName!: string;
    password!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    gender!: string;
    telephone!: string;
    street!: string;
    pinCode!: number;
    city!: string;
    country!: string;

    public static initialize(sequelize: Sequelize) {
        User.init({
            userId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            gender: {
                type: DataTypes.STRING,
            },
            telephone: {
                type: DataTypes.STRING,
            },
            street: {
                type: DataTypes.STRING,
            },
            pinCode: {
                type: DataTypes.NUMBER,
            },
            city: {
                type: DataTypes.STRING,
            },
            country: {
                type: DataTypes.STRING,
            }
        },
            {
                sequelize,
                tableName: 'users'
            }
        );
    }
}
