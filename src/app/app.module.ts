// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatService } from './seat-booking/seat.service';

@NgModule({
  declarations: [AppComponent, SeatBookingComponent],
  imports: [BrowserModule],
  providers: [SeatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
