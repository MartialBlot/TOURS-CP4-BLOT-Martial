import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CircusService } from '../services/circus.service';
import { InfosService } from '../services/infos.service';
import { Circus } from '../models/circus.model';
import { Infos } from '../models/infos.model';

@Component({
  selector: 'app-edit-infos',
  templateUrl: './edit-infos.component.html',
  styleUrls: ['./edit-infos.component.scss']
})
export class EditInfosComponent implements OnInit {

  public id: number;
  public circus;
  public infos;

  constructor(
    private route: ActivatedRoute,
    private service: CircusService,
    private infoService: InfosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.infoService.getOneInfos(this.id).subscribe((infos: Infos) => {
        this.infos = infos[0];
      })
      this.service.getOneCircus(this.infos.circus_id).subscribe((circus: Circus) => {
        this.circus = circus[0];
      })
    })

  }

  editInfos(id, infos){
    this.infoService.editInfos(id, infos.value).subscribe((infos: Infos) => {
      // this.router.navigateByUrl("['circus',circus.id,'infos']");
    })
  }

}
