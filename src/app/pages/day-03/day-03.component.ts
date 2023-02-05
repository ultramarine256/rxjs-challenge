import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { delay, map, Observable, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-day-03',
  templateUrl: './day-03.component.html',
})
export class Day03Component implements OnInit {
  readonly submit$ = new Subject<void>();

  constructor(@Inject(LoginService) private readonly service: LoginService) {}

  ngOnInit() {
    this.service.login();
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoginService extends Observable<string> {
  private readonly stream$: Observable<string>;

  constructor() {
    super(subscriber => this.stream$.subscribe(subscriber));
    this.stream$ = of(Math.random()).pipe(
      tap(() => console.log('login request')),
      delay(2000),
      map(r => {
        if (r < 0.5) {
          throw new Error('Login Failed');
        }
        return 'John Doe';
      })
    );
  }

  login() {
    return this.stream$;
  }
}
