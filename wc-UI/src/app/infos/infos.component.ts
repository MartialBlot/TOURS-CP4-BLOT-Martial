import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfosService } from '../services/infos.service';
import { Infos } from '../models/infos.model';
import { MessagesService } from '../services/messages.service';
import { Messages } from '../models/messages.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  public id: number;
  public infos;
  public messages;
  public openMailer = true;

  constructor(
    private route: ActivatedRoute,
    private service: InfosService,
    private messageService: MessagesService,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.service.getInfos(this.id).subscribe((infos: Infos) =>{
      this.infos = infos;
    })
    this.messageService.getMessages(this.id).subscribe((message: Messages) =>{
      this.messages = message;
    })
  }

  deleteInfos(id, index){
    if(confirm('Voulez vous vraiment supprimer ?')){
    this.service.deleteInfos(id).subscribe((infos: Infos) => {
      this.infos.splice(index, 1)
      this.toastr.success('Infos supprimées')
    })
    } else {
      this.toastr.warning('Suppression avortée')
    }
  }

  showMessages(){
    this.openMailer = !this.openMailer;
  }

  deleteMessage(id, index){
    if(confirm('Voulez vous vraiment supprimer ?')){
    this.messageService.deleteMessage(id).subscribe((message: Messages) =>{
      this.messages.splice(index, 1);
      this.toastr.success('Message supprimé')
    })
    } else{
      this.toastr.warning('Suppression avortée')
    }
  }
}
