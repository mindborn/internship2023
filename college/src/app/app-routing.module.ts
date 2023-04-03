import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {
    path:'',
    component: UserhomeComponent
  },
  {
    path: 'ud/:index',
    component: UserdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
