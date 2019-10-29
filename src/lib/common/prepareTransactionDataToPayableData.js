import {
  applyPercentFeeInPriceFee,
  applyStatusFeeByPaymentMethod,
  applyPaymentDate,
} from './payableValidateByPaymentMethod';


function prepareTransactionDataToPayableData(transactionData) {
  const {
    paymentMethod,
    price,
    merchantId,
    id,
  } = transactionData;

  const priceFeeApplyPercent = applyPercentFeeInPriceFee(price, paymentMethod);
  const statusFee = applyStatusFeeByPaymentMethod(paymentMethod);
  const paymentDate = applyPaymentDate(paymentMethod);
  const payableData = {
    merchantId,
    transactionId: id,
    priceFee: priceFeeApplyPercent,
    status: statusFee,
    paymentDate,
  };
  return payableData;
}

export default prepareTransactionDataToPayableData;
