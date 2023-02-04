import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-day-01',
  templateUrl: './day-01.component.html',
  styleUrls: ['./day-01.component.scss'],
})
export class Day01Component implements OnInit {
  focused: Element | null = null;

  get name(): string {
    return this.focused ? this.focused.tagName : 'null';
  }

  constructor(private render: Renderer2) {}

  ngOnInit() {}

  onFocusWithin(event: Element | null | boolean) {
    // this.focused = event;

    console.log(event);
  }

  myYellowOutput(event: any) {
    console.log('yellow: ', event);
  }
}
