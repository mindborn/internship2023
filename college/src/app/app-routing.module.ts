import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ItemListComponent } from './item-list/item-list.component';
import { Test1Component } from './test1/test1.component';
import { TodoComponent } from './todo/todo.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '',
    component: UserhomeComponent
  },
  {
    path: 'ud/:index',
    component: UserdetailsComponent
  },
  {
    path: 'item-list',
    component: ItemListComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
