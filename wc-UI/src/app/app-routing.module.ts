import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "circus/:id/infos", component: InfosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
