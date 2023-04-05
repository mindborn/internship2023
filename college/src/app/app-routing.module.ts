import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path:'',
    component: UserhomeComponent
  },
  {
    path: 'ud/:index',
    component: UserdetailsComponent
  },
  {
    path:'item-list',
    component: ItemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
