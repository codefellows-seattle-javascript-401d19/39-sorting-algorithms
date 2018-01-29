const createArray = module.exports = {};

createArray.empty = () => {
  return [];
};

createArray.single = () => {
  return [Math.floor(Math.random() * 100000)];
};

createArray.small = () => {
  let array = [];

  for (let i = 0; i < 20; i ++) {
    array.push(Math.floor(Math.random() * 100000));
  }

  return array;
};

createArray.medium = () => {
  let array = [];

  for (let i = 0; i < 500; i ++) {
    array.push(Math.floor(Math.random() * 100000));
  }

  return array;
};

createArray.large = () => {
  let array = [];

  for (let i = 0; i < 10000; i ++) {
    array.push(Math.floor(Math.random() * 100000));
  }

  return array;
};