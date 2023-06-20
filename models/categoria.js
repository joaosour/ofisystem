'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.belongsTo(models.User); //Categoria pertence a usuario
      //Categoria,this.hasMany(models.Modelo); //Uma categoria pode ter muitos modelos
    }
  }
  Categoria.init({
    categoria: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantModel: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    url_img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};