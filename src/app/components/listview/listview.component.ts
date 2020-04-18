import { Component, OnInit } from '@angular/core';

// ====this defn needs to be at the start itself==================
class Channel {
  id: number;
  name: string;
}

const CHANNELS: Channel[] = [
  { id: 11, name: 'Zee News' },
  { id: 12, name: 'Zee Business' },
  { id: 13, name: 'Sony' },
  { id: 14, name: 'ETV' },
  { id: 15, name: 'Colors' },
  { id: 16, name: 'ET Now' },
  { id: 17, name: 'Bloomberg' },
  { id: 18, name: 'BBC' },
  { id: 19, name: 'CNN' },
  { id: 20, name: 'Nat Geo' }
];

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Tata Sky: The Most Popular TV Channels';
  channels = CHANNELS;
  selectedChannel: Channel;
  onSelect(channel: Channel) { this.selectedChannel = channel; }

}
