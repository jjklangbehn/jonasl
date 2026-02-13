import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-techstack-item',
  imports: [],
  templateUrl: './techstack-item.html',
  styleUrl: './techstack-item.scss',
})
export class TechstackItem {
  @Input() title: any;
  @Input() imgPath: any;
  @Input() years: any;
}
