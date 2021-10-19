import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardxeComponent } from '../dashboardxe/dashboardxe.component';
import { DashboardhopdongComponent } from '../dashboardhopdong/dashboardhopdong.component';
import { DashboardnhanvienComponent } from '../dashboardnhanvien/dashboardnhanvien.component';


const routes : Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'index'},
  {path: 'index',pathMatch: 'full', component:IndexComponent},
  {path: 'dashboardxe', component:DashboardxeComponent},
  {path: 'dashboardhopdong', component:DashboardhopdongComponent},
  {path: 'dashboardnhanvien', component:DashboardnhanvienComponent},
  {path:"**", component: IndexComponent,pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
    
  ],
  
 
  exports: [RouterModule]
})
export class NavigationModule { }
