import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListviewComponent } from './components/listview/listview.component';
import { ChannelDetailComponent } from './components/channel-detail/channel-detail.component';
import { Listview2Component } from './components/listview2/listview2.component';
import { PowerOfPipe } from './pipes/power-of.pipe';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { KfcComponent } from './components/kfc/kfc.component';
import { KfcService } from './services/kfc.service';
import { IncrementCounterComponent } from './components/increment-counter/increment-counter.component';
import { ReadCounterComponent } from './components/read-counter/read-counter.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    ChannelDetailComponent,
    Listview2Component,
    PowerOfPipe,
    TempConverterPipe,
    KfcComponent,
    IncrementCounterComponent,
    ReadCounterComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
