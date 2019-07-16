import { Component, OnInit } from '@angular/core';
import { CircusService } from '../services/circus.service';
import { Circus } from '../models/circus.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-circus',
  templateUrl: './new-circus.component.html',
  styleUrls: ['./new-circus.component.scss']
})
export class NewCircusComponent implements OnInit {

  constructor(
    private service: CircusService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  newCircus(newCircus){
    this.service.createCircus(newCircus.value).subscribe((circus: Circus) => {
      this.router.navigateByUrl("");
    })
  }

}
