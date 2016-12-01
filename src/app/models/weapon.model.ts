export class Weapon {

  jsonType: string = 'weapon';

  name: string;
  vendor: string;
  score: string;
  price: string;
  bonus: string;
  dmg: string;
  rpm: string;
  mag: string;
  talent1: string;
  talent2: string;
  talent3: string;

  copyInto(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

}