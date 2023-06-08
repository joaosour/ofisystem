'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Modelos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
      idCategoria: {
        type: Sequelize.INTEGER,
        //references:{ //Trasformando em chave estrangeira
          //model: 'categoria',
          //key: 'id'
       // },
        //onUpdate: 'cascade',
        //onDelete:'cascade'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      url_imgModel:{
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Modelos');
  }
};