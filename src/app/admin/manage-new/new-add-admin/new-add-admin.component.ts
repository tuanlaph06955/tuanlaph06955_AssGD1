import { Component, OnInit } from '@angular/core';
import { New } from '../../../new';
import { NewService } from '../../../new.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-add-admin',
  templateUrl: './new-add-admin.component.html',
  styleUrls: ['./new-add-admin.component.scss']
})
export class NewAddAdminComponent implements OnInit {

  tin:New = new New();
  constructor(
  private newService : NewService,
  private route: Router,
  ) { }

  ngOnInit(): void {
  }
  addNew(){
    return this.newService.addNew(this.tin).subscribe(data =>{
      if(data && data.id){
        this.route.navigateByUrl('/admin/new');
      }
    })
  }

}
