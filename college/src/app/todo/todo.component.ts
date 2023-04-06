import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[];

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {

    this.httpClient
    .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    .subscribe((response)=>{
      console.log('received data from server');
      // console.log(response);
      this.todos=response;
    });
    console.log('after get request');

    // this.httpClient.post("https://xyz.com/abcd",{}).subscribe((res)=>{});

  }

}
