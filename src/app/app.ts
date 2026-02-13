import { Component, signal } from '@angular/core';
import { Banner } from './banner/banner';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [Banner, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('jonasl');
}
