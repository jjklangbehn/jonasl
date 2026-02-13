import { Component } from '@angular/core';
import { Project } from '../project/project';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class MyProjects {}
