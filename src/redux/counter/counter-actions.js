export const onIncrement = (num = 1) => ({
  type: 'counter/onIncrement',
  payload: num,
});

export const onDecrement = (num = 1) => ({
  type: 'counter/onDecrement',
  payload: num,
});