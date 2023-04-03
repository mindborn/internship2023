import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent {

  constructor(public c: CounterService)
  {

  }

  increment()
  {
    this.c.count++;
  }
}
