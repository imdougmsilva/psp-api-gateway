import Sequelize from 'sequelize';

export default (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transaction', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    merchantId: {
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      field: 'merchant_id',
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'price',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'description',
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'cardNumber',
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cvv',
    },
    cardExpirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'card_expiration_date',
    },
    cardHolder: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'card_holder',
    },
    paymentMethod: {
      type: DataTypes.ENUM(['debit', 'credit']),
      allowNull: false,
      defaultValue: 'debit',
      field: 'payment_method',

    },
    cardBrand: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'card_brand',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    },
  }, {
    deletedAt: 'deleted_at',
    tableName: 'transactions',
    indexes: [
      { unique: false, fields: ['id'] },
    ],
  });

  return Transaction;
};
