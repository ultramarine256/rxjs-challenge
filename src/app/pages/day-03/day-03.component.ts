import { Component, Injectable, OnInit } from '@angular/core';
import {
  catchError,
  combineLatest,
  delay,
  finalize,
  first,
  ignoreElements,
  map,
  Observable,
  of,
  share,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-day-03',
  templateUrl: './day-03.component.html',
})
export class Day03Component implements OnInit {
  readonly submit$ = new Subject<void>();
  readonly requests$ = this.submit$.pipe(
    switchMap(r => this.service.login()),
    share()
  );

  readonly error$ = this.requests$.pipe(ignoreElements());

  readonly loadingState$ = new Subject<'idle' | 'loading'>();
  readonly loginState$ = new Subject<'idle' | 'authorized' | 'error'>();

  readonly vm$ = combineLatest([
    this.loadingState$.pipe(startWith('idle')),
    this.loginState$.pipe(startWith('idle')),
  ]).pipe(map(([loading, login]) => ({ loading, login })));

  constructor(private service: LoginService) {}

  ngOnInit() {}

  login() {
    this.loadingState$.next('loading');
    this.loginState$.next('idle');
    this.service
      .login()
      .pipe(
        first(),
        catchError(r => {
          this.loginState$.next('error');

          of({})
            .pipe(delay(2000), first())

            .subscribe(r => this.loginState$.next('idle'));

          throw 'login-error';
        }),
        tap(r => {
          console.log('tap');
        }),
        finalize(() => {
          this.loadingState$.next('idle');
        })
      )
      .subscribe();
  }
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login() {
    return of(Math.random()).pipe(
      tap(() => console.log('login request')),
      delay(500),
      map(r => {
        if (r < 0.5) {
          throw new Error('Login Failed');
        }
        return 'John Doe';
      })
    );
  }
}
