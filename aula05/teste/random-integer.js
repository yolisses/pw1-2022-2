const MAX = 100; // constante interna ao módulo; não será exportada!

const randomInteger = () => {
  const rNum = Math.floor(Math.random() * MAX);
  return rNum;
};

module.exports = randomInteger;
