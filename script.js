const object = {
  a: 'b',
  L: ['i1', 'i2'],
  D: {
    d1: 'One',
    d2: 'Two',
  },
};

function flatten(object, parent) {
  const result = {};
  const generate = (object, parent) => {
    for (let key in object) {
      let newParent = parent + key;
      const value = object[key];
      if (typeof value === 'object') {
        generate(value, newParent + '.');
      } else {
        result[newParent] = value;
      }
    }
  };
  generate(object, parent);
  return result;
}

console.log(flatten(object, ''));
