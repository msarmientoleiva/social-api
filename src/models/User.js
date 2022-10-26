const { sequelize } = require('../database/db');
const { DataTypes } = require('sequelize');
const Publication = require('./Publication');

const User = sequelize.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

User.hasMany(Publication, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = User;