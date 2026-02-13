import { Component, signal, OnDestroy } from '@angular/core';
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
export class Card implements OnDestroy {
  showStory = signal(false);
  countdown = signal(5);
  paused = signal(false);

  private timerId: ReturnType<typeof setInterval> | null = null;
  private holdTimeout: ReturnType<typeof setTimeout> | null = null;
  private isHolding = false;
  private wasHolding = false;

  openStory() {
    this.showStory.set(true);
    this.countdown.set(5);
    this.paused.set(false);

    this.timerId = setInterval(() => {
      if (this.paused()) return;
      const next = this.countdown() - 1;
      this.countdown.set(next);
      if (next <= 0) {
        this.closeStory();
      }
    }, 1000);
  }

  closeStory() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.clearHoldTimeout();
    this.paused.set(false);
    this.isHolding = false;
    this.showStory.set(false);
  }

  pauseStory() {
    this.isHolding = false;
    this.holdTimeout = setTimeout(() => {
      this.isHolding = true;
      this.paused.set(true);
    }, 150);
  }

  resumeStory() {
    this.clearHoldTimeout();
    if (this.isHolding) {
      this.wasHolding = true;
      this.isHolding = false;
      this.paused.set(false);
    }
  }

  handleClick() {
    if (this.wasHolding) {
      this.wasHolding = false;
      return;
    }
    this.closeStory();
  }

  private clearHoldTimeout() {
    if (this.holdTimeout) {
      clearTimeout(this.holdTimeout);
      this.holdTimeout = null;
    }
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.clearHoldTimeout();
  }
}
