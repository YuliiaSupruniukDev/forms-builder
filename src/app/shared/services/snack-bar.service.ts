import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  #duration: number = 2000;
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: this.#duration,
    });
  }

  set duration(value: number) {
    this.#duration = value;
  }
}
