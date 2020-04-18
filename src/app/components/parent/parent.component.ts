import { Component, OnInit } from '@angular/core';
import { KfcService } from 'src/app/services/kfc.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [KfcService]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //called only once. after application / this component is loaded
  }

}
