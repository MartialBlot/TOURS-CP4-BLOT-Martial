import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router, ParamMap } from '@angular/router';
import { Circus } from '../models/circus.model';
import { CircusService } from '../services/circus.service';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-circus',
  templateUrl: './edit-circus.component.html',
  styleUrls: ['./edit-circus.component.scss']
})
export class EditCircusComponent implements OnInit {

  public circus;

  constructor(
    private route: ActivatedRoute,
    private service: CircusService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: ParamMap) => this.service.getOneCircus(params['id']))
    ).subscribe((circus: Circus )=> {
        this.circus = circus[0];
    })

  }

  editCircus(id, circus){
    this.service.editCircus(id, circus.value).subscribe((circus: Circus) => {
      this.router.navigateByUrl("");
      this.toastr.success('Cirque modifiées');
    }, (err) => {
      this.toastr.error("Problème lors de la modification des données du cirque");
    });
  }

}
