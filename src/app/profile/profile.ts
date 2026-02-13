import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit, OnDestroy {
  @Input() titles: string[] = [
    'Software Engineer',
    'App Developer',
    'Flutter Fanboy',
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
