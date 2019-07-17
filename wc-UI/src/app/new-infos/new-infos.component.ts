import { Component, OnInit } from '@angular/core';
import { InfosService } from '../services/infos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Infos } from '../models/infos.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-infos',
  templateUrl: './new-infos.component.html',
  styleUrls: ['./new-infos.component.scss']
})
export class NewInfosComponent implements OnInit {

  public id;

  constructor(
    private service: InfosService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
  })
}

  newInfos(infos){
    this.service.createInfos(infos.value).subscribe((infos: Infos) => {
      this.toastr.success("Les nouvelles infos ont été ajoutée")
      this.router.navigateByUrl("");
    }, (err) => {
      this.toastr.error("Problème lors de l'ajout des nouvelles infos");
    });
  }

}
