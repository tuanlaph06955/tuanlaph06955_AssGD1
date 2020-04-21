import { Component, OnInit } from '@angular/core';
import { New } from "../../../../new";
import { NewService } from '../../../../new.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  page = 1;
  pageSize = 6;
  constructor(
    private activatedRoute : ActivatedRoute,
    private newService : NewService
  ) { }

  ngOnInit(): void {
    this.getNew();
  }

  tins: New[] = [];

  getNew(){
    return this.newService.getNew().subscribe(data => {
      this.tins = data;
    })
  }

}
