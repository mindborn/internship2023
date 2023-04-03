import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  user:User|null=null;
  index=0;

  constructor(public userdata: UserdataService, private activatedRoute: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      let index=parseInt(params.get('index')!);
      this.index=index;
      console.log(index);

      this.user=this.userdata.users[index];
    });
  }


}
