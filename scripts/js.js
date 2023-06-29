const sum_node = document.getElementById("sum");
const avg_node = document.getElementById("avg");
const max_sum_node = document.getElementById("max_sum");
const roll_btn = document.getElementById("roll_btn");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function roll(x, y, z) {
  let sum = 0;
  let avg = 0;
  let max_sum = 0;
  let max_sum_current = 0;
  for (let i = 0; i < z; i++) {
    for (let j = 0; j < y; j++) {
      let roll_value = getRandomInt(x) + 1;
      sum += roll_value;
      max_sum_current += roll_value;
    }
    max_sum < max_sum_current && (max_sum = max_sum_current);
    max_sum_current = 0;
  }
  avg = (sum / (y * z)).toFixed(2);
  sum_node.innerHTML = sum;
  avg_node.innerHTML = avg;
  max_sum_node.innerHTML = max_sum + " / " + x * y;
}

roll_btn.onclick = function get_values() {
  let sides = document.getElementById("sides").value;
  let dices = document.getElementById("dices").value;
  let rolls = document.getElementById("rolls").value;

  if (
    sides >= 2 &&
    sides <= 20 &&
    dices >= 1 &&
    dices <= 10 &&
    rolls >= 1 &&
    rolls <= 50
  )
    roll(sides, dices, rolls);
  else alert("Values are not in the given range, try again.");
};
