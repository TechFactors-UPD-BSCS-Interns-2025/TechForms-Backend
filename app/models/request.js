'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Request.belongsTo(models.FlightRequest, {
        foreignKey: 'id',
      });
      Request.belongsTo(models.FormType, {
        foreignKey: 'form_id',
      });
    }
  }
  Request.init({
    form_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};