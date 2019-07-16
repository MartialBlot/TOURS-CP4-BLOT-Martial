import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { EditCircusComponent } from './edit-circus/edit-circus.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "circus/:id/infos", component: InfosComponent},
  {path: "circus/:id/edit", component: EditCircusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
