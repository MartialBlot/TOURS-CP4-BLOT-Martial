import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Circus } from '../models/circus.model';
import { CircusService } from '../services/circus.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-circus',
  templateUrl: './edit-circus.component.html',
  styleUrls: ['./edit-circus.component.scss']
})
export class EditCircusComponent implements OnInit {

  public id: number;
  public circus;

  constructor(
    private route: ActivatedRoute,
    private service: CircusService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.getOneCircus(this.id).subscribe((circus: Circus) => {
        this.circus = circus[0];
      })
    })

  }

  editCircus(id, circus){
    this.service.editCircus(id, circus.value).subscribe((circus: Circus) => {
      this.router.navigateByUrl("");
      this.toastr.success('Cirque modifiées');
    })
  }

}
