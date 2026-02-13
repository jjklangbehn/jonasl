import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  @Input() title: any;
  @Input() description: any;
  @Input() url: any;
  @Input() imgPath: any;
}
