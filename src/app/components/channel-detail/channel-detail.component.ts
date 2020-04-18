import { Component, OnInit, Input } from '@angular/core';
import { Channel } from 'src/app/models/channel-model';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css']
})
export class ChannelDetailComponent  {

  @Input() channel: Channel;
  

}
