export const orderByProps = (obj, [...awesome]) => {
  const firstObj = [];
  const secondObj = [];
  let result = [];

  awesome.forEach((item) => {
    if (obj[item]) {
      firstObj.push({ key: item, value: obj[item] });
      Reflect.deleteProperty(obj, item);
    }
  });

  const filtred = Object.entries(obj).sort();

  filtred.forEach((item) => secondObj.push({ key: item[0], value: item[1] }));

  result = [...firstObj, ...secondObj];

  return result;
};

export const destruct = (obj) => {
  const { special } = obj;
  special.forEach((item) => {
    if (!item.description) {
      item.description = 'Описание недоступно';
    }
  });
  return special;
};
