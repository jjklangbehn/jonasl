import { Component } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { SecondaryButton } from '../secondary-button/secondary-button';

@Component({
  selector: 'app-cta',
  imports: [PrimaryButton, SecondaryButton],
  templateUrl: './cta.html',
  styleUrl: './cta.scss',
})
export class Cta {
  getSurprise() {
    const urls: string[] = [
      'http://endless.horse',
      'https://papertoilet.com',
      'https://isitchristmas.com',
      'https://www.koalastothemax.com',
      'https://zzz.zoomquilt.org',
      'http://www.youshouldhaveseenthis.com',
      'https://www.thisman.org',
      'https://pointerpointer.com',
      'https://www.whitescreen.online/de/gefälschter-windows-10-update-bildschirm/',
      'https://beesbeesbeesbees.com',
      'https://thenicestplace.net',
      'https://sandspiel.club',
    ];

    const random = Math.floor(Math.random() * urls.length);
    return urls[random];
  }
}
