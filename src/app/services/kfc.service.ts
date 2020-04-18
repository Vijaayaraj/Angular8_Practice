import { Injectable } from '@angular/core';

@Injectable()
export class KfcService {

  msg = 'KFC\'s fiery burgers' ;
  counter : number;
  constructor() {
    console.log('KfcService ctr');
    this.counter = 0;
  }
  
  increment() {
    this.counter++;
    console.log(this.counter);
  }

  readCounter() : number {
    return this.counter;
  }

}
