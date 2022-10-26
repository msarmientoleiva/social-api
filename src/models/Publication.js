const { sequelize } = require('../database/db');
const { DataTypes } = require('sequelize');
const Image = require('./Image');

const Publication = sequelize.define('publications', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Publication.hasMany(Image, {
    foreignKey: 'publication_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = Publication;