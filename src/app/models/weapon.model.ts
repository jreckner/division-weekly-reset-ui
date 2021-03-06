import { md5 } from '../services/md5-service';

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

  getHash(): string {
    let self = '';
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        self += this[i];
      }
    }
    return md5(self);
  }

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
