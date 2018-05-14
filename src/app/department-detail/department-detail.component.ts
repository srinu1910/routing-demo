import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentid}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentid:number;
  constructor(private actrouter:ActivatedRoute) { }

  ngOnInit() {
    this.departmentid = parseInt(this.actrouter.snapshot.paramMap.get('id'));
  }

}
