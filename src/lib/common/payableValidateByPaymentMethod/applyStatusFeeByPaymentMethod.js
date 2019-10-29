
function applyStatusFeeByPaymentMethod(paymentMethod) {
  return ((paymentMethod === 'debit') ? 'paid' : 'waiting_funds');
}

export default applyStatusFeeByPaymentMethod;
