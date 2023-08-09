import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  private totalSeats: number = 80;
  private seats: boolean[] = Array(this.totalSeats).fill(false);

  constructor() {}

  getAvailableSeats(): number[] {
    const availableSeats: number[] = [];
    let consecutiveEmptySeats = 0;

    for (let i = 0; i < this.totalSeats; i++) {
      if (!this.seats[i]) {
        consecutiveEmptySeats++;
        if (consecutiveEmptySeats >= 7) {
          return Array.from({ length: 7 }, (_, index) => i - 6 + index);
        }
      } else {
        consecutiveEmptySeats = 0;
      }
    }

    const firstEmptyIndex = this.seats.indexOf(false);
    if (firstEmptyIndex !== -1) {
      return Array.from({ length: 7 }, (_, index) => firstEmptyIndex + index);
    }

    return [];
  }

  bookSeats(seatNumbers: number[]): boolean {
    if (seatNumbers.every((num) => !this.seats[num])) {
      seatNumbers.forEach((num) => (this.seats[num] = true));
      return true;
    }
    return false;
  }

  getSeatsStatus(): boolean[] {
    return this.seats;
  }
}
