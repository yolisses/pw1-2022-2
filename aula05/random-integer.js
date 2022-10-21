const MAX = 100;

function randomInt() {
  const rNum = Math.floor(Math.random() * MAX);
  return rNum;
}

function teste() {
  console.log('testando');
  return;
}

module.exports = { randomInt, teste };
