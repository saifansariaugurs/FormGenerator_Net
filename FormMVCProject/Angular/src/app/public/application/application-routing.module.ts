import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListApplicationComponent } from './list-application/list-application.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { EditApplicationComponent } from './edit-application/edit-application.component';


const routes: Routes = [
  { path: '', component: ListApplicationComponent, pathMatch: 'full' },
  { path: 'create', component: CreateApplicationComponent },
  { path: 'edit/:appId', component: EditApplicationComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
