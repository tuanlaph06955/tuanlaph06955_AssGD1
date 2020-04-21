import { Component, OnInit } from '@angular/core';
import { New } from "../../../new";
import { NewService } from '../../../new.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {

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

  removeNew(id : number){
    return this.newService.deteleNew(id).subscribe(data => {
      this.updateNewData(id);
    })
  }
  updateNewData(id : number){
    let i = 0;
    this.tins.map(x => {
      if (x.id === id) {
        this.tins.splice(i, 1);
      }
      i++;
    });
  }

}
