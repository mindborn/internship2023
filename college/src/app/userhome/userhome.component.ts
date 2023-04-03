import { UserdataService } from './../userdata.service';
import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent {

  constructor(public userdata: UserdataService)
  {

  }

}
