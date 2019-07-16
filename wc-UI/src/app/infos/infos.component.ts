import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfosService } from '../services/infos.service';
import { Infos } from '../models/infos.model';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  public id: number;
  public infos: Infos;

  constructor(
    private route: ActivatedRoute,
    private service: InfosService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.service.getInfos(this.id).subscribe((infos: Infos) =>{
      this.infos = infos;
    })
  }
}
