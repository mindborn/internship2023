import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  message='This is home page';
  n1=10;
  n2=20;

  addNumbers()
  {
    console.log('addNumbers() invoked');
    return this.n1+this.n2;
  }

  incN1()
  {
    this.n1++;
  }
}
