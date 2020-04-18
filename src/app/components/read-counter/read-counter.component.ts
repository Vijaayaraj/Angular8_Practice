import { Component, OnInit } from '@angular/core';
import { KfcService } from 'src/app/services/kfc.service';

@Component({
  selector: 'app-read-counter',
  templateUrl: './read-counter.component.html',
  styleUrls: ['./read-counter.component.css']  
})
export class ReadCounterComponent {
  
  constructor(public kfcService: KfcService) { }

}
