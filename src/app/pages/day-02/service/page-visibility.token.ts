import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  share,
  startWith,
} from 'rxjs';

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
  'Page Visibility Service',
  {
    factory: () => {
      const doc = inject(DOCUMENT);

      return fromEvent(doc, 'visibilitychange').pipe(
        startWith(false),
        map(() => !doc.hidden),
        distinctUntilChanged(),
        share()
      );
    },
  }
);
