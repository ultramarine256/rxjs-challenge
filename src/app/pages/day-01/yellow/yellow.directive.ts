import { Directive, ElementRef, Inject } from '@angular/core';
import { fromEvent, map, merge, Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[myYellow2]',
  outputs: ['myYellow'],
})
export class YellowDirective {
  myYellow: Observable<boolean>;

  constructor(private el: ElementRef, @Inject(DOCUMENT) document: Document) {
    const myYellow = new Observable((subscriber) => {
      subscriber.next('123');
    });
    this.el.nativeElement.style.backgroundColor = 'yellow';

    const obs1: Observable<null> = merge(
      of(el.nativeElement.contains(document.activeElement))
    );

    const obs2 = merge(
      fromEvent(el.nativeElement, 'focusin').pipe(map((r) => true))
    );

    const a: Observable<boolean> = fromEvent(el.nativeElement, 'focusin').pipe(
      map(() => true)
    );

    this.myYellow = a;

    const stream$ = merge();
  }
}
