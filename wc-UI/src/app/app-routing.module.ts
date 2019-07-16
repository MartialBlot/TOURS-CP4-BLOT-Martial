import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { EditCircusComponent } from './edit-circus/edit-circus.component';
import { EditInfosComponent } from './edit-infos/edit-infos.component';
import { NewCircusComponent } from './new-circus/new-circus.component';
import { NewInfosComponent } from './new-infos/new-infos.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "circus/:id/infos", component: InfosComponent},
  {path: "circus/:id/edit", component: EditCircusComponent},
  {path: "infos/:id/edit", component: EditInfosComponent},
  {path: "circus/new", component: NewCircusComponent},
  {path: "circus/:id/infos/new", component: NewInfosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
