import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  get verb(): string {
    const now = new Date();
    const gmtPlus1Hour = (now.getUTCHours() + 1) % 24;
    return gmtPlus1Hour >= 23 || gmtPlus1Hour < 7 ? 'sleeping' : 'coding';
  }
}
