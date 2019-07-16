import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfosService } from '../services/infos.service';
import { Infos } from '../models/infos.model';

@Component({
  selector: 'app-edit-infos',
  templateUrl: './edit-infos.component.html',
  styleUrls: ['./edit-infos.component.scss']
})
export class EditInfosComponent implements OnInit {

  public id: number;
  public infos;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.infoService.getOneInfos(this.id).subscribe((infos: Infos) => {
        this.infos = infos[0];
      })
    })
  }

  editInfos(id, infos){
    this.infoService.editInfos(id, infos.value).subscribe((infos: Infos) => {
      this.router.navigateByUrl("");
    })
  }

}
