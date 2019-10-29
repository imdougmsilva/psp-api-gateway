
function applyPercentFeeInPriceFee(price, paymentMethod) {
  const percentFee = ((paymentMethod === 'debit') ? 0.03 : 0.05);
  const priceDebitPercent = (parseFloat(price) * percentFee);
  return (price - priceDebitPercent);
}

export default applyPercentFeeInPriceFee;
