module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2,disksNumber) - 1;
  const seconds = Math.floor(turns / (turnsSpeed / (60 * 60)));
  const obj = {
   turns,
   seconds
  };
  obj.turns = turns;
  obj.seconds = seconds;
  return obj;
};
