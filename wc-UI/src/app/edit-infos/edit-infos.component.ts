import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfosService } from '../services/infos.service';
import { Infos } from '../models/infos.model';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-infos',
  templateUrl: './edit-infos.component.html',
  styleUrls: ['./edit-infos.component.scss'],
  providers: [DatePipe,],
})
export class EditInfosComponent implements OnInit {

  public id: number;
  public infos;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfosService,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.infoService.getOneInfos(this.id).subscribe((infos: Infos) => {
        this.infos = infos[0];
        this.infos.date = this.datePipe.transform(this.infos.date, 'yyyy-MM-dd');
      })
    })
  }

  editInfos(id, infos){
    this.infoService.editInfos(id, infos.value).subscribe((infos: Infos) => {
      this.router.navigateByUrl("");
      this.toastr.success('Infos du cirque modifiées');
    })
  }

}
