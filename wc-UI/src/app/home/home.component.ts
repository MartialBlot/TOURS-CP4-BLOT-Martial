import { Component, OnInit } from '@angular/core';
import { CircusService } from '../services/circus.service';
import { Circus } from '../models/circus.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public circus: Circus

  constructor(
      private service: CircusService,
    ) { }

  ngOnInit() {
    this.service.getCircus().subscribe((circus: Circus) => {
      this.circus = circus;
    })
  }

}
