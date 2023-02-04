import {
  defer,
  distinctUntilChanged,
  fromEvent,
  map,
  mapTo,
  merge,
  Observable,
  of,
} from 'rxjs';
import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class FocusWithinService extends Observable<boolean> {
  constructor(
    @Inject(DOCUMENT) documentRef: Document,
    { nativeElement }: ElementRef<HTMLElement>
  ) {
    const focused$ = merge(
      of(nativeElement.contains(documentRef.activeElement)),
      fromEvent(nativeElement, 'focusin').pipe(map(() => true)),
      fromEvent(nativeElement, 'focusout').pipe(map(() => false))
    ).pipe(distinctUntilChanged());

    super((subscriber) => focused$.subscribe(subscriber));
  }
}
