import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home-page',
  template: `
    <a
      href="https://github.com/AngularWave/rxjs-challenge"
      target="_blank"
      class="d-flex justify-content-center mb-4 text-center"
    >
      rxjs-challenge
    </a>
    <div class="list-group">
      <a routerLink="/day-01" class="list-group-item list-group-item-action">
        <div>day-01</div>
        <small>Create an Observable to track focus in a section of the page</small>
      </a>
      <a routerLink="/day-02" class="list-group-item list-group-item-action">
        <div>day-02</div>
        <small>Create a page visibility stream.</small>
      </a>
      <a routerLink="/day-03" class="list-group-item list-group-item-action">
        <div>day-03</div>
        <small>Show error message for 5 seconds if login has failed</small>
      </a>
      <a routerLink="/day-04" class="list-group-item list-group-item-action"> day-04 </a>
      <a routerLink="/day-05" class="list-group-item list-group-item-action"> day-05 </a>
    </div>
  `,
  styles: [``],
})
export class HomePage implements OnInit {
  ngOnInit() {
    const a$: Observable<string[]> = of([]);
    const b$ = forkJoin([a$]);
  }
}
