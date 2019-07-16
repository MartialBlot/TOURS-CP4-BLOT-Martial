import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfosService } from '../services/infos.service';
import { Infos } from '../models/infos.model';
import { MessagesService } from '../services/messages.service';
import { Messages } from '../models/messages.model';

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
    this.service.deleteInfos(id).subscribe((infos: Infos) => {
      this.infos.splice(index, 1)
    })
  }

  showMessages(){
    this.openMailer = !this.openMailer;
  }

  deleteMessage(id, index){
    this.messageService.deleteMessage(id).subscribe((message: Messages) =>{
      this.messages.splice(index, 1);
    })
  }
}
