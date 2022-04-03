const { Sequelize } = require('sequelize');
const database = require ("../database/db");

const comidas = database.define("comidas", {
  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  descricao: { 
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},

{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = comidas;