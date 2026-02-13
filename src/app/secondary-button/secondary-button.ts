import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.scss',
})
export class SecondaryButton {
  @Input() title: any;
  @Input() url: any;
  @Input() icon: string | null = null;
  @Input() download: boolean = false;
}
