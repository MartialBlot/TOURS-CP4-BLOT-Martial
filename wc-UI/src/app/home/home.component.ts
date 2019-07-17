import { Component, OnInit } from '@angular/core';
import { CircusService } from '../services/circus.service';
import { Circus } from '../models/circus.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public circus;

  constructor(
      private service: CircusService,
      private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.service.getCircus().subscribe((circus: Circus[]) => {
      this.circus = circus;
    })
  }

  deleteCircus(id, index){
    if(confirm('Voulez vous vraiment supprimer ?')){
    this.service.deleteCircus(id).subscribe((circus: Circus) =>{
      this.circus.splice(index, 1);
      this.toastr.success('Cirque supprimés')
    })
    } else {
      this.toastr.warning('Suppression avortée')
    }
  }

}
