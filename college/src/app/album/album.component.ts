import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Photo } from '../photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  photo$: Observable<Photo[]>|null=null;

  // photos:Photo[]=[];

  private httpClient=inject(HttpClient);

  // constructor(private httpClient: HttpClient)
  // {

  // }

  ngOnInit(): void {
    this.photo$=this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");

    // this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
    // .subscribe((response)=>{
    //   this.photos=response;
    // });
  }

}
