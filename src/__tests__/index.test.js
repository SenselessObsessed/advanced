import { orderByProps, destruct } from '../js/app';

test('should worked', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

    const expected = orderByProps(obj, ["name", "level"]);
    const equal = [
        {key: "name", value: "мечник"}, 
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ];

    expect(expected).toEqual(equal);
});

test('should be undefined', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

    const expected = orderByProps(obj, ["surname", "lvl"]);
    const equal = [
        {"key": "attack","value": 80},
        {"key": "defence", "value": 40},
        {"key": "health", "value": 10},
        {"key": "level", "value": 2},
        {"key": "name", "value": "мечник"}
    ];

    expect(expected).toEqual(equal);
});

test('should be a true destructing', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'
          // <- обратите внимание, описание "засекречено"
        }
      ]	
    }

    const expected = destruct(character);
    const equal = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
      }
    ]

    expect(expected).toEqual(equal);
});