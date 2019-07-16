import { Component, OnInit } from '@angular/core';
import { InfosService } from '../services/infos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { Messages } from '../models/messages.model';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.scss']
})
export class SendMessagesComponent implements OnInit {

  public id;

  constructor(
    private service: MessagesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
  })
  }

  newMessage(message){
    this.service.sendMessage(message.value).subscribe((message: Messages) => {
      this.router.navigateByUrl("");
    })
  }

}
