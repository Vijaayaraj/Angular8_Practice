import { Component, OnInit } from '@angular/core';
import { KfcService } from '../../services/kfc.service';

@Component({
  selector: 'app-kfc',
  templateUrl: './kfc.component.html',
  styleUrls: ['./kfc.component.css'],
  providers: [KfcService]
})
export class KfcComponent  {

  name = 'Fast Food:';
  constructor(public myinfo: KfcService) {console.log('Kfc01 Comp ctr'); }

}
