import { Component, OnInit } from '@angular/core';
import { interval, of, Subject, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-day-05',
  templateUrl: './day-05.component.html',
})
export class Day05Component implements OnInit {
  click = new Subject();
  timer: number = 5;
  timerSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.restart();
  }

  restart() {
    this.timerSubscription.unsubscribe();
    this.timer = 5;
    this.timerSubscription = interval(1000)
      .pipe(
        tap(r => {
          this.timer--;
          if (this.timer <= 0) {
            this.timerSubscription.unsubscribe();
          }

          console.log(123);
        })
      )
      .subscribe();
  }
}
