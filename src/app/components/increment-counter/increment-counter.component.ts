import { Component, OnInit } from '@angular/core';
import { KfcService } from 'src/app/services/kfc.service';

@Component({
  selector: 'app-increment-counter',
  templateUrl: './increment-counter.component.html',
  styleUrls: ['./increment-counter.component.css']  
})
export class IncrementCounterComponent {

  counter: number;
  constructor(public kfcServce: KfcService) { }

  onIncrement() {    
    this.kfcServce.increment();    
  }

}
