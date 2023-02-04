import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-component',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  constructor(public router: Router) {}
}
