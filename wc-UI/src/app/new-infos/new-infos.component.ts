import { Component, OnInit } from '@angular/core';
import { InfosService } from '../services/infos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Infos } from '../models/infos.model';

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
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
  })
}

  newInfos(infos){
    this.service.createInfos(infos.value).subscribe((infos: Infos) => {
      this.router.navigateByUrl("");
    })
  }

}
