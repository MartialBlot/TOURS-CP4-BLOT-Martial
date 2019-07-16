import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { EditCircusComponent } from './edit-circus/edit-circus.component';
import { EditInfosComponent } from './edit-infos/edit-infos.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "circus/:id/infos", component: InfosComponent},
  {path: "circus/:id/edit", component: EditCircusComponent},
  {path: "infos/:id/edit", component: EditInfosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
