const IncreaseCount = (amount = 1) => ({
  type: 'INCREASE_COUNT',
  payload: amount,
});

console.log(IncreaseCount());
