import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PAGE_VISIBILITY } from './service/page-visibility.token';

@Component({
  selector: 'app-day-02',
  templateUrl: './day-02.component.html',
})
export class Day02Component implements OnInit {
  constructor(
    @Inject(PAGE_VISIBILITY)
    readonly pageVisibility$: Observable<boolean>
  ) {}

  ngOnInit() {
    this.pageVisibility$.subscribe((r) => console.log(r));
  }
}
