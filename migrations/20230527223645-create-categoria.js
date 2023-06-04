'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      quantModel: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{ //Trasformando em chave estrangeira
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      url_img: {
        type: Sequelize.STRING
      },
    
  
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Categoria');
  }
};