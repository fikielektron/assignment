import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { AllFlightsComponent } from './components/all-flights/all-flights.component';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkerComponent } from './components/workers-list/worker/worker.component';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    AllFlightsComponent,
    FlightInfoComponent,
    WorkerComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
