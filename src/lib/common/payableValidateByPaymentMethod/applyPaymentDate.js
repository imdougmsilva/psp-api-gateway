
function applyPaymentDate(paymentMethod) {
  const currentDate = new Date();
  const daysToPaymentDate = ((paymentMethod === 'debit') ? 0 : 30);
  const paymentDate = new Date(currentDate);
  return paymentDate.setDate(paymentDate.getDate() + daysToPaymentDate);
}

export default applyPaymentDate;
