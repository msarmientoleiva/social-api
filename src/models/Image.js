const { sequelize } = require('../database/db');
const { DataTypes } = require('sequelize');

const Image = sequelize.define('images', {
    id: {
        primaryKey: true, 
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    public_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secure_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Image;