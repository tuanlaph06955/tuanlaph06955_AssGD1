import { Component, OnInit } from '@angular/core';
import { New } from '../../../../new';
import { NewService } from '../../../../new.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  public tin:New;
  constructor(
    public activatedRoute : ActivatedRoute,
    public newService : NewService,
    public route : Router

  ) { }

  ngOnInit() {
    this.getIdNew();
  }
  getIdNew(){
    this.activatedRoute.params.subscribe(tin => {
      this.newService.getNewByID(tin.id).subscribe(data=> {
        this.tin = data;
      })
    })
  }

}
