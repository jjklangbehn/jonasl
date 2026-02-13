import { Component } from '@angular/core';
import { TechstackItem } from './techstack-item/techstack-item';

@Component({
  selector: 'app-techstack',
  imports: [TechstackItem],
  templateUrl: './techstack.html',
  styleUrl: './techstack.scss',
})
export class Techstack {}
