import { Component, OnInit } from '@angular/core';
import { SeatService } from './seat.service';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent implements OnInit {
  availableSeats: number[] = [];
  seatsStatus: boolean[] = [];

  constructor(private seatService: SeatService) {}

  ngOnInit(): void {
    this.refreshSeats();
  }

  refreshSeats() {
    this.availableSeats = this.seatService.getAvailableSeats();
    this.seatsStatus = this.seatService.getSeatsStatus();
  }

  bookSeats(numSeats: number) {
    const availableSeats = this.availableSeats;
    const selectedSeats = availableSeats.slice(0, numSeats);
    if (selectedSeats.length === numSeats) {
      if (this.seatService.bookSeats(selectedSeats)) {
        this.refreshSeats();
        alert(`Seats ${selectedSeats.join(', ')} booked successfully!`);
      } else {
        alert('Selected seats are not available.');
      }
    } else {
      alert('Not enough available seats.');
    }
  }
}
