import { Component } from '@angular/core';
import { Profile } from '../profile/profile';
import { Description } from '../description/description';
import { Divider } from '../divider/divider';
import { Techstack } from '../techstack/techstack';
import { MyProjects } from '../projects/projects';
import { Cta } from '../cta/cta';

@Component({
  selector: 'app-card',
  imports: [Profile, Description, Divider, Techstack, MyProjects, Cta],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {}
