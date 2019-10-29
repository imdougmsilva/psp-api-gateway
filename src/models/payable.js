import Sequelize from 'sequelize';
import prepareTransactionDataToPayableData from '../lib/common/prepareTransactionDataToPayableData';

export default (sequelize, DataTypes) => {
  const Payable = sequelize.define('payable', {
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
    transactionId: {
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      type: Sequelize.UUID,
      field: 'transaction_id',
    },
    priceFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'price_fee',
    },
    status: {
      type: DataTypes.ENUM(['paid', 'waiting_funds']),
      allowNull: false,
      defaultValue: 'paid',
      field: 'status',

    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'payment_date',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    deletedAt: 'deleted_at',
    tableName: 'payables',
    indexes: [
      { unique: false, fields: ['id'] },
    ],
  });


  Payable.createPayable = async transaction => Payable.create(
    prepareTransactionDataToPayableData(transaction),
  );

  return Payable;
};
