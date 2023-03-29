import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  a=0;
  b=0;
  c=0;

  onAdd()
  {
    this.c=this.a+this.b;
  }

  onSub()
  {
    this.c=this.a-this.b;
  }

}
