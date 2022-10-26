const { Sequelize, authenticate, close } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/social')

const testConnection = async () => {
    try {
        await authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const closeConnection = () => close();

module.exports = {
    testConnection, 
    closeConnection,
}