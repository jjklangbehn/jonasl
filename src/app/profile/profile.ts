import { Component, OnInit, OnDestroy, Input, output } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit, OnDestroy {
  pictureClicked = output();
  @Input() titles: string[] = [
    'Software Engineer',
    'App Developer',
    'Flutter Fan',
    'Web Developer',
    'Angular Achiever',
    'Mobile Developer',
  ];

  currentTitle = '';
  private currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.currentTitle = this.titles[0];
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      this.currentTitle = this.titles[this.currentIndex];
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
