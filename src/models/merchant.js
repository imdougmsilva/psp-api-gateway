import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Merchant = sequelize.define('merchants', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'document',
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'token',
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: 'expiration_date',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    },
  }, {
    deletedAt: 'deleted_at',
    tableName: 'merchant',
    indexes: [
      { unique: false, fields: ['id'] },
    ],
  });


  Merchant.checkMerchantIsValidByToken = async (token) => {
    try {
      return await Merchant.findOne({ where: { token } });
    } catch (err) {
      throw new Error(err);
    }
  };

  return Merchant;
};
