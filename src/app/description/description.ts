import { Component } from '@angular/core';
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-description',
  imports: [Tag],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {}
