export const KeyCode = {
  ENTER: 13
};

export const getRandomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

export const deepFreeze = (obj) => {
  const propNames = Object.getOwnPropertyNames(obj);

  // Замораживаем свойства для заморозки самого объекта
  propNames.forEach((name) => {
    const prop = obj[name];

    // Заморозка свойства prop, если оно объект
    if (typeof prop === `object` && prop !== null) {
      deepFreeze(prop);
    }
  });

  // Заморозить сам объект obj (ничего не произойдёт, если он уже заморожен)
  return Object.freeze(obj);
};
